import { useState } from 'react';
import 'pages/resignation/_resignation.scss';
import initialData from 'pages/resignation/utils/initialData';
import resErrorMessage from '../utils/resErrorMessage';
import validator from 'utils/validate';

/** 사직서 useInput */
const useResInput = () => {
  const [formData, setFormData] = useState(initialData);
  const [error,setError] = useState(resErrorMessage);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const validation = validator(name, value);
    if (name === 'phone' || name === 'email' || name === 'RRN' || name === 'emergency') {
      if (validation !== '통과') {
        setError({ ...error, [name]: validation });
      } 
      else {
        setError({ ...error, [name]: null });
      }
    }
    
  };

  return { formData, error ,onChange };
};

export default useResInput;