import React from 'react';

function OptimizationSuggestions({ suggestions }) {
  return (
    <div>
      <h2>Optimization Suggestions</h2>
      {suggestions.length > 0 && (
        <div className="suggestions">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OptimizationSuggestions;
