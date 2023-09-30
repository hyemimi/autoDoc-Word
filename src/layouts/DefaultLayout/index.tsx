import { Outlet } from 'react-router-dom';
import './_layout.scss';
import Header from './components/Header';
import MainNavigation from './components/MainNavigation';

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <MainNavigation />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
