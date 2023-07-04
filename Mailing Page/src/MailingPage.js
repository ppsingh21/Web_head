import './App.css';
import React, { useState } from 'react';

function MailingPage() {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSendEmail = () => {
    if (recipient && subject && body) {
      // Simulate sending the email
      // Replace this with your actual email sending logic
      setTimeout(() => {
        setIsEmailSent(true);
      }, 2000);
    }
  };

  return (
    <div>
      <h1>Mailing Page</h1>

      {isEmailSent ? (
        <div>
          <p>Email sent successfully!</p>
        </div>
      ) : (
        <div>
          <label>Recipient:</label>
          <input type="text" value={recipient} onChange={handleRecipientChange} placeholder="Enter Recipient's Email"/>

          <label>Subject:</label>
          <input type="text" value={subject} onChange={handleSubjectChange} placeholder='Enter Subject'/>

          <label>Body:</label>
          <textarea value={body} onChange={handleBodyChange} placeholder='Type Your Email here.......'/>

          <button className="send" onClick={handleSendEmail}>Send Email</button>
        </div>
      )}
    </div>
  );
}

export default MailingPage;
