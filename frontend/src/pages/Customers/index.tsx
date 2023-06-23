import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Container,
  CardContainer,
  PaginationContainer,
  CityInfo,
  Id,
  FirstName,
  LastName,
  Email,
  Gender,
  Company,
  City,
  PaginationButton,
} from "./styles";

export const Customers: React.FC = () => {
  interface CustomersProps {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    company: string;
    city: string;
    title: string;
  }

  const [customers, setCustomers] = useState<CustomersProps[]>([]);

  const itemsPerPage = 2;
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

  useEffect(() => {
    axios
      .get("http://localhost:8800/customers/details")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        toast.error("Error fetching data");
        console.error(error);
      });
  }, []);

  return (
    <>
      <Container>
      {renderedData.map((item) => (
        <>
        <CardContainer>
          <CityInfo>
            <Id>Id: {item.id}</Id>
            <FirstName>First Name: {item.first_name}</FirstName>
            <LastName>Last Name: {item.last_name}</LastName>
            <Email>Email: {item.email}</Email>
            <Gender>Gender: {item.gender}</Gender>
            <Company>Company: {item.company}</Company>
            <City>City: {item.city}</City>
          </CityInfo>
        </CardContainer>
        </>
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
