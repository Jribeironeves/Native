import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Container, PaginationContainer, PaginationButton } from "./styles";
import { MuiCard } from "../../components/Card";

export const Dashboard: React.FC = () => {
  interface ClientsProps {
    id: number;
    city: string;
    total: number;
  }

  const [customers, setCustomers] = useState<ClientsProps[]>([]);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const res = await axios.get<ClientsProps[]>(
          "http://localhost:8800/customers"
        );
        setCustomers(res.data);
      } catch (error) {
        toast.error("Ocorreu um erro ao buscar os clientes.");
      }
    };

    getCustomers();
  }, []);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const renderedData = customers.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  console.log(customers);
  return (
    <>
      <Container>
        {renderedData.map((item) => (
          <MuiCard key={item.id} city={item.city} total={item.total} />
        ))}

        <PaginationContainer>
          {currentPage > 1 && (
            <PaginationButton
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </PaginationButton>
          )}

          <PaginationButton>{currentPage}</PaginationButton>

          {currentPage < totalPages && (
            <PaginationButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </PaginationButton>
          )}
        </PaginationContainer>
      </Container>
    </>
  );
};
