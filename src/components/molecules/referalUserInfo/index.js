
import { formatIndianNumber } from "../../../utils/commonUtils";

const defaultAvatarUrl = "https://avatars.githubusercontent.com/u/97977967?v=4";


const ReferalUserInfo = ({ cur,inviteReport }) => {
  return (
    <div className="flex items-center justify-between gap-3">
    <img
      src={defaultAvatarUrl}
      alt={`Avatar for ${cur.name}`}
      className="h-10 w-10 rounded-full"
    />
    <div id="_middle" className="flex flex-1 flex-col">
      <h6 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
        {inviteReport === "Earned" ? cur.name : cur.referee_name}
      </h6>
      <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
        {cur.date ? `${cur.date} • ` : ""}{cur.time}
      </p>
    </div>
    <div id="_right" className="regular-text text-right">
      {inviteReport === "Earned" && (
        <>
          ₹
          <span className="semi-bold-text text-base leading-7 tracking-[-0.3px]">
            {cur?.price ? formatIndianNumber(cur.price) : 0}
          </span>
        </>
      )}
      {inviteReport !== "Earned" && (
        <span className="semi-bold-text text-base leading-7 tracking-[-0.3px]">
          {cur?.status}
        </span>
      )}
    </div>
  </div>
  )
}

export default ReferalUserInfo