import TextDisplay from "../../atoms/textContent/TextContent";
import Heading from "../../atoms/headingContent/Heading";
import Image from "../../atoms/Image";

const AppDownloadCard = () => {
  return (
    <div
      className=" flex flex-1 flex-col justify-between gap-8 rounded-2xl bg-[#15362B]/50 bg-opacity-[5%] p-8"
      style={{ background: "#214036" }}
    >
      <div id="top" className="flex items-center justify-between gap-8">
        <div
          id="left"
          className="flex  h-[100px]   w-[100px] items-center justify-center"
        >
          <Image
            src="/images/qrcode-for-app-install.svg"
            alt="qrcode"
            className="h-full w-full "
          />
        </div>
        <div id="right" className="flex flex-col gap-2">
          <Heading
            text="Invest on the go with our mobile app"
            type="h3"
            className="scale-[0.9] text-[20px] font-bold leading-8 tracking-[-0.3] md:scale-100"
          />
          <div className="flex scale-[0.9] gap-4 md:scale-100">
            <Image src="/images/apple.svg" alt="apple store" className="" />
            <Image src="/images/google-playstore.svg" alt="playstore" />
          </div>
        </div>
      </div>

      <TextDisplay
        id="bottom"
        text="Scan this QR code to download Altcase app"
        elementType="div"
        className="overflow-auto whitespace-normal text-start text-[16px] font-normal leading-7 tracking-[-0.3] text-white opacity-70 md:text-center regular-text"
      />
    </div>
  );
};

export default AppDownloadCard;
