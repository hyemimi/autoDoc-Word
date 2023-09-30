/** 재직증명서, 사직원 폼 데이터 */
export interface IFormDataProps {
  // 공통 부분
  name: string,
  position: string,
  joiningDate: string,
  RRN: string,
  phone: string,
  address: string, // 선택사항
  etc: string, // 선택사항

  // Only 재직증명서
  job?: string,
  certificationDate?: string,
  workingDepart?: string,
  text1?: string,

  // Only 사직원
  affiliation?: string,
  leavingDate?: string,
  selection?: string,
  email?: string,
  emergency?: string,
  relationship?: string,
  confirm?: string
}

/** 재직증명서  */
export interface ICerFormDataProps extends IFormDataProps {
  job: string,
  certificationDate: string,
  workingDepart: string,
  text1: string,
}

/** 사직원 */
export interface IResFormDataProps extends IFormDataProps {
  affiliation: string,
  leavingDate: string,
  selection: string,
  email: string,
  emergency: string,
  relationship: string,
  confirm: string
}