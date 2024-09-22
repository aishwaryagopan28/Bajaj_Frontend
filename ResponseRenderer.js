import React from 'react';

const ResponseRenderer = ({ response, selectedOptions }) => {
  const renderResponse = () => {
    if (selectedOptions.includes('Alphabets')) {
      return <p>Alphabets: {response.alphabets.join(', ')}</p>;
    }
    if (selectedOptions.includes('Numbers')) {
      return <p>Numbers: {response.numbers.join(', ')}</p>;
    }
    if (selectedOptions.includes('Highest lowercase alphabet')) {
      return <p>Highest lowercase alphabet: {response.highest_lowercase_alphabet}</p>;
    }
    return null;
  };

  return <div>{renderResponse()}</div>;
};

export default ResponseRenderer;