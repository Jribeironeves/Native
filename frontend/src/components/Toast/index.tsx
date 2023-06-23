import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastSyled: React.FC = () => {
  const toastContainerStyle = {
    marginTop: "220px", // Define a distância do topo da tela em pixels
  };

  return (
    <div>
      {/* Resto do conteúdo da aplicação */}
      <ToastContainer
        position="top-center" // Posicionamento no centro superior
        toastStyle={toastContainerStyle} // Estilo do ToastContainer
      />
    </div>
  );
};
