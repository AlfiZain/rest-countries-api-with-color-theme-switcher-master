const BASE_URL = 'https://restcountries.com/v3.1/';

export async function fetchCountriesList() {
  const response = await fetch(
    `${BASE_URL}all?fields=name,cca3,capital,flags,region,population`,
  );

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchCountryDetail(alpha) {
  const response = await fetch(`${BASE_URL}alpha/${alpha}`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
