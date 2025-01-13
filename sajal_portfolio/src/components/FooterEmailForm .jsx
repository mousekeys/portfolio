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
      to_name: 'Recipient Name', // Replace with recipient's name
      to_email: 'recipient@email.com', // Replace with recipient's email
      message: message,
    };

    emailjs
      .send(
        'your_service_id', // Replace with your service ID
        'your_template_id', // Replace with your template ID
        templateParams,
        'your_user_id' // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          // Clear form fields after successful submission
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
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-6 rounded-lg justify-between items-center ">
      <div className='bg-gray-800 w-[60%] mx-auto p-6 rounded-lg justify-between items-center'>
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
            className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500"
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
            className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500"
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
            className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 h-24"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md"
        >
          SEND MESSAGE
        </button>
      </form>
      <div className="mt-6 text-sm">
        <ul className="list-none">
          <li>
            <a href="mailto:email@example.com" className="hover:underline">
              email@example.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/username"
              className="hover:underline"
            >
              github.com/username
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/username"
              className="hover:underline"
            >
              linkedin.com/in/username
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default ContactForm;