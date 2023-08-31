import { useFormContext } from "react-hook-form";
import { planPrices } from "../../prices";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
interface Props {
  id: string;
  value: string;
  defaultChecked?: boolean;
  price: string;
}
export default function PlanSelect({
  id,
  value,
  defaultChecked = false,
}: Props) {
  const { register, watch } = useFormContext();
  const watchMonthly = watch("monthly", true);

  return (
    <li>
      <input
        {...register("plan")}
        type="radio"
        id={id}
        value={value}
        className="hidden peer"
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={id}
        className="inline-flex items-center justify-between w-full p-3 md:p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-600 peer-checked:bg-[#F8F9FE]  peer-checked:border-blue-600 hover:text-gray-600 hover:bg-gray-100 "
      >
        <div className="flex items-center md:block">
          {value === "arcade" && <img src={arcade} alt="arcade-icon" />}
          {value === "advanced" && <img src={advanced} alt="advanced-icon" />}
          {value === "pro" && <img src={pro} alt="pro-icon" />}

          <div className="ml-3 md:ml-0 md:mt-7 w-full">
            <p className="capitalize medium text-[#001B38]">{value}</p>
            <p className="text-gray-400">
              {watchMonthly
                ? `$${planPrices[value].monthly}/mo`
                : `$${planPrices[value].yearly}/yr`}
            </p>
            {!watchMonthly && <p className="medium text-sm">2 months free</p>}
          </div>
        </div>
      </label>
    </li>
  );
}
