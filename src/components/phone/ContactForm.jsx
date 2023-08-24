
import './phoneStyles.css'

// import actions from '../../redux/contacts/contacts-actions';
import { selectItems } from 'redux/contacts/contacts-selectors';
// import { getItems, getFilter } from "redux/contacts/contacts-selectors";
import { useDispatch, useSelector } from "react-redux"; //, useSelector
// import { useState } from 'react';
import { addContact } from 'redux/contacts/contacts-operations';


const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  
  const contacts = useSelector(selectItems);
  // const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    let contactForAdd = { name: form.name.value, phone: form.number.value };
    console.log('Form ', contactForAdd);
    if (contacts.some(({ name }) => name === contactForAdd.name)) {
      alert(`${contactForAdd.name} is already in contacts`);
      return;
    }
    dispatch(addContact(contactForAdd));
    form.reset();

    // resetForm();
  };

    return (
      <div >
        <form  onSubmit={handleSubmit}>
          <div >
            <p>Nombre </p>

            <input
              // value={name}
              // onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <p>Numero</p>
            <input
              // value={number}
              // onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button type="submit" >
            Añadir
          </button>
        </form>
      </div>
    );
  }


  export default ContactForm;