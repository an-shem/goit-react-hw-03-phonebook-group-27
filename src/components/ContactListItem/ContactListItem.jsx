import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ data, onDeleteContact }) => {
  const { name, number, id } = data;

  return (
    <li className={styles.listItem}>
      <span className={styles.text}>
        {name}: {number}
      </span>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  data: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
