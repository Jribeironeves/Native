import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GridContainer,
  Card,
  StyledCard,
  FieldContainer,
  FieldLabel,
  FieldValue,
  Input,
  SaveButton,
  Button,
  PaginationContainer,
} from "./styles";

export interface SelectedCustomerProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  company: string;
  city: string;
  title: string;
}

export const CustomersId: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCustomerFromState: SelectedCustomerProps | null =
    location.state?.selectedCustomer || null;
  const [selectedCustomer, setSelectedCustomer] = useState<SelectedCustomerProps | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedGender, setEditedGender] = useState("");
  const [editedCompany, setEditedCompany] = useState("");
  const [editedCity, setEditedCity] = useState("");
  const [editedTitle, setEditedTitle] = useState("");

  useEffect(() => {
    if (selectedCustomerFromState) {
      setSelectedCustomer(selectedCustomerFromState);
    } else {
      fetch(`http://localhost:8800/customers/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setSelectedCustomer(data);
        })
        .catch((error) => console.error(error));
    }
  }, [id, selectedCustomerFromState]);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedFirstName(selectedCustomer?.first_name || "");
    setEditedLastName(selectedCustomer?.last_name || "");
    setEditedEmail(selectedCustomer?.email || "");
    setEditedGender(selectedCustomer?.gender || "");
    setEditedCompany(selectedCustomer?.company || "");
    setEditedCity(selectedCustomer?.city || "");
    setEditedTitle(selectedCustomer?.title || "");
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEmail(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedGender(event.target.value);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCompany(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCity(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  const handleSaveClick = () => {
    fetch(`http://localhost:8800/customers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedCustomer,
        first_name: editedFirstName,
        last_name: editedLastName,
        email: editedEmail,
        gender: editedGender,
        company: editedCompany,
        city: editedCity,
        title: editedTitle,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSelectedCustomer(data);
        setIsEditing(false);
        toast.success("Salvo com sucesso!");
        navigate("/dashboard");
      })
      .catch((error) => console.error(error));
  };


  return (
    <GridContainer>
      {selectedCustomer && (
        <PaginationContainer key={selectedCustomer.id}>
          <StyledCard isEditing={isEditing}>
            <FieldContainer>
              <FieldLabel>First Name:</FieldLabel>
              {isEditing ? (
                <Input value={editedFirstName} onChange={handleFirstNameChange} />
              ) : (
                <FieldValue>{selectedCustomer.first_name}</FieldValue>
              )}
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Last Name:</FieldLabel>
              {isEditing ? (
                <Input value={editedLastName} onChange={handleLastNameChange} />
              ) : (
                <FieldValue>{selectedCustomer.last_name}</FieldValue>
              )}
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Email:</FieldLabel>
              {isEditing ? (
                <Input value={editedEmail} onChange={handleEmailChange} />
              ) : (
                <FieldValue>{selectedCustomer.email}</FieldValue>
              )}
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Gender:</FieldLabel>
              {isEditing ? (
                <Input value={editedGender} onChange={handleGenderChange} />
              ) : (
                <FieldValue>{selectedCustomer.gender}</FieldValue>
              )}
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Company:</FieldLabel>
              {isEditing ? (
                <Input value={editedCompany} onChange={handleCompanyChange} />
              ) : (
                <FieldValue>{selectedCustomer.company}</FieldValue>
              )}
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>City:</FieldLabel>
              {isEditing ? (
                <Input value={editedCity} onChange={handleCityChange} />
              ) : (
                <FieldValue>{selectedCustomer.city}</FieldValue>
              )}
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Title:</FieldLabel>
              {isEditing ? (
                <Input value={editedTitle} onChange={handleTitleChange} />
              ) : (
                <FieldValue>{selectedCustomer.title}</FieldValue>
              )}
            </FieldContainer>
            <Button onClick={handleEditClick}>Edit</Button>
            {isEditing && <SaveButton onClick={handleSaveClick}>Save</SaveButton>}
          </StyledCard>
        </PaginationContainer>
      )}
    </GridContainer>
  );
};
