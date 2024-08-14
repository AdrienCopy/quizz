import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormName: React.FC = () => {
  const [name, setName] = useState<string>(() => {
    const savedName = localStorage.getItem('name');
    return savedName ? savedName : '';
  });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('name', name);
    //alert(`Name saved: ${name}`);
    navigate('/menu');
  };

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="input-search"
        placeholder="Entre ton prénom"
      />
      <button type="submit">Enregister</button>
    </form>
  );
};

export default FormName;
