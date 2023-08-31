import { useStepperContext } from "../../context/Stepper";
import { useFormContext } from "react-hook-form";

export default function StepperBottomNav() {
  const { trigger } = useFormContext();
  const [currentStep, , next, previous] = useStepperContext();
  return (
    <div className="flex justify-between items-center w-full p-3 px-7 fixed bg-white left-0 bottom-0 md:p-0 md:relative">
      {currentStep > 1 && (
        <span
          className="text-[#9A9AA4] hover:text-[#15294E] cursor-pointer "
          onClick={() => previous()}
        >
          Go Back
        </span>
      )}
      {currentStep === 4 ? (
        <button
          className={`bg-[#483EFF] hover:bg-[#918DFE] ml-auto self-end text-white rounded-md px-6 py-3`}
          onClick={async () => {}}
        >
          Confirm
        </button>
      ) : (
        <div
          className={`cursor-pointer bg-[#03295A] ml-auto self-end text-white rounded-md px-6 py-3`}
          onClick={async () => {
            if (currentStep !== 1) {
              next();
            } else {
              const res = await trigger(["name", "email", "phoneNumber"]);
              if (res) {
                next();
              }
            }
          }}
        >
          Next Step
        </div>
      )}
    </div>
  );
}
