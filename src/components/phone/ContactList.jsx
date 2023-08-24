import  './phoneStyles.css';
import { useDispatch, useSelector } from 'react-redux';
// import actions from '../../redux/contacts/contacts-actions'
import { useEffect } from 'react';
import { selectItems, selectFilter } from 'redux/contacts/contacts-selectors';
// import { getItems, getFilter } from "redux/contacts/contacts-selectors";
import { deleteContact } from 'redux/contacts/contacts-operations';
import { fetchContact } from 'redux/contacts/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(selectItems);
  const filterValue = useSelector(selectFilter);
  
  const dispatch = useDispatch();
  const onDeleteContact = (contact) => {
    dispatch(deleteContact(contact));
};

useEffect(() => {
  dispatch(fetchContact());
}, [dispatch]);

const listItems = contacts.filter(({name}) => name.toLowerCase().includes(filterValue.trim())).map(({id, name, phone}) =>
    <li key={id}>
      <div className='contact'>
      <p className='ptrolio'>
        <b>{name}: </b>
          {' ' + phone}
        
      </p>
      <button
          type="submit"
          onClick={() => onDeleteContact(id)}
          >delete</button>
      </div>
      
    </li>
  );
  return <ul>{listItems}</ul>;
}


export default ContactList;