import AssistanceContainer from "../assistanceContainer";
import ProfileCard from "../profileCard";

const CustomerTestimonials = () => {
  return (
    <AssistanceContainer className="   flex-col  ">
      <div id="top" className=" my-4   ">
      <h2 className="bold-text text-xl leading-8 tracking-[-0.3] md:text-4xl md:leading-[44px] md:tracking-[-1]">
  People <span className="text-custom-green bold-text md:font-bold">love</span> ❤️{" "}
  <span className="text-custom-green bold-text md:font-bold">investing</span>{" "}
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
