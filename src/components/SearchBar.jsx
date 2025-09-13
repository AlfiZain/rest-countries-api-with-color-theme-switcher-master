import { MdOutlineSearch } from 'react-icons/md';

export default function SearchBar({ name, onChange }) {
  return (
    <label
      htmlFor="search-country"
      className="dark:focus-within::ring-White flex cursor-pointer items-center rounded-md bg-White text-Grey-400 shadow-sm transition duration-300 focus-within:ring-2 focus-within:ring-Grey-950 hover:ring-2 hover:ring-Grey-950 md:w-2/5 dark:bg-Blue-900 dark:text-White dark:hover:ring-White"
    >
      <MdOutlineSearch className="mx-6 text-4xl" />
      <input
        id="search-country"
        type="text"
        value={name}
        onChange={onChange}
        placeholder="Search for a country..."
        className="w-full cursor-pointer py-4 pr-2 text-sm outline-none placeholder:text-Grey-400 dark:placeholder:text-White"
      />
    </label>
  );
}
