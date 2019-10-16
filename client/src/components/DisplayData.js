import React, { Component } from 'react';
import Person from './Person'
import axios from 'axios'


class DisplayData extends Component {
 constructor(props) {
  super();
  this.state = {
   playerData : ''
  }
 }
 componentDidMount() {
  this._isMounted = true;
 axios.get('http://localhost:5000/api/players')
 .then(res => {
  if (this._isMounted){
   this.setState({
   playerData: res.data
  })
 }
 })
 .catch(err => {
  console.log(err)
 })
 }
 componentWillUnmount() {
  this._isMounted = false;
}
 render() {
 
  return (
   this.state.playerData ?
   <div>   
    {this.state.playerData.map(person => (
    <Person person={person} key={person.id}/>
    ))}
   </div>
   : <div>Loading</div>
  )
 }
}

export default DisplayData;