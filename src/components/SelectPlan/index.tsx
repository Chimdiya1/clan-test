import PlanSelect from "../PlanSelect";
import StepperSection from "../StepperSection";
import PlanToggle from "../PlanToggle";
export default function SelectPlan() {
  return (
    <StepperSection
      step={2}
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <ul className="flex flex-col gap-3 md:grid w-full md:gap-6 md:grid-cols-3">
        <PlanSelect
          defaultChecked
          id="plan-arcade"
          value="arcade"
          price="$9/mo"
        />
        <PlanSelect id="plan-advanced" value="advanced" price="$12/mo" />
        <PlanSelect id="plan-pro" value="pro" price="$15/mo" />
      </ul>
      <PlanToggle />
    </StepperSection>
  );
}
