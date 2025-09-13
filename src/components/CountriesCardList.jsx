import CardSkeleton from './CardSkeleton';
import CountriesCardItem from './CountriesCardItem';

export default function CountriesCardList({ countries, isLoading }) {
  return (
    <div className="grid grid-cols-1 gap-6 px-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-12 lg:px-12 xl:px-16">
      {isLoading ? (
        Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)
      ) : countries.length ? (
        countries.map((country, index) => (
          <CountriesCardItem key={index} country={country} />
        ))
      ) : (
        <div className="col-span-1 my-16 flex items-center justify-center text-xl font-bold sm:col-span-2 md:col-span-3 lg:col-span-4">
          <p>No countries found</p>
        </div>
      )}
    </div>
  );
}
