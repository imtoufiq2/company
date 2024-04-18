import AssistanceContainer from "../assistanceContainer";
import ProfileCard from "../profileCard";

const CustomerTestimonials = () => {
  return (
    <AssistanceContainer className="   flex-col  ">
      <div id="top" className=" my-4   ">
        <h2 className="text-[20px] font-bold leading-8 tracking-[-0.3] md:text-4xl md:font-semibold md:leading-[44px] md:tracking-[-0.1]">
          People <span className="text-custom-green">love</span> ❤️{" "}
          <span className="text-custom-green">investing</span>{" "}
          <span className=" block  ">in FDs with us</span>
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
