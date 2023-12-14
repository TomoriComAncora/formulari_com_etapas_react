import { useState } from "react";

export function useForm(steps) {
  const [step, setStep] = useState(0);

  const changeStep = (i, e) => {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setStep(i);
  };

  return {
    step,
    currentComponent: steps[step],
    changeStep,
    firstStep: step === 0 ? true : false,
    lastStep: step + 1 === steps.length ? true : false,
  };
}
