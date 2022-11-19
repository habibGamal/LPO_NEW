import { useState } from "react";

export default function useSteps(): [number, () => void, () => void] {
    const [step, setStep] = useState(0);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    return [step, nextStep, prevStep];
}
