import React, { Component } from 'react'
import NavBar from './NavBar';

import FormField from './FormField';
import CoolButton from './CoolButton';
export default class Signup extends Component {
  render() {
    return (
      <div>
          
            <NavBar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="" />
            <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
            
           
           



      </div>
    )
  }
}
