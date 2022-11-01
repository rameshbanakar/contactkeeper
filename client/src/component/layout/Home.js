import React, { Fragment } from 'react'
import  Contacts  from '../contact/Contact'
import ContactFilter from '../contact/ContactFilter'
import ContactForm from '../contact/ContactForm'
export const Home = () => {
  return (
    <div className='row'>
      <div className='col'>
        <ContactForm/>
      </div>
      <div className='col'>
        <div >
          <ContactFilter/>
        </div>
        <Contacts/>
      </div>
    </div>
  )
}
