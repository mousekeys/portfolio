import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sajal Poudel', 
      to_email: 'sajalpoudel40@gmail.com', 
      message: message,
    };


    emailjs.send(
      'emp_706543', 
      'template_os49ntr',
      templateParams,
        'PNWAFzrwCffB30Y1j'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Error sending message:', error);
          alert('An error occurred while sending the message.');
        }
      );
  };

  return (
    <div id= "Contact" className="bg-black text-white p-6 rounded-lg justify-between items-center ">
      <div className='bg-gray-800 w-[70%] mx-auto p-6 rounded-lg justify-between items-center'>
      <h1 className="text-2xl font-bold mb-4  mx-auto">CONTACT</h1>
      <p className="mb-6">Would you like to start a new quest together?</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-700 rounded-md text-black focus:outline-none focus:border-red-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-700 text-black rounded-md focus:outline-none focus:border-red-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm">
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-700 text-black rounded-md focus:outline-none focus:border-red-500 h-24"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-900 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md"
        >
          SEND MESSAGE
        </button>
      </form>
      <div className="mt-6 text-sm">
        <ul className="list-none">
          <li>
            <a href="mailto:sajalpoudel40@gmail.com" className="hover:underline">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mousekeys"
              className="hover:underline"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sajal-poudel-10915a202"
              className="hover:underline"
            >
            Linkedin
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default ContactForm;