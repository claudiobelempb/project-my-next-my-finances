import { FaRegCalendar } from 'react-icons/fa';

type MainHeaderDashboard = {
  title: string;
};

const MainHeaderDashboard: React.FC<MainHeaderDashboard> = ({ title }) => {
  return (
    <>
      <div className='chartjs-size-monitor'>
        <div className='chartjs-size-monitor-expand'>
          <div className=''></div>
        </div>
        <div className='chartjs-size-monitor-shrink'>
          <div className=''></div>
        </div>
      </div>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2 text-secondary'>{title}</h1>
        {/* <div className='btn-toolbar mb-2 mb-md-0'>
          <div className='btn-group me-2'>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Share
            </button>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Export
            </button>
          </div>
          <button
            type='button'
            className='btn btn-sm btn-outline-secondary dropdown-toggle'
          >
            <FaRegCalendar />
            This week
          </button>
        </div> */}
      </div>
    </>
  );
};

export { MainHeaderDashboard };
