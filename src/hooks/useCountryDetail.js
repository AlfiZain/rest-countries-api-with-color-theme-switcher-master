import { useQuery } from '@tanstack/react-query';
import { fetchCountryDetail } from '../api/countries';

export default function useCountryDetail(alpha) {
  return useQuery({
    queryKey: ['country', alpha],
    queryFn: () => fetchCountryDetail(alpha),
  });
}
