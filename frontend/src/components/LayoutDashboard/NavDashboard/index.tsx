import Link from 'next/link';

import { FaHome, FaUserFriends, FaWeightHanging } from 'react-icons/fa';

const NavDashboard: React.FC = () => {
  return (
    <nav
      id='sidebarMenu'
      className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'
    >
      <div className='position-sticky pt-3'>
        <ul className='nav flex-column'>
          <NavDashboardItem title='Dashboard' href='/'>
            <FaHome className='fs-3 me-2' />
          </NavDashboardItem>
          <NavDashboardItem title='Users' href='/users'>
            <FaUserFriends className='fs-3 me-2' />
          </NavDashboardItem>
          <NavDashboardItem title='Products' href='/products'>
            <FaWeightHanging className='fs-3 me-2' />
          </NavDashboardItem>
        </ul>
      </div>
    </nav>
  );
};

type NavDashboardItemProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

const NavDashboardItem: React.FC<NavDashboardItemProps> = ({
  title,
  href,
  children
}) => {
  return (
    <li className='nav-item'>
      <Link href={href}>
        <a
          className='nav-link active text-primary d-flex align-items-center'
          aria-current='page'
        >
          {children}
          {title}
        </a>
      </Link>
    </li>
  );
};

export { NavDashboard };
