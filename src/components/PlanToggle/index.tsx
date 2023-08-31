import { Switch } from "@headlessui/react";
import { Controller, useFormContext } from "react-hook-form";

export default function PlanToggle() {
  const { control } = useFormContext();
  
  return (
    <div className="w-full gap-4 flex justify-center items-center bg-[#F8F9FE] p-3 rounded-lg mt-7">
      <span>Monthly</span>
      <Controller
        control={control}
        name="monthly"
        render={({ field: { ref, ...field } }) => (
          <Switch
            checked={field.value}
            onChange={field.onChange}
            className={`bg-[#012A58]
          relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-0 focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${!field.value ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        )}
      />

      <span>Yearly</span>
    </div>
  );
}
