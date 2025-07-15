'use client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'flex-end', 
      gap: '20px',
      padding: '10px',
      background: '#0f0f0fff',
      borderBottom: '1px solid #ccc'
    }}>
      <button 
        onClick={() => navigateTo('http://localhost:3000/')} 
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'black',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Home
      </button>
      

      <button 
        onClick={() => navigateTo('/setting')} 
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'black',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        About
      </button>

      <button 
        onClick={() => navigateTo('/login')} 
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'black',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        User Login
      </button>

      <button 
        onClick={() => navigateTo('http://localhost:3000/logins')} 
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'black',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Admin Login
      </button>
    </nav>
  );
};

export default Navbar;