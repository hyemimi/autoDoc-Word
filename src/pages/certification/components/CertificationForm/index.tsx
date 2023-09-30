import generateDocument from 'utils/generateDocument';
import useInput from 'pages/certification/hooks/useCerInput';
import Input from 'components/Input';
import 'pages/certification/_certification.scss';

/** 재직증명서 정보를 받는 폼 */
const CertificationForm = () => {
  
  const { formData, error, onChange } = useInput();

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (typeof(error.RRN) === 'string' || typeof(error.phone) === 'string' ) {
      window.alert('입력값을 다시 확인해주세요');
    }
    else {
      generateDocument(formData, '../../../certification.docx', 'certification');
    }
  };
  //

  return (
    <div className="mb-xl">
      <div className ="foo" />
      <form onSubmit={onSubmit}>
        <Input type="text" label="이름 (필수)" id="name" value={formData.name} name="name" placeholder=" " onChange={onChange} maxLength={30} required />
        <Input type="text" label="직위 (필수)" id="position" value={formData.position} 
          name="position" placeholder=" " onChange={onChange} maxLength={30} required />
        <Input type="text" label="직무명 (필수)" id="job" value={formData.job} name="job" placeholder=" " onChange={onChange} maxLength={30} required />
        <Input type="date" label="입사일자 (필수)" id="joiningDate" value={formData.joiningDate} name="joiningDate" placeholder=" " 
          onChange={onChange} maxLength={15} required/>
        <Input type="text" label="주민번호 - ex) 000000-0000000 (필수)" id="RRN" value={formData.RRN} name="RRN" error={error.RRN} placeholder=" "
          onChange={onChange} maxLength={14} required/>
        <Input type="text" label="근무부서 (필수)" id="workingDepart" value={formData.workingDepart} name="workingDepart" 
          placeholder="이름을 입력해주세요" onChange={onChange} maxLength={15} required/>
        <Input type="text" label="전화번호 - ex) 010-0000-0000 (필수)" id="phone" value={formData.phone} 
          name="phone" placeholder=" " error={error.phone} required onChange={onChange} maxLength={13} />
        <Input type="text" label="현주소 (필수)" id="address" value={formData.address} 
          name="address" placeholder=" " onChange={onChange} maxLength={76} required />
        <Input type="text" label="용도" id="text1" value={formData.text1} name="text1" placeholder=" " maxLength={114} onChange={onChange} />
        <Input type="text" label="기타" id="etc" value={formData.etc} name="etc" placeholder=" " maxLength={114} onChange={onChange} />
        <button id="download" type="submit" className="btn">출력</button>
      </form>
    </div>

  );

};

export default CertificationForm;
