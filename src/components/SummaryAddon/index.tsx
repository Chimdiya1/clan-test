import { useFormContext } from "react-hook-form";
import { formValuesType } from "../StepperBody";
import { addOnPrices } from "../../prices";

interface Props {
  title: string;
  value: string;
}
export default function SummaryAddon({ title, value }: Props) {
  const { watch } = useFormContext<formValuesType>();

  const watchMonthly = watch("monthly");

  return (
    <div className="flex items-center justify-between mb-3">
      <span className=" text-[#9C9CA6]">{title}</span>
      <span>
        {watchMonthly
          ? `$${addOnPrices[value].monthly}/mo`
          : `$${addOnPrices[value].yearly}/yr`}
      </span>
    </div>
  );
}
