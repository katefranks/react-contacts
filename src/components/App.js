import { Component} from 'react';
import './App.css';
import ContactsList from './ContactsList';
import ContactsForm from './ContactsForm';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      counter: 2,
    }
    this.addContact = this.addContact.bind(this);
}
componentDidMount() {
  const contacts = [
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      address: '411 University Ridge, Greenville, SC, 29601',
      phoneNumber: '555-555-5555'
    }
  ];
  this.setState({ contacts });
}

addContact(contact){
  contact.id = this.state.counter;
  const contacts = [ ...this.state.contacts ];
  contacts.push(contact);
  this.setState((state) => ({ contacts, counter: state.counter + 1 }));
}
render() {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactsForm addContact={this.addContact} />
      <ContactsList contacts={this.state.contacts} />
    </div>
  );
}
}

export default App;
