// import styles from "./ActivityLog.module.scss";
import FormStepper from "../FormStepper";
import StepperBody from "../StepperBody";
import { StepperProvider } from "../../context/Stepper";

export default function UserForm() {
  return (
    <StepperProvider max={4}>
      <div className="w-full md:h-full bg-white relative rounded-xl md:p-4 flex max-h-[600px] max-w-4xl xl::max-w-6xl mx-auto">
        <FormStepper />
        <StepperBody />
      </div>
    </StepperProvider>
  );
}
