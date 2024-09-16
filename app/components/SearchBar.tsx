import React from "react";

const SearchBar = () => {
  const locations = ["Abuja", "Lagos", "Rivers", "Kano"];

  return (
    <div className="w-full relative text-sm text-gray-500 px-16">
      <input
        type="search"
        name=""
        id=""
        placeholder="Search for shortstays by type, size or amenities"
        className="rounded-full w-full p-4 text-xs"
      />
      <span className="text-xs bg-transparent border-[1px] border-r-0 border-y-0 border-l-gray-500 text-gray-400 absolute top-[.925rem] right-52">
        <select className="px-2" title="Location" name="Location" id="">
          <option className="border-0" value="" disabled>
            Location
          </option>
          {locations.map((location) => (
            <option className="border-0" key={location} value="location">
              {location}
            </option>
          ))}
        </select>
      </span>

      <button className="absolute right-[4.5rem] top-1.5 rounded-full text-white bg-accent py-2 px-6 text-sm">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
