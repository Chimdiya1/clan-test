import { createContext, useContext, useState, ReactNode } from "react";

export const StepperInitialState: number = 1;

export type stepperContextType = [
  number,
  React.Dispatch<React.SetStateAction<number>>,
  () => void,
  () => void
];

export const StepperContext = createContext<stepperContextType>([
  StepperInitialState,
  () => null,
  () => null,
  () => null,
]);

type Props = {
  children?: ReactNode;
  max: number;
};

export function StepperProvider({ children, max }: Props) {
  const [currentStep, setCurrentStep] = useState(1);
  const next = () => {
    if (currentStep + 1 <= max) {
      setCurrentStep(currentStep + 1);
    }
  };
  const previous = () => {
    if (currentStep - 1 >= 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <StepperContext.Provider value={[currentStep, setCurrentStep, next, previous]}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  return useContext<stepperContextType>(StepperContext);
}
