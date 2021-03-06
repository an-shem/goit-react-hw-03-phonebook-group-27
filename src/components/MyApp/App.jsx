import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import apiStorage from '../../apiStorage';
import Container from '../Container';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const dataStorage = apiStorage.getlocalStorage('contacts');
    if (!dataStorage) return;
    this.setState({ contacts: [...dataStorage] });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      apiStorage.setlocalStorage('contacts', this.state.contacts);
    }
  }

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
    const haveContacts = contacts.length > 0;
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.handleFormSubmit} />
        </Section>
        <Section title="Contacts">
          {haveContacts ? (
            <Filter filter={filter} filterChange={this.handleChange} />
          ) : (
            <h3>You have no contacts yet </h3>
          )}
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
