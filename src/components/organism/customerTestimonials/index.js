import AssistanceContainer from "../assistanceContainer";
import ProfileCard from "../profileCard";

const CustomerTestimonials = () => {
  return (
    <AssistanceContainer className="   flex-col gap-5 md:gap-10 ">
      <div id="top" className="  ">
        <h2 className="bold-text text-xl leading-8 tracking-[-0.3]   md:hidden">
          People{" "}
          <span className="bold-text text-custom-green md:font-bold">love</span>{" "}
          ❤️{" "}
          <span className="bold-text text-custom-green md:font-bold">
            investing
          </span>{" "}
          <span className="block">in FDs with us</span>
        </h2>

        <h2 className="medium-text text-4xl leading-[44px] md:tracking-[-1] hidden md:block">
          People{" "}
          <span className="bold-text text-custom-green md:font-bold">love</span>{" "}
          ❤️{" "}
          <span className="bold-text text-custom-green md:font-bold">
            investing
          </span>{" "}
          <span className="block">in FDs with us</span>
        </h2>
      </div>
      <div
        id="bottom"
        className="example flex w-full gap-3  overflow-x-scroll sm:gap-6 md:gap-11"
      >
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </AssistanceContainer>
  );
};

export default CustomerTestimonials;
