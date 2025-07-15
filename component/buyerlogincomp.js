'use client';
import { useRouter } from 'next/navigation';
import styles from './BuyerLoginComp.module.css';

const BuyerLoginComp = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="on">
        <h2 className={styles.heading}>Welcome Back! BlogReader</h2>
        <p className={styles.subheading}>Login to continue your blogging journey</p>

        <label htmlFor="username" className={styles.label}>Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          className={styles.input}
          required
        />

        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className={styles.input}
          required
        />

        <label htmlFor="token" className={styles.label}>Login Code</label>
        <input
          id="token"
          type="text"
          placeholder="Enter your unique login code"
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default BuyerLoginComp;