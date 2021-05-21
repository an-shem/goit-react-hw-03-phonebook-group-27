import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;