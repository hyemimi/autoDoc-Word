import Certification from 'pages/certification';
import ErrorPage from 'pages/error';
import Resignation from 'pages/resignation';
import { useParams } from 'react-router-dom';

/** 재직증명서, 사직원 둘 중 하나 선택 */
const Selection = () => {
  const params = useParams();
  const selection = params.selection;
  const error = (selection !== 'certification') && (selection !== 'resignation') && (selection !== undefined); 

  return (
    <>
      {selection === 'certification' && <Certification />}
      {selection === 'resignation' && <Resignation />}
      {error && <ErrorPage />}
    </>
  );
};

export default Selection;