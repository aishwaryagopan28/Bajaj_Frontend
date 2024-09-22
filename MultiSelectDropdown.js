import React from 'react';

const MultiSelectDropdown = ({ options, selectedOptions, onSelect }) => {
  const handleOptionSelect = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    onSelect(selectedOptions);
  };

  return (
    <select multiple value={selectedOptions} onChange={handleOptionSelect}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default MultiSelectDropdown;