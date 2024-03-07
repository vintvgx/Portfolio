// TemplateScreen.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import IconWithPreview from "./IconWithPreview";
import { RiShuffleLine } from "react-icons/ri";
import { IconType } from "react-icons";
import TwoTemplateScreen from "./TwoTemplateScreen";

const TemplateScreen: React.FC = () => {
  const navigate = useNavigate();

  const icon: IconType = () => <RiShuffleLine size={30} />;

  const navigateToTwoTemplate = () => {
    navigate("/two-template");
  };

  return (
    <div>
      <h1>Template Screen</h1>
      <p>Ben Harsh</p>
      <IconWithPreview
        icon={icon}
        tooltipText="Preview Two Template Screen"
        preview={<TwoTemplateScreen />} // Preview of Two Template Screen
      />
      <button onClick={navigateToTwoTemplate}>Go to Two Template Screen</button>
    </div>
  );
};

export default TemplateScreen;
