import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNo] = useState('');
  const [textarea, setTextarea] = useState('');
  const [gender, setGender] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [interested, setInterested] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (e) => {                     
    e.preventDefault();
    if (fName.trim() === '') {
      alert('Please enter your first name.');
      return;
    }

    if (lName.trim() === '') {
      alert('Please enter your last name.');
      return;
    }

    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }
    if (password.trim() === '') {
      alert('Please enter a password.');
      return;
    }
  
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric value, and one special symbol.'
      );
      return;
    }
    if (textarea.trim() === '') {
      alert('Please enter something about yourself.');
      return;
    }

    alert('Form submitted successfully!');
    console.log('First Name:', fName);
    console.log('Last Name:', lName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', phoneNumber);
    console.log('Tell Us About Yourself:', textarea);
    console.log('Gender:', gender);
    console.log('Newsletter:', newsletter);
    console.log('Interested:', interested);
  };

  return (
    <form className="black-form" onSubmit={handleSubmit}>
      <h2>Sign Up Form</h2>

      <div className="input-group">
        <span className="input-group-text">First and last name</span>
        <input
          type="text"
          aria-label="First name"
          className="form-control"
          onChange={(e) => setFName(e.target.value)}
        />
        <input
          type="text"
          aria-label="Last name"
          className="form-control"
          onChange={(e) => setLName(e.target.value)}
        />
      </div>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="form-floating">
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          placeholder="Phone number"
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone number</label>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Tell Us About Yourself
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={(e) => setNewsletter(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Subscribe for Newsletters and Notifications
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="flexRadioDefault1"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Female
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="flexRadioDefault2"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Male
        </label>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={(e) => setInterested(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Are You Interested To Join Our Company
        </label>
      </div>

      <button className="form-check-inputy" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
