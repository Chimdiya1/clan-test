import AddOnCheck from "../AddonCheck";
import StepperSection from "../StepperSection";

export default function AddOns() {
  return (
    <StepperSection
      step={3}
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience"
    >
      <ul className="flex flex-col w-full gap-4 md:gap-6 ">
        <AddOnCheck
          id="online-service"
          value="onlineService"
          title="Online Service"
          description="Access to multiplayer games"
        />
        <AddOnCheck
          id="larger-storage"
          value="largerStorage"
          title="Larger storage"
          description="Extra 1TB of cloud save"
        />
        <AddOnCheck
          id="custom-profile"
          value="customizableProfile"
          title="Customizable Profile"
          description="Custom theme on your profile"
        />
      </ul>
    </StepperSection>
  );
}
