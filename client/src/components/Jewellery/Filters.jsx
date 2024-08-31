"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const Filters = () => {
  const router = useRouter();

  // State to manage selected options
  const [selectedFilters, setSelectedFilters] = useState({
    product_type: [],
    price: [],
    metal_color: [],
    metal_purity: [],
    weight: [],
  });

  // State to manage dropdown visibility
  const [dropdowns, setDropdowns] = useState({
    product_type: false,
    price: false,
    metal_color: false,
    metal_purity: false,
    weight: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (filterName) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  // Toggle selection of an option
  const toggleSelection = (filterName, option) => {
    setSelectedFilters((prevState) => {
      const currentSelections = prevState[filterName];
      if (currentSelections?.includes(option)) {
        // Remove the option if it's already selected
        return {
          ...prevState,
          [filterName]: currentSelections.filter((item) => item !== option),
        };
      } else {
        // Add the option if it's not selected
        return {
          ...prevState,
          [filterName]: [...currentSelections, option],
        };
      }
    });
  };

  // Function to generate a query string from selected filters
  const generateQueryString = () => {
    const query = {};

    Object.keys(selectedFilters).forEach((filter) => {
      if (selectedFilters[filter].length > 0) {
        query[filter] = selectedFilters[filter].join(",");
      }
    });

    return query;
  };

  // Apply filters and update the URL
  const applyFilters = () => {
    const queryString = generateQueryString();
    const searchParams = new URLSearchParams(queryString).toString();
    router.push(`/jewellery?${searchParams}`);
  };

  // Dummy data for dropdowns (replace with your actual data)
  const filterOptions = {
    product_type: ["Rings", "Necklaces", "Bracelets"],
    price: ["₹0 - ₹5,000", "₹5,000 - ₹10,000", "₹10,000 - ₹20,000"],
    metal_color: ["Yellow Gold", "White Gold", "Rose Gold"],
    metal_purity: ["22 Karat", "18 Karat", "14 Karat"],
    weight: ["0 - 10 grams", "10 - 20 grams", "20 - 30 grams"],
  };

  return (
    <div className="w-full lg:w-[75%] mx-auto px-4 py-2 z-[99]">
      <div className="w-full flex flex-col lg:flex-row justify-between border-b border-[#242424] py-4 mb-6">
        <div className="flex flex-col items-start gap-4 justify-between w-full lg:w-auto">
          <h2 className="text-lg font-semibold">Jewellery (340)</h2>
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {Object.keys(filterOptions).map((filter) => (
              <div className="relative" key={filter}>
                <button
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700"
                  onClick={() => toggleDropdown(filter)}
                >
                  <span>{filter.toUpperCase().replace("_", " ")}</span>
                  <Icon
                    icon={`teenyicons:${
                      dropdowns[filter] ? "up" : "down"
                    }-solid`}
                    width={16}
                  />
                </button>
                {dropdowns[filter] && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-[99]">
                    <ul className="py-1 text-gray-700">
                      {filterOptions[filter].map((option) => (
                        <li
                          key={option}
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                            selectedFilters[filter]?.includes(option)
                              ? "bg-gray-200"
                              : ""
                          }`}
                          onClick={() => toggleSelection(filter, option)}
                        >
                          <input
                            type="checkbox"
                            checked={selectedFilters[filter]?.includes(option)}
                            onChange={() => toggleSelection(filter, option)}
                            className="mr-2"
                          />
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={applyFilters}
          className="mt-4 lg:mt-0 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
