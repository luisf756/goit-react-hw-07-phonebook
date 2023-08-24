// import PropTypes from 'prop-types';
import './phoneStyles.css'
// import React from 'react';

import { useDispatch } from 'react-redux';
// import actions from '../../redux/contacts/contacts-actions';
// import { getFilter } from "redux/contacts/contacts-selectors";
import { setFilter } from 'redux/contacts/contacts-filter';


const Filter = () => {
  // const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const setFilterValue = event => {
    dispatch(setFilter(event.currentTarget.value.toLowerCase()));
  };
  
  // const onChange = event => {
  //   dispatch(actions.changeFilter(event.currentTarget.value));
  // };
  return(
  <div >
    <p>Find contacts<br></br> by name</p>
    <input type="name"  onChange={setFilterValue} /> 
    {/* value={filterValue} */}
  </div>
)
};


export default Filter;