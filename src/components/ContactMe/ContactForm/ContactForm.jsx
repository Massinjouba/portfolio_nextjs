import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = 'First name is required';
    if (!formData.lastname) newErrors.lastname = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const serviceID = 'service_6yyhsqj';
    const templateID = 'template_q5vdiwg';
    const userID = 'ksuLGbAftSJinyUej';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });

    // Clear form
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className='contact-form-content'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='name-container'>
          <input 
            type="text" 
            name="firstname" 
            placeholder='First Name' 
            value={formData.firstname} 
            onChange={handleChange}
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
          <input 
            type="text" 
            name="lastname" 
            placeholder='Last Name' 
            value={formData.lastname} 
            onChange={handleChange}
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>
        <input 
          type="email" 
          name='email' 
          placeholder='Email' 
          value={formData.email} 
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <textarea 
          name="message" 
          placeholder='Message' 
          rows={3} 
          value={formData.message} 
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
