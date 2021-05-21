const setlocalStorage = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};

const getlocalStorage = key => {
  const savedContacts = localStorage.getItem(`${key}`);
  const parsedContacts = JSON.parse(savedContacts);
  return parsedContacts;
};

export default { setlocalStorage, getlocalStorage };
