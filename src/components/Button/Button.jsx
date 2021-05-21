import styles from './Button.module.css';

const Button = () => {
  return (
    <button className={styles.button} type="submit">
      Add contact
    </button>
  );
};

export default Button;
