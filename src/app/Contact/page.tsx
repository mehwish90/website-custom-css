import React from 'react'

const contact = () => {
  return (
    <div>
      <section className='form'>
       <h3 >Contact-Us</h3> 
       <form>
        <input type="text" placeholder='FullName' required/>
        <input type="email"placeholder=' Email Address' />
        <input type="text" placeholder='Phone Number'required/>
        <textarea placeholder='Your Message'rows={5}required></textarea>
        <button type='submit'>Send Message</button>

       </form>
        </section></div>
  )
}

export default contact
