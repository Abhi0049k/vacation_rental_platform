import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Properties: FC = () => {
  return (
    <div className="border border-white mx-auto min-h-[90vh] w-[80%] p-5">
      <FilterAndSort />
    </div>
  )
}

export default Properties

// import React, { useState } from 'react';

const FilterAndSort: FC = () => {
  return (
    <div className="flex items-center space-x-4">
      Filter
      <div className="my-4 flex space-x-4">
        <input type="text" placeholder="Location" className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500" />
        <input type="text" placeholder="Property Type" className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500" />
        <input type="text" placeholder="Host" className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500" />
        <Input type="email" placeholder="Enter mail" />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="location">Locations</SelectItem>
              <SelectItem value="property_type">Property Type</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by order" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="location">Ascending</SelectItem>
              <SelectItem value="property_type">Descending</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button className="text-lg flex justify-center items-center">Filter</Button>
    </div>
  );
};

// export default FilterAndSort;
