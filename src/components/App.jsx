import style from './app.module.css';

import { useSelector } from 'react-redux';
// import { getItems } from "redux/contacts/contacts-selectors";
import { selectItems } from "redux/contacts/contacts-selectors";
import ContactForm from './phone/ContactForm';
import ContactList from './phone/ContactList';
import Filter from './phone/Filter';

export const App = () => {
  const contacts = useSelector(selectItems);
  return (
    <div className={style.container}>
      <div className={style.leftsection}>
        <h1>Add contact</h1>
      <ContactForm></ContactForm>
      Contactos: {contacts.length}
      </div>
      <div className={style.rightsection}>
        <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
      </div>
      
    </div>
  );
};
