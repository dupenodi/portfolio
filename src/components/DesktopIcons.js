import React from 'react';
import styled from 'styled-components';
import MyComputerIcon from '../assets/my-computer.png';
import RecycleBinIcon from '../assets/bin.png';
import Icon from './Icon'; // Assuming Icon component is in a separate file

const IconsContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
`;

const DesktopIcons = () => {
    return (
        <IconsContainer>
            <Icon imageSrc={MyComputerIcon} iconText="My Computer" />
            <Icon imageSrc={RecycleBinIcon} iconText="Recycle Bin" />
        </IconsContainer>
    );
};

export default DesktopIcons;
