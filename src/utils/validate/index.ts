/** 유효성 검사 함수 */
const validator = ( name:string, value:string ) => {

  if (name === 'RRN') {

    if (/\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-][1-4]\d{6}/.test(value) === false)
    {
      return 'ex ) 000000-0000000';
    }
  }

  else if (name === 'phone') {

    if (/^[0][0-9]{2}[-][0-9]{4}[-][0-9]{4}$/.test(value) === false) {
      return 'ex) 0XX-XXXX-XXXX';
    }
  }
  else if (name === 'email') {

    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) === false) {
      return '이메일 형식을 다시 확인해주세요';
    }
  }
  else if (name === 'emergency') {

    if (/^[0][0-9]{2}[-][0-9]{4}[-][0-9]{4}$/.test(value) === false) {
      return 'ex) 0XX-XXXX-XXXX';
    }
  }
  
  return '통과';

};

export default validator;
