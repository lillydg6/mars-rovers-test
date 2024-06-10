import React, { ChangeEvent, useState } from 'react';

interface InputFormProps {
  onSubmit: (input: string) => void;
  error?: string | null;
  className?: string;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, error, className }) => {
  const [input, setInput] = useState('');
  
  const handleChange = ( e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  }

  const handleSubmit = () => {
    onSubmit(input);
  }

  return (
    <div className={className}>
      <label className="App-label">Enter instructions:</label>
      <textarea value={input} onChange={handleChange} className={error ? 'input-error' : ''} />
      <div className={`error-label ${input.trim() !== ''  && error ? '' : 'hidden'}`}>
        {error}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default InputForm;