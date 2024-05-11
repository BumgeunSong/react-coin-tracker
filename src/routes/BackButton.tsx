import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled component for the back button
const BackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primary}; // You can define your theme and use it here
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

interface BackButtonProps {
    linkTo: string;
}

// BackButton component
const BackButtonComponent = ({ linkTo }: BackButtonProps) => {
    return (
        <Link to={linkTo}>
            <BackButton>
                &larr; Back
            </BackButton>
        </Link>
    );
};

export default BackButtonComponent;
