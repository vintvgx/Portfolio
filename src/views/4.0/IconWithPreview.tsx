import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./IconWithPreview.css";

interface IconWithPreviewProps {
  icon: IconType; // Icon component from react-icons
  preview: React.ReactNode; // Preview component to be shown on hover
  tooltipText: string; // Tooltip text to be displayed on hover
}

const IconWithPreview: React.FC<IconWithPreviewProps> = ({
  icon: Icon,
  preview,
  tooltipText,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="icon-tooltip">{tooltipText}</Tooltip>}>
      <div
        className="icon-container"
        onMouseEnter={togglePreview}
        onMouseLeave={togglePreview}>
        <Icon size={30} />
        {showPreview && <div className="preview-container">{preview}</div>}
      </div>
    </OverlayTrigger>
  );
};

export default IconWithPreview;
