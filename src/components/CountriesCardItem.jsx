import { Link } from 'react-router';
import formatNumber from '../utils/formatNumber';

export default function CountriesCardItem({ country }) {
  return (
    <Link
      to={`/countries/${country.cca3}`}
      className="overflow-hidden rounded-md bg-White shadow-md transition duration-300 outline-none hover:ring-2 hover:ring-Grey-950 focus:ring-2 focus:ring-Grey-950 dark:bg-Blue-900 dark:hover:ring-White dark:focus:ring-White"
    >
      <div>
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="h-auto w-full shadow-sm"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{country.name.common}</h2>
        <p>
          Population:{' '}
          <span className="font-light">{formatNumber(country.population)}</span>
        </p>
        <p>
          Region: <span className="font-light">{country.region}</span>
        </p>
        <p>
          Capital:{' '}
          <span className="font-light">
            {country.capital?.[0] || 'No Capital'}
          </span>
        </p>
      </div>
    </Link>
  );
}
