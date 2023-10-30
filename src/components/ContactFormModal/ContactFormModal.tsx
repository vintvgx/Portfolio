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
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch(
        "https://us-central1-portfolio-10e95.cloudfunctions.net/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        setSuccessMessage("Email sent successfully!");
        setIsError(false);
      } else {
        setSuccessMessage("Failed to send email. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccessMessage("Failed to send email. Please try again.");
      setIsError(true);
    }

    setIsSending(false);

    if (onClose) onClose();
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
              className="message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type Message"
            />
          </div>

          <button type="submit" className="send-button" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>

        {isError && <div className="error-message">{successMessage}</div>}
        {!isError && successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        {isError && <div className="error-message">{successMessage}</div>}
        {!isError && successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;
