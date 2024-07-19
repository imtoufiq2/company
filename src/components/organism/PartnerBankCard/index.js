import { useNavigate } from "react-router-dom";
import Image from "../../atoms/Image";
import toast from "react-hot-toast";
import { getLogoUrl } from "../../../utils/commonUtils";

const PartnerBankCard = ({ curBank }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex w-full min-w-[84px] max-w-[84px]  flex-col gap-2 md:min-w-[100px] md:max-w-[100px] md:gap-5 ${Number(curBank?.is_comingsoon) !== 1 && "cursor-pointer"}`}
      onClick={() => {
        if (Number(curBank?.is_comingsoon) !== 1) {
          navigate(
            `/invest/${curBank?.fd_id}/${curBank?.scheme_master_id}/${curBank?.tag ? curBank?.tag : "Popular"}`,
          );
        } else {
          toast.success("Upcoming");
        }
      }}
    >
      <div
        id="_logo"
        className="relative flex h-[84px] w-fit items-center justify-center rounded-xl border-[0.5px] bg-white p-5 md:h-[100px] md:w-[100px]"
      >
        {Number(curBank?.is_comingsoon) === 1 && (
          <p 
          // className="absolute right-2/4 top-0 translate-x-[50%]   rounded-sm  px-1 pb-[1px] text-white"
          className="absolute medium-text text-[9px] md:text-xs px-1 md:px-2 top-0 -translate-y-2/4 rounded-md leading-5 tracking-[-4%] py-[2px] text-[#F9FAFB] bg-[#AFBACA] whitespace-nowrap"
          >
            Coming Soon
          </p>
        )}

        <Image
          // src={curBank?.logo_url}
          src={getLogoUrl(curBank?.logo_url)}
          alt="bank-logo"
          className="h-11 w-11 object-contain"
        />
      </div>
      <p
        id="_text"
        className="semi-bold-text text-center text-[12px] leading-5 tracking-[-0.2px] text-[#5E718D]"
      >
        {curBank?.issuer_name}
      </p>
    </div>
  );
};

export default PartnerBankCard;
