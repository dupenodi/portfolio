'use client';

import { memo } from 'react';
import SafeFaultyTerminal from './SafeFaultyTerminal';

interface TerminalBackgroundProps {
  scale?: number;
  gridMul?: [number, number];
  digitSize?: number;
  timeScale?: number;
  pause?: boolean;
  scanlineIntensity?: number;
  glitchAmount?: number;
  flickerAmount?: number;
  noiseAmp?: number;
  chromaticAberration?: number;
  dither?: number;
  curvature?: number;
  tint?: string;
  mouseReact?: boolean;
  mouseStrength?: number;
  pageLoadAnimation?: boolean;
  brightness?: number;
}

const TerminalBackground = memo(function TerminalBackground(props: TerminalBackgroundProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <SafeFaultyTerminal {...props} />
    </div>
  );
});

export default TerminalBackground;
