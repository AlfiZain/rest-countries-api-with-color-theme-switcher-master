import { useQuery } from '@tanstack/react-query';
import { fetchCountriesList } from '../api/countries';

export default function useCountriesQuery() {
  return useQuery({ queryKey: ['countries'], queryFn: fetchCountriesList });
}
