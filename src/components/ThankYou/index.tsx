// import styles from "./ActivityLog.module.scss";
import checkSVG from "../../assets/images/icon-thank-you.svg";
export default function ThankYou() {
  return (
    <div className="shadow-xl md:shadow-none z-40 mt-20 md:mt-0 bg-white px-20 rounded-lg py-10 md:py-6 w-full h-full flex flex-col items-center justify-center">
      <img src={checkSVG} alt="thankyou" />
      <h2 className="text-3xl my-5 bold">Thank you!</h2>
      <p className="text-sm text-center text-[#9E9EA6]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
