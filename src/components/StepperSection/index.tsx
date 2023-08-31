import { ReactNode } from "react";
import { useStepperContext } from "../../context/Stepper";

interface Props {
  step: number;
  title: string;
  description: string;
  children: ReactNode;
}
export default function StepperSection({
  step,
  children,
  title,
  description,
}: Props) {
  const [currentStep] = useStepperContext();
  return (
    <div className={`${currentStep === step ? "block" : "hidden"} `}>
      <h1 className="text-2xl md:text-3xl bold mb-1 text-[#02295a]">{title}</h1>
      <p className="text-[#ACACB6] text-sm mb-8">{description}</p>
      {children}
    </div>
  );
}
