import React from 'react'


const stepStyles = {
  backgroundColor: "#f19485",
  padding: "9px",
  margin: "8px"
};

export const WizardStep = ({ title, children }) => {
  
  return (
    <div style={stepStyles}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};