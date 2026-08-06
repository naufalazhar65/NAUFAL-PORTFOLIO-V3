"use client";

import { useEffect, useMemo, useState } from "react";

import { heroWorkflow } from "../hero-data";

export default function useHeroEngine() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let timeout;

    const play = (index) => {
      const duration =
        heroWorkflow[index]?.duration ?? 1800;

      timeout = setTimeout(() => {
        const next =
          index >= heroWorkflow.length - 1
            ? 0
            : index + 1;

        setActiveStep(next);

        play(next);
      }, duration);
    };

    play(0);

    return () => clearTimeout(timeout);
  }, []);

  const currentStep = useMemo(() => {
    return heroWorkflow[activeStep];
  }, [activeStep]);

  return {
    activeStep,
    currentStep,
    steps: heroWorkflow,
  };
}