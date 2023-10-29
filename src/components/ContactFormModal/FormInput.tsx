import React, { useState } from "react";
import "./FormInput.css";

type ContactFormInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

const ContactFormInput: React.FC<ContactFormInputProps> = ({
  label,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`form-group ${isFocused ? "focused" : ""}`}>
      <input
        className={`input ${isFocused ? "focused" : ""}`}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default ContactFormInput;
