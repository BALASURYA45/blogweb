'use client';
import { useRouter } from 'next/navigation';
import styles from './SellerLoginComp.module.css';

const SellerLoginComp = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/settinges');
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Welcome Back! BlogCreator</h2>
        <p className={styles.subheading}>Login to continue your blog creation journey</p>
        <input
          type="text"
          placeholder="Seller Name"
          className={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />

        <input
          type="text"
          placeholder="Admin Token"
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SellerLoginComp;