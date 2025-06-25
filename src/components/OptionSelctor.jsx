import React, { useState } from 'react';

export default function OptionSelector() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Select an Option:</h2>

      <select onChange={handleChange} value={selectedOption} className='border border-gray-300 rounded p-2' style={{ width: '200px' }}>
        <option value="">-- Select --</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
        <option value="Vue">Vue</option>
        <option value="JavaScript">JavaScript</option>
      </select>

      {selectedOption && (
        <div style={{ marginTop: '20px' }}>
          <h3>Welcome to {selectedOption}!</h3>
        </div>
      )}
    </div>
  );
}
