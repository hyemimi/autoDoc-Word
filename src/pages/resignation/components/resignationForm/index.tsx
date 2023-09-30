import React from 'react';
import Input from 'components/Input';
import useResInput from 'pages/resignation/hooks/useResInput';
import generateDocument from 'utils/generateDocument';

/** 사직원 파일 input */
const ResignationForm = () => {

  const { formData, error, onChange } = useResInput();
  
  const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if ( typeof(error.RRN) === 'string' || typeof(error.email) === 'string' 
    || typeof(error.emergency) === 'string' || typeof(error.phone) === 'string' ) {
      console.log(error);
      window.alert('입력값을 확인해주세요');
    }
    else {
      console.log(formData);
      generateDocument(formData, '../../../resignation.docx', 'resignation');
    }
  };

  return (
    <div className="mb-xl">
      <form className="mb-xl" onSubmit={submitHandler}>
        <Input type="text" label="이름 (필수)" id="name" value={formData.name} name="name" placeholder="이름을 입력해주세요" onChange={onChange} required />
        <Input type="text" label="소속 (필수)" id="affiliation" value={formData.affiliation} name="affiliation" 
          placeholder="소속을 입력해주세요" onChange={onChange} required />
        <Input type="text" label="직위 (필수)" id="position" value={formData.position} name="position" placeholder="직위를 입력해주세요" onChange={onChange} 
          required />
        <Input type="text" label="주민번호 - ex) 000000-0000000 (필수)" id="RRN" value={formData.RRN} 
          name="RRN" error={error.RRN} placeholder="주민번호를 입력해주세요" onChange={onChange} required />
        <Input type="date" label="입사일자 (필수)" id="joiningDate" value={formData.joiningDate} name="joiningDate" 
          placeholder="입사일자를 입력해주세요" onChange={onChange} required />
        <Input type="date" label="퇴사일자 (필수)" id="leavingDate" value={formData.leavingDate} name="leavingDate" 
          placeholder="퇴사일자를 입력해주세요" onChange={onChange} required />
        <div className="floating reason-box">
          <div className="select">
            <div className="select-title">사유 (필수)</div>
            <div className="select-reasons">
              <Input type="radio" label="정년" id="selection0" value="0" name="selection" onChange={onChange} />
              <Input type="radio" label="전직" id="selection1" value="1" name="selection" onChange={onChange} />
              <Input type="radio" label="개인신병" id="selection2" value="2" name="selection" onChange={onChange} />
              <Input type="radio" label="진학" id="selection3" value="3" name="selection" onChange={onChange} />
              <Input type="radio" label="결혼" id="selection4" value="4" name="selection" onChange={onChange} />
              <Input type="radio" label="가사" id="selection5" value="5" name="selection" onChange={onChange} />
              <Input type="radio" label="권고" id="selection6" value="6" name="selection" onChange={onChange} />
              <Input type="radio" label="기타" id="selection7" value="7" name="selection" onChange={onChange} />
            </div>
            <div className="reason-box-input">
              <input type="text" className="floating-input" id="selection8" value={formData.etc} name="etc" onChange={onChange} autoComplete="off" />
              <label className="floating-label" htmlFor="selection8" />
              <span className="reason-box-span-left">(</span>
              <span className="reason-box-span-right">)</span>
            </div>
          </div>
        </div>
        <Input type="text" label="현주소 (필수)" id="address" value={formData.address} name="address" placeholder="주소를 입력해주세요" onChange={onChange} 
          required />
        <Input type="text" label="전화번호 - ex) 010-0000-0000 (필수)" id="phone" value={formData.phone} name="phone" 
          error={error.phone} placeholder="전화번호를 입력해주세요" onChange={onChange} required/>
        <Input type="email" label="e-mail (필수)" id="email" value={formData.email} name="email" 
          error={error.email} placeholder="e-mail을 입력해주세요" onChange={onChange} required/>
        <Input type="text" label="긴급연락처 (필수)" id="emergency" value={formData.emergency} name="emergency" 
          error={error.emergency} placeholder="긴급연락처를 입력해주세요" onChange={onChange} required/>
        <Input type="text" label="본인과의 관계 (필수)" id="relationship" value={formData.relationship}
          name="relationship" placeholder="본인과의 관계를 입력해주세요" onChange={onChange} required />
        <Input type="text" label="업무인수인계 확인자 (필수)" id="confirm" value={formData.confirm} 
          name="confirm" placeholder="업무인수인계 확인자" onChange={onChange} required />
        <button className="btn" type="submit">출력</button>
      </form>
    </div>
  );
};

export default ResignationForm;