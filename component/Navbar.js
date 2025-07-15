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
      background: 'linear-gradient(to left, #41d624ff, #545953ff)',
      borderBottom: '1px solid #ccc'
    }}>
      <h1 style={{ flex: 1, textAlign: 'left' }}>SuryaBlogs!!!</h1>
      <button 
        onClick={() => navigateTo('http://localhost:3000/')} 
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'white',
          color: 'black',
          cursor: 'pointer'
        }}
      >
        Home
      </button>

      <button 
        onClick={() => navigateTo('/login')} 
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'white',
          color: 'Black',
          cursor: 'pointer'
        }}
      >
        Reader Login
      </button>

      <button 
        onClick={() => navigateTo('http://localhost:3000/logins')} 
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'white',
          color: 'black',
          cursor: 'pointer'
        }}
      >
        Creator Login
      </button>
      <button 
        onClick={() => navigateTo('/setting')} 
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'white',
          color: 'black',
          cursor: 'pointer'
        }}
      >
        About
      </button>
      <button 
        onClick={() => navigateTo('http://localhost:3000/logout')} 
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'white',
          color: 'black',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;