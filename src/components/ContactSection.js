import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
