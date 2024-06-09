import React from 'react';

interface OutputProps {
  results: string[];
  className?: string; 
}

const Output: React.FC<OutputProps> = ({ results, className }) => {
  return (
    <div className={className}>
      {results.map((result, index) => (
        <div key={index}>{result}</div>
      ))}
    </div>
  )
}

export default Output;