import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import MultiSelectDropdown from './components/MultiSelectDropdown';
import ResponseRenderer from './components/ResponseRenderer';

function App() {
  const [jsonInput, setJsonInput] = useState('');  // State for JSON input
  const [response, setResponse] = useState(null);  // State to store API response
  const [selectedOptions, setSelectedOptions] = useState([]);  // State for dropdown selection

  // Handle input from JsonInput component
  const handleJsonInput = (input) => {
    setJsonInput(input);
  };

  // Submit JSON to API
  const handleSubmit = async () => {
    try {
      const payload = JSON.parse(jsonInput);  // Parse JSON input
      const apiResponse = await fetch('https://your-backend-api.com/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await apiResponse.json();
      setResponse(data);  // Update state with response
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  // Handle dropdown option selection
  const handleOptionSelect = (options) => {
    setSelectedOptions(options);
  };

  return (
    <div>
      {/* Component for JSON input */}
      <JsonInput
        value={jsonInput}
        onChange={handleJsonInput}  // Triggered when input changes
        onSubmit={handleSubmit}  // Triggered when input is submitted
      />
      
      {/* Show dropdown only if there is a response */}
      {response && (
        <MultiSelectDropdown
          options={['Alphabets', 'Numbers', 'Highest lowercase alphabet']}
          selectedOptions={selectedOptions}
          onSelect={handleOptionSelect}  // Handle dropdown selection
        />
      )}
      
      {/* Render the response only if it exists */}
      {response && (
        <ResponseRenderer
          response={response}
          selectedOptions={selectedOptions}
        />
      )}
    </div>
  );
}

export default App;
