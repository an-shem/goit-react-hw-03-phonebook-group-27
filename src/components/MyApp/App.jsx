import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from '../Container';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
// import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = ({ name, number }) => {
    if (this.nameVerification(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  nameVerification = name => {
    return this.state.contacts.some(contact => name === contact.name);
  };

  deleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id,
    );

    this.setState({ contacts: newContacts });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.handleFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} filterChange={this.handleChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
