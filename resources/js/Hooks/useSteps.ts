import { useState } from "react";

export default function useSteps(init:number = 0): [number, () => void, () => void] {
    const [step, setStep] = useState(init);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    return [step, nextStep, prevStep];
}
