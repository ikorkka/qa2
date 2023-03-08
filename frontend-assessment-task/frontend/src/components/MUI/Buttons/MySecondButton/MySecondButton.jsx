import React from "react";
import "./MySecondButton.css";
import Button from "@mui/material/Button";

const MySecondButton = ({ children, ...props }) => {
  return (
    <Button className="mySecondButton" {...props} variant="outlined">
      {children}
    </Button>
  );
};
export default MySecondButton;
