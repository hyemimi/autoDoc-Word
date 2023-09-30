import { Link } from 'react-router-dom';

const Header = () => {

  return ( 
    <div className="container">
      <Link to="/" className="header">사내 문서 자동화 서비스</Link> 
    </div>
  );
};

export default Header;