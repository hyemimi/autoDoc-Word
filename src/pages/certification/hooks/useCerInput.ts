import { useState } from 'react';
import cerErrorMessage from 'pages/certification/utils/cerErrorMessage';
import validator from 'utils/validate';
import initialData from 'pages/certification/utils/initialData';

/** 재직증명서 input custom hook */
const useCerInput = () => {
  const [formData, setFormData] = useState(initialData);
  const [error,setError] = useState(cerErrorMessage);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'RRN' || name === 'phone') {
      const validation = validator(name, value);
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

export default useCerInput;
