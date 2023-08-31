import "./addOnCheck.css";
import { useFormContext } from "react-hook-form";
import { addOnPrices } from "../../prices";
interface Props {
  id: string;
  value: string;
  title: string;
  description: string;
}

export default function AddOnCheck({ id, value, title, description }: Props) {
  const { register, watch } = useFormContext();

  const watchMonthly = watch("monthly");
  return (
    <li className="flex items-center check-parent px-4 md:px-8 rounded-lg">
      <input
        type="checkbox"
        id={id}
        {...register(value)}
        className="check cursor-pointer"
      />
      <label
        htmlFor={id}
        className="inline-flex items-center w-full p-2 md:p-5 md:py-3 text-gray-500 rounded-lg cursor-pointer peer-checked:border-[#473dff] dark:peer-checked:text-gray-300 peer-checked:text-gray-600 "
      >
        <div className="block">
          <div className="w-full text-sm  sm:text-base medium text-black">{title}</div>
          <div className="w-full text-xs sm:text-sm">{description}</div>
        </div>
      </label>
      <p className="text-[#473dff] text-sm">
        +
        {watchMonthly
          ? `$${addOnPrices[value].monthly}/mo`
          : `$${addOnPrices[value].yearly}/yr`}
      </p>
    </li>
  );
}
