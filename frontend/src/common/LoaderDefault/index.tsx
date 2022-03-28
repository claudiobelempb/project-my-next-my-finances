type LoaderProps = {
  show: boolean;
};

const LoaderDefault: React.FC<LoaderProps> = ({ show }) => {
  if (!show) {
    return <></>;
  }
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      <div
        className='spinner-border'
        style={{ width: '3rem', height: '3rem' }}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export { LoaderDefault };
