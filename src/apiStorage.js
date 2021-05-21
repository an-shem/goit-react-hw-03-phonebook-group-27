const setlocalStorage = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};
const getlocalStorage = key => {
  const savedContacts = localStorage.getItem(`${key}`);
  const parsedContacts = JSON.parse(savedContacts);
  return parsedContacts;
};

export default { setlocalStorage, getlocalStorage };

//  const contacts = [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ];
//     localStorage.setItem('contacts', JSON.stringify(contacts));

//     const savedContacts = localStorage.getItem('contacts');
//     console.log('savedContacts >>>', savedContacts);
//     if (!savedContacts) return;
//     console.log('savedContacts >>> 222', savedContacts);
//     const parsedContacts = JSON.parse(savedContacts);
//     console.log(' parsedContacts  >>>', parsedContacts);
//     this.setState({ contacts: [...parsedContacts] });
//   }
