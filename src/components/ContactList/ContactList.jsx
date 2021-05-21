import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) && (
          <ContactListItem
            key={contact.id}
            data={contact}
            onDeleteContact={onDeleteContact}
          />
        ),
    )}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
