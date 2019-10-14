import React, { Component } from 'react';
import Person from './Person'
import axios from 'axios'
class DisplayData extends Component {
 constructor(props) {
  super();
  this.state = {
   playerData : []
  }
 }
 componentDidMount() {
 axios.get('http://localhost:5000/api/players')
 .then(res => {
  this.setState({
   playerData: res.data
  })
  console.log(this.state.playerData)
 })
 .catch(err => {
  console.log(err)
 })
 }
 render() {
  return (
   <div>
    {this.state.playerData.map(person => (
    <Person person={person} />
    ))}
   </div>
  );
 }
}

export default DisplayData;