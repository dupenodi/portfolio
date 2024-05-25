import React from 'react';
import styled from 'styled-components';
import StartButtonImage from '../assets/wallpaper.jpeg';

const TaskbarContainer = styled.div`
    width: 100%;
    height: 40px;
    background-color: #2257D6;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: stretch ;
`;

const StartButton = styled.div`
    background-image: url(${StartButtonImage});
    width: 100px; /* Adjust the width as per your image */
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const TaskbarIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px; /* Adjust as needed */
`;

const Taskbar = () => {
    return (
        <TaskbarContainer>
            <StartButton />
            <TaskbarIcons>
                {/* Add other icons and content here */}
            </TaskbarIcons>
        </TaskbarContainer>
    );
};

export default Taskbar;
