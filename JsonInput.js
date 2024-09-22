import React from 'react';

const JsonInput = ({ value, onChange, onSubmit }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Enter JSON input"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JsonInput;