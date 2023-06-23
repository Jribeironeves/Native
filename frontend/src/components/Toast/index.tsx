import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastSyled: React.FC = () => {
  const toastContainerStyle = {
    marginTop: "220px", 
  };

  return (
    <div>
      <ToastContainer
        position="top-center" 
        toastStyle={toastContainerStyle} 
      />
    </div>
  );
};
