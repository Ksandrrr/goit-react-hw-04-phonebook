import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './PhonebookForm/PhonebookForm';
import PhoneList from './PhoneList/PhoneList';
import PhoneBookFilter from './PhonebookFilter/PhonebookFilter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const onAddContacts = ({ name, number }) => {
    if (isDublicate(name, number)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const saveFilterValue = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
  };
  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const normalizedPhone = number.toLowerCase();
    const dublicate = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizedName &&
        contact.number.toLowerCase() === normalizedPhone
      );
    });
    return Boolean(dublicate);
  };
  const delateContacts = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const items = filterContacts();
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onAddContacts={onAddContacts} contacts={contacts} />
      <h2>Contacts</h2>
      <PhoneBookFilter saveFilterValue={saveFilterValue} Filter={filter} />
      <PhoneList items={items} delateContacts={delateContacts} />
    </section>
  );
};

export default App;
