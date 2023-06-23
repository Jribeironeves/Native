// CustomersCityPage
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FirstNamesProps } from "../../../components/Card";
import {
  GridContainer,
  Card,
  FieldContainer,
  FieldLabel,
  FieldValue,
  PaginationContainer,
  Button,
  PaginationButton,
} from "./styles";

export interface selectedCustomerProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  company: string;
  city: string;
  title: string;
}

export const CustomersCityPage: React.FC = () => {
  const location = useLocation();
  const newfirstNames: FirstNamesProps[] = location.state?.firstNames || [];
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );

  const navigate = useNavigate();

  const navigateToNewPage = (customer: selectedCustomerProps) => {
    navigate(`/dashboard/customers/${customer.id}`, {
      state: { selectedCustomer: customer },
    });
  };

  const handleButtonClick = (customer: selectedCustomerProps) => {
    setSelectedCustomerId(customer.id);
    navigateToNewPage(customer);
  };

  const itemsPerPage = 2;
  const totalPages = Math.ceil(newfirstNames.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const renderedData = newfirstNames.slice(startIndex, endIndex);

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

  return (
    <GridContainer>
      {renderedData.map((item: FirstNamesProps) => (
        <PaginationContainer key={item.id}>
          <Card>
            <FieldContainer>
              <FieldLabel>Name:</FieldLabel>
              <FieldValue>
                {item.first_name} {item.last_name}
              </FieldValue>
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>E-mail:</FieldLabel>
              <FieldValue>{item.email}</FieldValue>
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Company:</FieldLabel>
              <FieldValue>{item.company}</FieldValue>
            </FieldContainer>
            <Button onClick={() => handleButtonClick(item)}>see more</Button>
          </Card>
        </PaginationContainer>
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
    </GridContainer>
  );
};
