import { FC } from 'react';
import 'pages/resignation/_resignation.scss';

export interface IInputProps {
  type: 'text' | 'email' | 'date' | 'radio';
  label: string;
  value: string;
  name: string;
  id: string;
  placeholder?: string;
  error?: string | null;
  onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void);
  required?: boolean;
  maxLength?: number;
}

const Input: FC<IInputProps> = ({
  type,
  label,
  value,
  name,
  id,
  placeholder,
  error,
  onChange,
  required,
  maxLength
}) => {
  return (
    type !== 'radio' ? 
      <>
        <div className="floating">
          <input
            className="floating-input"
            type={type}
            id={id}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            required={required || false}
            autoComplete="off"
            maxLength= {maxLength && maxLength}
          />
          <label className="floating-label" htmlFor={id} data-content={label} />
        </div>
        {error && <p className="errorMsg">{error}</p>}
      </>
      :  
      <div className="select-reason">
        <input name={name} value={value} id={id} type={type} onChange={onChange} required autoComplete="off"/>
        <label htmlFor={id}>{label}</label>
      </div> 
  );
};

export default Input;