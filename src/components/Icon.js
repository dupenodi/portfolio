import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
    padding: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
    border: 1px solid transparent;


    &:hover {
    background-color: rgba(255,255,255,0.5);
    border-radius: 2px;
      border: 1px solid whitesmoke;
  }

  img {
    width: 48px;
    height: 48px;
  }

  span {
    margin-top: 5px;
    font-size: 12px;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
`;

const Icon = ({ imageSrc, iconText }) => {
    return (
        <IconContainer>
            <img src={imageSrc} alt={iconText} />
            <span>{iconText}</span>
        </IconContainer>
    );
};

export default Icon;
