type UseCertificateType = {
  type: string,
  number: string
}

/** 주민번호, 휴대폰 번호 유효성 검사 custom hook */
const validatePattern = ({ type, number }: UseCertificateType) => {
  if (!number) return number;
  const currentValue = number.replace(/[^\d]/g, '');
  const valueLen = number.length;
  
  if (type === 'RRN') {
    if (valueLen < 7) {
      return currentValue;
    } else {
      return `${currentValue.slice(0, 6)}-${currentValue.slice(6, 13)}`;
    }
  } else if (type === 'TEL') {
    if (valueLen < 4) {
      return currentValue;
    } else if (valueLen < 9) {
      return `${currentValue.slice(0, 3)}-${currentValue.slice(3)}`;
    } else {
      return `${currentValue.slice(0, 3)}-${currentValue.slice(3, 7)}-${currentValue.slice(7, 11)}`;
    }
  }
};

export default validatePattern;