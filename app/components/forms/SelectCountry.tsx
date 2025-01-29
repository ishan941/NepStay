import useCountries from "@/app/hooks/useCountries";
import React from "react";
import Select from "react-select";

export type SelectCountryValue = {
  label: string;
  value: string;
};

interface SelectCountryProps {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        isClearable
        placeholder="Anywhweere"
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as SelectCountryValue)}
      ></Select>
    </div>
  );
};

export default SelectCountry;
