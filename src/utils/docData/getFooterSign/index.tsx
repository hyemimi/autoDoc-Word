const getFooterSign = ( name: string, confirm?: string) => {

  let blankForSignature = '';
  let blankForConfirm = '';

  for (let i = 0; i < 11 - name.length * 2; i++) {
    blankForSignature += ' ';
  }
  if (confirm) {
    for (let i = 0; i < 11 - confirm.length * 2; i++) { 
      blankForConfirm += ' ';
    }}
  const signatureString = `신청인 : ${blankForSignature}${name}`;
  const confirmString = `업무인수인계 확인필 : ${blankForConfirm}${confirm}`;

  return { signatureString, confirmString };

};

export default getFooterSign;