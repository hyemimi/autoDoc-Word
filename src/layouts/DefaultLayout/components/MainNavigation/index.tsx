import { Link } from 'react-router-dom';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import { useParams } from 'react-router-dom';

/** 메인 네비게이션바 */
const MainNavigation = () => {
  const params = useParams();
  const param = params.selection;
  let value = -1;
  if (param === 'certification') value = 0;
  if (param === 'resignation') value = 1;

  return (
    <Tabs value={value}>
      <TabList variant="soft" color="primary" className={`ul ${param}`}>
        <Link to="certification" className={`link ${param}-link`}>
          <Tab>
            <p className={`tab ${param}-tab`}>
              재직증명서
            </p>
          </Tab>
        </Link>
        <div className={`vertical-line ${param}-line`}>&nbsp;</div>
        <Link to="resignation" className={`link ${param}-link`}>
          <Tab>
            <p className={`tab ${param}-tab`}>
              사직원
            </p>
          </Tab>
        </Link>
      </TabList>
    </Tabs>
  );
};

export default MainNavigation;