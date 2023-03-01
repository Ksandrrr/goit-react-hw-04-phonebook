import Style from '../Component.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
const ContactForm = ({ onAddContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = ({ target }) => {
    const { name, value } = target;
    // name === 'name' ? setName(value) : setNumber(value);
    switch (name) {
      case 'name':
        setName(value)
        break;
      default:
      setNumber(value)
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    onAddContacts({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={Style.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNameChange}
          value={number}
        />
      </label>
      <button type="submit" className={Style.btn}>
        Add Contact
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  onAddContacts: PropTypes.func.isRequired,
};
export default ContactForm;
