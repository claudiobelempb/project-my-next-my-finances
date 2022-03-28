import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

// import Layout from '@/components/LayoutDashboard';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex flex-column justify-content-center align-items-center'>
            <h1>
              <FaExclamationTriangle /> 404
            </h1>
            <h4>Sorry, there is nothing here</h4>
            <Link href={'/'}>Go Back Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
