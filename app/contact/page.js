// Contact Page Component
// This page includes a form for users to send a message
"use client"; // Mark this component as a Client Component to use React hooks
import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Contact() {
  // State to manage the message input
  const [message, setMessage] = useState('');
  // State to manage the form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setSubmitted(true); // Show the thank-you message
    setTimeout(() => setSubmitted(false), 3000); // Hide the message after 3 seconds
    setMessage(''); // Clear the message input
  };

  return (
    <div className="container">
      {/* Include the Navbar component for navigation */}
      <Navbar />
      {/* Contact page title */}
      <h1>Contact Us</h1>
      {/* Conditionally render the thank-you message after form submission */}
      {submitted && <p className="success-message">Thank you for your message!</p>}
      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update the message state on input change
          placeholder="Enter your message"
          className="form-textarea"
        />
        <button type="submit" className="form-button">
          Send
        </button>
      </form>
    </div>
  );
}