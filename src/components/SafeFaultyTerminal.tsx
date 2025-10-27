'use client';

import { useState, useEffect, memo } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import FaultyTerminal with no SSR - memoized to prevent re-imports
const FaultyTerminal = memo(dynamic(() => import('./FaultyTerminal'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-900" />
}));

interface SafeFaultyTerminalProps {
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

const SafeFaultyTerminal = memo(function SafeFaultyTerminal(props: SafeFaultyTerminalProps) {
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />;
  }

  if (hasError) {
    return <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />;
  }

  try {
    return (
      <div className="w-full h-full">
        <FaultyTerminal {...props} />
      </div>
    );
  } catch (error) {
    console.warn('FaultyTerminal failed to render, falling back to gradient:', error);
    setHasError(true);
    return <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />;
  }
});

export default SafeFaultyTerminal;
