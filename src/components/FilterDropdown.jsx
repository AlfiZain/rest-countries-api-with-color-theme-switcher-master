import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function FilterDropdown({ regions, regionSelected, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-2/3 cursor-pointer items-center justify-between rounded-md bg-White p-4 shadow-sm transition duration-300 outline-none hover:ring-2 hover:ring-Grey-950 focus:ring-2 focus:ring-Grey-950 sm:w-fit sm:gap-x-8 dark:bg-Blue-900 dark:hover:ring-White dark:focus:ring-White"
      >
        Filter by Region
        <IoIosArrowDown
          className={`transition duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <ul
        className={`absolute top-16 flex w-2/3 flex-col space-y-2 rounded-md bg-White p-4 text-sm shadow-sm transition-all duration-300 sm:w-full dark:bg-Blue-900 ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-10 opacity-0'}`}
      >
        {regions.map((region, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setIsOpen(false);
                onClick(region);
              }}
              className="flex w-full cursor-pointer items-center justify-between rounded-sm p-1 text-left transition duration-300 outline-none hover:ring-2 hover:ring-Grey-950 focus:ring-2 focus:ring-Grey-950 dark:hover:ring-White dark:focus:ring-White"
            >
              {region}
              {regionSelected === region && <FaCheck />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
