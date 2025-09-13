import { Link, useParams } from 'react-router';
import useCountryDetail from '../hooks/useCountryDetail';
import { FaArrowLeftLong } from 'react-icons/fa6';
import useCountriesQuery from '../hooks/useCountriesQuery';
import formatNumber from '../utils/formatNumber';
import DetailPageSkeleton from '../components/DetailPageSkeleton';

export default function DetailPage() {
  const { alpha } = useParams();
  const { data: countries } = useCountriesQuery();
  const { data, isLoading, error } = useCountryDetail(alpha);

  // if (isLoading) {
  //   return (
  //     <div className="flex min-h-[calc(100svh-4.5rem)] items-center justify-center bg-Grey-50 text-xl font-bold dark:bg-Blue-950">
  //       <p>Loading data...</p>
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="flex min-h-[calc(100svh-4.5rem)] items-center justify-center bg-Grey-50 text-xl font-bold dark:bg-Blue-950">
        <p>Country not found</p>
      </div>
    );
  }

  const country = data?.[0] || [];
  const firstNativeKey = Object.keys(country?.name?.nativeName || {})[0];
  const firstNativeName = country?.name?.nativeName?.[firstNativeKey]?.common;
  const allCurrencies = Object.values(country?.currencies || []).map(
    (currency) => currency?.name || '',
  );
  const allLanguages = Object.values(country?.languages || []);
  const borderCountryName =
    country?.borders?.map(
      (code) => countries?.find((c) => c.cca3 === code) || null,
    ) || [];

  return (
    <section className="flex min-h-[calc(100svh-4.5rem)] flex-col gap-y-12 bg-Grey-50 px-[5%] py-12 dark:bg-Blue-950">
      <Link
        to="/"
        className="flex w-fit items-center gap-x-2 rounded-md bg-White px-8 py-2 shadow-lg outline-none hover:ring-2 hover:ring-Grey-950 focus:ring-2 focus:ring-Grey-950 dark:bg-Blue-900 dark:hover:ring-White dark:focus:ring-White"
      >
        <FaArrowLeftLong />
        Back
      </Link>
      {isLoading ? (
        <DetailPageSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:items-center md:gap-x-16">
          <img src={country.flags.svg} alt={country.flags.alt} />
          <div className="flex flex-col gap-y-8">
            <h2 className="text-2xl font-bold">{country.name.common}</h2>
            <div className="flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:gap-x-12">
              <div className="space-y-2">
                <p>
                  Native Name:{' '}
                  <span className="font-light">
                    {firstNativeName ?? 'No native name'}
                  </span>
                </p>
                <p>
                  Population:{' '}
                  <span className="font-light">
                    {formatNumber(country.population) ?? 'Unknown population'}
                  </span>
                </p>
                <p>
                  Region:{' '}
                  <span className="font-light">
                    {country.region ?? 'No region'}
                  </span>
                </p>
                <p>
                  Sub Region:{' '}
                  <span className="font-light">
                    {country.subregion ?? 'No subregion'}
                  </span>
                </p>
                <p>
                  Capital:{' '}
                  <span className="font-light">
                    {country.capital?.length
                      ? country.capital.join(', ')
                      : 'No capital city'}
                  </span>
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  Top Level Domain:{' '}
                  <span className="font-light">
                    {country.tld ?? 'No top level domain'}
                  </span>
                </p>
                <p>
                  Currencies:{' '}
                  <span className="font-light">
                    {allCurrencies?.length
                      ? allCurrencies.join(', ')
                      : 'No official currency'}
                  </span>
                </p>
                <p>
                  Languages:{' '}
                  <span className="font-light">
                    {allLanguages?.length
                      ? allLanguages.join(', ')
                      : 'No official language'}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 xl:flex-row">
              <h3 className="shrink-0 py-2 text-xl">Border Countries:</h3>
              <div className="flex flex-wrap items-center gap-2">
                {borderCountryName.length ? (
                  borderCountryName?.map((borderCountry) => (
                    <Link
                      key={borderCountry?.name.common}
                      to={`/countries/${borderCountry?.cca3}`}
                      className="rounded-md bg-White px-4 py-2 shadow-sm outline-none hover:ring-2 hover:ring-Grey-950 focus:ring-2 focus:ring-Grey-950 dark:bg-Blue-900 dark:hover:ring-White dark:focus:ring-White"
                    >
                      {borderCountry?.name.common}
                    </Link>
                  ))
                ) : (
                  <p>No bordering countries</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
