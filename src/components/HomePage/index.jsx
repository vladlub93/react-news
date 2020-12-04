import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
  const user = useSelector(s => s.user)
  return (
    <div style={{
      width: '100%',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
    alignItems: 'center'
    }}>
      <h4>Hello  {user ? user.login : 'Guest'}</h4>
    </div>
  );
}

export default Home;
