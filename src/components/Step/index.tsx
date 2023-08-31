import React from "react";
import { useStepperContext } from "../../context/Stepper";
interface Props {
  step: number;
  title: string;
}
export default React.memo(function Step({ step, title }: Props) {
  const [currentStep] = useStepperContext();
  let selected = currentStep === step;
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <p
        className={` border border-white rounded-full w-8 h-8 flex items-center justify-center bold ${
          selected ? `text-black bg-[#BDE0FB] border-none` : `text-white`
        }`}
      >
        {step}
      </p>
      <div className="text-white hidden md:block">
        <p className="font-light text-sm text-[#C1C0FF]">Step {step}</p>
        <p className="medium">{title}</p>
      </div>
    </div>
  );
});
