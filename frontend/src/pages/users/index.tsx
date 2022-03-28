import { LayoutDashboard } from '@/components/LayoutDashboard';
import { MainHeaderDashboard } from '@/components/LayoutDashboard/MainHeaderDashboard';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const Users: React.FC = () => {
  return (
    <LayoutDashboard title="Users">
      <MainHeaderDashboard title="List Users" />
      <Link href="/users/create">
        <a className="btn btn-primary text-white mb-2">
          <FaPlus />
        </a>
      </Link>
      <h1>Users</h1>
    </LayoutDashboard>
  );
};

export default Users;
