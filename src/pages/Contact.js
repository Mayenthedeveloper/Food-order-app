import React from "react";
import PizzaLeft from "../assets/fooda.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form action="">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter full name.." />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter email.." />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter message..."
            required
          ></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
