import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import AddOns from "../AddOns";
import PersonalInfo from "../PersonalInfo";
import SelectPlan from "../SelectPlan";
import StepperBottomNav from "../StepperBottomNav";
import Summary from "../Summary";
import ThankYou from "../ThankYou";

export type formValuesType = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: string;
  monthly: boolean;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
};

export const formInitialState: formValuesType = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: "arcade",
  monthly: true,
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
};
export default function StepperBody() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const CheckoutSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Enter a vaild email"),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .matches(phoneRegExp, "Phone number is not valid"),
    plan: yup.string().required(),
    monthly: yup.boolean().required(),
    onlineService: yup.boolean().required(),
    largerStorage: yup.boolean().required(),
    customizableProfile: yup.boolean().required(),
  });
  const methods = useForm<formValuesType>({
    mode: "onBlur",
    resolver: yupResolver(CheckoutSchema),
    defaultValues: formInitialState,
  });
  const {
    formState: { isSubmitted },
    handleSubmit,
  } = methods;
  const onSubmit = (data: any) => console.log(data);
  const onError = (errors: any) => console.log(errors);
  return (
    <FormProvider {...methods}>
      {isSubmitted ? (
        <ThankYou />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="relative h-max shadow-xl md:shadow-none z-40 bg-white mt-20 md:mt-0 px-6 rounded-xl md:px-12 lg:px-20 py-6 w-full md:h-full flex flex-col justify-between"
        >
          <PersonalInfo />
          <SelectPlan />
          <AddOns />
          <Summary />
          <StepperBottomNav />
        </form>
      )}
    </FormProvider>
  );
}
