import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Filter.module.css';

let cx = classNames.bind(styles);

const Filter = ({ filter, filterChange }) => {
  let className = cx({
    input: true,
    activInput: filter,
  });
  return (
    <>
      <h3 className={styles.title}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        className={className}
        onChange={filterChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
