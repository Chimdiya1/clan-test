import bgImageDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import bgImageMobile from "../../assets/images/bg-sidebar-mobile.svg";
import Step from "../Step";

export default function FormStepper() {
  return (
    <>
      <div
        className=" hidden md:block md:w-2/5 bg-blue-900 h-full rounded-xl bg-cover bg-no-repeat  md:px-4 md:py-8 lg:p-8 bg-[url(bgImage)]"
        style={{
          backgroundImage: `url(${bgImageDesktop})`,
        }}
      >
        <div className="flex flex-col gap-5">
          <Step step={1} title="YOUR INFO" />
          <Step step={2} title="SELECT PLAN" />
          <Step step={3} title="ADD-ONS" />
          <Step step={4} title="SUMMARY" />
        </div>
      </div>
      <div
        className=" block z-0 fixed top-0 left-0 md:hidden w-full bg-blue-900 h-40 bg-cover bg-no-repeat bg-bottom p-8"
        style={{
          backgroundImage: `url(${bgImageMobile})`,
        }}
      >
        <div className="flex justify-center gap-5">
          <Step step={1} title="YOUR INFO" />
          <Step step={2} title="SELECT PLAN" />
          <Step step={3} title="ADD-ONS" />
          <Step step={4} title="SUMMARY" />
        </div>
      </div>
    </>
  );
}
