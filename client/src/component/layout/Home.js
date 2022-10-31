import React, { Fragment } from 'react'
import  Contacts  from '../contact/Contact'
import ContactForm from '../contact/ContactForm'
export const Home = () => {
  return (
    <div className='row'>
      <div className='col'>
        <ContactForm/>
      </div>
      <div className='col'>
        <Contacts/>
      </div>
    </div>
  )
}
