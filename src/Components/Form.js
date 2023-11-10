import React, { useRef } from 'react'
import './Form.css'
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    setTimeout(() => {
        window.location.reload();
      }, 500);
    e.preventDefault();

    emailjs.sendForm('service_wdjaz7g', 'template_x7djbfs', form.current, 'Yw7YZ5NTVQzNhBiZT')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
<>
<div className=' form'>
    <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" placeholder='Enter your Name' name='user_name'></input>
        <label>Email</label>
        <input type="email" placeholder='Enter your Email' name='user_email'></input>
        <label>subject</label>
        <input type="text" placeholder='Enter the Subject' name='user_subject'></input>
        <label>Message</label>
       <textarea rows="6"  placeholder='type your message here' name='message'/>
       <button className='btn'>Submit</button>
    </form>
</div>
</>
    )
}

export default Form