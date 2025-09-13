import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import CountriesCardList from '../components/CountriesCardList';
import FilterDropdown from '../components/FilterDropdown';
import SearchBar from '../components/SearchBar';
import useCountriesQuery from '../hooks/useCountriesQuery';
import useDebounce from '../hooks/useDebounce';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data = [], isLoading, error } = useCountriesQuery();
  const [regionSelected, setRegionSelected] = useState(
    () => searchParams.get('region') || '',
  );
  const [countryName, setCountryName] = useState(
    () => searchParams.get('name') || '',
  );
  const debounceCountryName = useDebounce(countryName, 300) || '';

  const handleClickRegion = (region) => {
    setRegionSelected((prev) => (prev === region ? '' : region));
  };

  const handleChangeKeyword = (event) => {
    setCountryName(event.target.value);
  };

  useEffect(() => {
    const params = {};
    if (debounceCountryName) params.name = debounceCountryName;
    if (regionSelected) params.region = regionSelected;

    setSearchParams(params);
  }, [debounceCountryName, regionSelected, setSearchParams]);

  const countries = useMemo(() => {
    return (
      data
        ?.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(debounceCountryName?.toLowerCase()),
        )
        .filter((country) => country.region.includes(regionSelected))
        .sort((a, b) => a.name.common.localeCompare(b.name.common)) || []
    );
  }, [data, debounceCountryName, regionSelected]);

  const regions = useMemo(() => {
    return (
      [...new Set(data?.map((country) => country.region))].sort((a, b) =>
        a.localeCompare(b),
      ) || []
    );
  }, [data]);

  if (error) {
    return (
      <div className="flex min-h-[calc(100svh-4.5rem)] items-center justify-center bg-Grey-50 text-xl font-bold dark:bg-Blue-950">
        <p>Error loading data: {error?.message}</p>
      </div>
    );
  }

  return (
    <section className="flex min-h-[calc(100svh-4.5rem)] flex-col gap-y-6 bg-Grey-50 px-[5%] py-12 dark:bg-Blue-950">
      <div className="flex flex-col gap-y-6 sm:flex-row sm:justify-between lg:px-12 xl:px-16">
        <SearchBar name={countryName} onChange={handleChangeKeyword} />
        <FilterDropdown
          regions={regions}
          regionSelected={regionSelected}
          onClick={handleClickRegion}
        />
      </div>
      <CountriesCardList countries={countries} isLoading={isLoading} />
    </section>
  );
}
