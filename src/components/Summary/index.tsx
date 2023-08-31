import StepperSection from "../StepperSection";
import { useFormContext } from "react-hook-form";
import { formValuesType } from "../StepperBody";
import { addOnPrices, planPrices } from "../../prices";
import SummaryAddon from "../SummaryAddon";
import { useStepperContext } from "../../context/Stepper";
export default function Summary() {
  const { watch } = useFormContext<formValuesType>();
  const [currentStep, setCurrentStep, next, previous] = useStepperContext();
  const watchPlan = watch("plan");
  const watchMonthly = watch("monthly");
  const watchOnlineService = watch("onlineService");
  const watchLargerStorage = watch("largerStorage");
  const watchCustomizableProfile = watch("customizableProfile");

  const onlineServicePrice = watchOnlineService
    ? watchMonthly
      ? addOnPrices["onlineService"].monthly
      : addOnPrices["onlineService"].yearly
    : 0;
  const largerStoragePrice = watchLargerStorage
    ? watchMonthly
      ? addOnPrices["largerStorage"].monthly
      : addOnPrices["largerStorage"].yearly
    : 0;
  const customizableProfilePrice = watchCustomizableProfile
    ? watchMonthly
      ? addOnPrices["customizableProfile"].monthly
      : addOnPrices["customizableProfile"].yearly
    : 0;
  const planPrice = watchPlan
    ? watchMonthly
      ? planPrices[watchPlan].monthly
      : planPrices[watchPlan].yearly
    : 0;

  const total =
    onlineServicePrice +
    largerStoragePrice +
    customizableProfilePrice +
    planPrice;

  return (
    <StepperSection
      step={4}
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className="bg-[#F8F9FE] p-6 rounded-lg">
        <div className="flex items-center justify-between border-b pb-6 mb-6">
          <div>
            <p className="medium capitalize">
              {watchPlan} ({watchMonthly ? "Monthly" : "Yearly"})
            </p>
            <span
              onClick={() => setCurrentStep(2)}
              className="underline text-[#9C9CA6] cursor-pointer hover:text-[#3F3ACA]"
            >
              Change
            </span>
          </div>
          <span className="medium">
            {watchMonthly
              ? `$${planPrices[watchPlan].monthly}/mo`
              : `$${planPrices[watchPlan].yearly}/yr`}
          </span>
        </div>
        {watchOnlineService && (
          <SummaryAddon title="Online service" value="onlineService" />
        )}
        {watchLargerStorage && (
          <SummaryAddon title="Larger Storage" value="largerStorage" />
        )}
        {watchCustomizableProfile && (
          <SummaryAddon
            title="Customizable Profile"
            value="customizableProfile"
          />
        )}
      </div>
      <div className="flex items-center justify-between mt-4 px-7">
        <span className=" text-[#9C9CA6]">
          Total({watchMonthly ? "per month" : "per year"})
        </span>
        <span className="text-[#3F3ACA] bold text-lg">${total}/mo</span>
      </div>
    </StepperSection>
  );
}
