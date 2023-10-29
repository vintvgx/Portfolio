import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import "./ContactFormModal.css";
import ContactFormInput from "./FormInput";

type ContactFormModalProps = {
  isOpen: boolean;
  onClose?: () => void;
};

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add code here to send the email/message
    // You can use a library like nodemailer for the backend to send emails.
    // You'll need to implement this part based on your server logic.
  };

  return (
    <div className={`c-modal ${isOpen ? "open" : ""}`}>
      <div className="c-modal-content">
        <div className="back-button" onClick={onClose}>
          <BsChevronLeft />
        </div>
        <h1 className="contact-text">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group-name">
            <ContactFormInput
              label="Name"
              value={name}
              onChangeText={setName}
            />
          </div>
          <div className="form-group-name">
            <ContactFormInput
              label="Email"
              value={email}
              onChangeText={setEmail}
            />
          </div>
          <div className="form-group-message">
            <textarea
              className="message-input" // Add a class for the message input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type Message"
            />
          </div>

          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
