// src/components/Desktop.js
import React from 'react';
import styled from 'styled-components';
import Taskbar from './Taskbar';
import DesktopIcons from './DesktopIcons';
import Wallpaper from './Wallpaper';

const DesktopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Desktop = () => {
    return (
        <DesktopContainer>
            <Wallpaper />
            <DesktopIcons />
            <Taskbar />
        </DesktopContainer>
    );
};

export default Desktop;
