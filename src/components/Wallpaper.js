// src/components/Wallpaper.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import WallpaperImage from '../assets/wallpaper.jpeg'; // Ensure you have this image in your assets folder

const WallpaperContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${WallpaperImage}) no-repeat center center/cover;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const Wallpaper = () => {

    return (
        <WallpaperContainer>
        </WallpaperContainer>
    );
};

export default Wallpaper;
