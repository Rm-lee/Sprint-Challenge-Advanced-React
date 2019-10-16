import React from 'react';

const Person = (props) => {
 return (
  <div className='person'>
   Name
   <p>Name: {props.person.name}</p>
   <p>Country: {props.person.country}</p>
   <p>Searches: {props.person.searches}</p>
   
  </div>
 );
};

export default Person;