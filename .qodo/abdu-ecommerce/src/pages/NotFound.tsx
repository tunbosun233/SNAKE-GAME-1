import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#bf9000' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.5rem', color: '#7a5f00' }}>
        Oops! The page you are looking for does not exist.
      </p>
      <p style={{ fontSize: '1rem', color: '#7a5f00' }}>
        Please check the URL or return to the <a href="/" style={{ color: '#bf9000' }}>home page</a>.
      </p>
    </div>
  );
};

export default NotFound;