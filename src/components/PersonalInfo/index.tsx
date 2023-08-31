import Input from "../Input";
import StepperSection from "../StepperSection";
import { useFormContext } from "react-hook-form";
export default function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <StepperSection
      step={1}
      title="Personal Info"
      description="Please provide your name, email address, and phone number."
    >
      <Input
        title="Name"
        register={register(`name`)}
        error={errors.name?.message}
        placeholder="e.g Stephen King"
        type="text"
      />

      <Input
        title="Email Address"
        register={register(`email`)}
        error={errors.email?.message}
        placeholder="stephenking@lorem.com"
        type="email"
      />
      <Input
        title="Phone Number"
        register={register(`phoneNumber`)}
        error={errors.phoneNumber?.message}
        placeholder="e.g +1 234567890"
        type="text"
      />
    </StepperSection>
  );
}
