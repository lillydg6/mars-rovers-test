import React, { ChangeEvent, useState } from 'react';

interface InputFormProps {
  onSubmit: (input: string) => void;
  className?: string; 
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, className }) => {
  const [input, setInput] = useState('');
  
  const handleChange = ( e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  }

  const handleSubmit = () => {
    onSubmit(input);
  }

  return (
    <div className={className}>
      <textarea value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default InputForm;