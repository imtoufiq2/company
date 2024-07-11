import React, { useEffect, useState } from "react";
import FooterSection from "../../organism/footerSection";

import { getData } from "../../../utils/Crypto";

import axios from "axios";
import useScrollToTop from "../../../customHooks/useScrollToTop";
import { endpoints } from "../../../services/endpoints";
//const defaultAvatarUrl = "https://randomuser.me/api/portraits/men/32.jpg"; // Example URL from randomuser.me
const defaultAvatarUrl =
  "images/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg"; // Example URL from randomuser.me
const data = [
  {
    title: "copy",
    url: "/images/Copy.svg",
  },
  {
    title: "watsapp",
    url: "/images/WhatsappLogo.svg",
  },
  {
    title: "chat",
    url: "/images/ChatText.svg",
  },
  {
    title: "email",
    url: "/images/green-envelope.svg",
  },
];

const ReferAndEarn = () => {
  const [registeredCount, setRegisteredCount] = useState(0);
  const [saleCount, setSaleCount] = useState(0);
  const [earningInfo, setEarningInfo] = useState([]);

  const [statsUpdated, setStatsUpdated] = useState(false);
  const [referralLink, setReferralLink] = useState(""); // State to hold the referral link
  const defaultCampaignId = 34427;

  const rightData = [
    {
      value: "0",
      tag: "Earned",
    },
    {
      value: registeredCount,
      tag: "Registered",
    },
    {
      value: saleCount,
      tag: "Invested",
    },
  ];

  // const earningInfo = [
  //   {
  //     name: "Amita Jain",
  //     avatar: "",
  //     date: "12 Mar 2024",
  //     time: "10:20 AM",
  //     price: "100",
  //   },
  //   {
  //     name: "Sanchit Kulkarni",
  //     avatar: "",
  //     date: "10 Mar 2024",
  //     time: "07:35 PM",
  //     price: "300",
  //   },
  //   {
  //     name: "Zaheer Sheikh",
  //     avatar: "",
  //     date: "7 Mar 2024",
  //     time: "02:14 PM",
  //     price: "250",
  //   },
  //   {
  //     name: "Monika Rawat",
  //     avatar: "",
  //     date: "2 Mar 2024",
  //     time: "04:53 PM",
  //     price: "100",
  //   },
  //   {
  //     name: "Akriti Shahleza",
  //     avatar: "",
  //     date: "24 Feb 2024",
  //     time: "06:27 PM",
  //     price: "50",
  //   },
  // ];
  const getRefererStats = async (campaignId, mobile) => {
    try {
      const response = await axios.post(
        `${endpoints?.baseUrl}/user/referral_stats`,
        {
          email: mobile,
          campaign_id: campaignId,
        },
        // {
        //   headers: {
        //     accept: "application/json",
        //     "content-type": "application/json",
        //     "x-api-key": "506FE0BBE393F985B84A0350B64F0631",
        //     "x-brand-id": "68573",
        //   },
        // },
      );

      if (response.status === 200) {
        // Store the referrer details in the local storage
        localStorage.setItem("referrerStats", JSON.stringify(response.data));
        setStatsUpdated(true);
      }
    } catch (error) {
      console.error("Error fetching referrer details:", error);
    }
  };
  // use effect to call referral stats api
  useEffect(() => {
    if (localStorage.getItem("irNotify") !== "null") {
      // called when someone comes through referral ( campaign will be available in local storage)
      getRefererStats(localStorage.getItem("irNotify"), getData("mobile"));
    } else {
      // for organic user referal stat will use default campaign id
      getRefererStats(defaultCampaignId, getData("mobile"));
    }
  }, []);
  const getReferralLink = () => {
    const referrerStats = localStorage.getItem("referrerStats")
      ? JSON.parse(localStorage.getItem("referrerStats"))
      : null;

    if (referrerStats) {
      return referrerStats.referral_link;
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (statsUpdated) {
      const storedReferralStats = localStorage.getItem("referrerStats");
      const referralStats = storedReferralStats
        ? JSON.parse(storedReferralStats)
        : null;

      if (referralStats && referralStats.convertsList) {
        // Filter for registration events where status is not "2" and count them
        const registered = referralStats.convertsList.filter(
          (item) => item.event_name === "register" && item.status !== "2",
        ).length;
        setRegisteredCount(registered);

        // Filter for sale events where status is not "2" and count them
        const sales = referralStats.convertsList.filter(
          (item) => item.event_name === "sale" && item.status !== "2",
        ).length;
        setSaleCount(sales);

        // Map the convertsList to create the salesEarningInfo array for sales
        const earningInfo = referralStats.convertsList
          .filter((item) => item.event_name === "sale" && item.status !== "2")
          .map((item) => {
            const dateTimeSplit = item.time.split(" ");
            return {
              name: item.referee_mobile || "Unknown",
              avatar: defaultAvatarUrl, // Use the default avatar URL
              date: dateTimeSplit[0],
              time: dateTimeSplit[1],
              price: item.purchaseValue || "0", // Use the purchaseValue from the item, default to "0"
            };
          });
        setEarningInfo(earningInfo);
      }

      // Reset statsUpdated to false so this effect only runs after the next update
      setStatsUpdated(false);
    }
  }, [statsUpdated]);

  // useEffect to update the referral link when stats are updated
  useEffect(() => {
    if (statsUpdated) {
      const link = getReferralLink();
      setReferralLink(link); // Update the referralLink state
    }
  }, [statsUpdated]);

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleIconClick = (title) => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    console.log("ismobile", isMobile);
    if (title === "copy") {
      navigator.clipboard
        .writeText(referralLink)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else if (title === "whatsapp") {
      const whatsappUrl = isMobile
        ? `whatsapp://send?text=${encodeURIComponent(referralLink)}`
        : `https://web.whatsapp.com/send?text=${encodeURIComponent(referralLink)}`;
      window.open(whatsappUrl, "_blank");
    } else if (title === "chat" && isMobile) {
      const smsUrl = `sms:?body=${encodeURIComponent(referralLink)}`;
      if (isMobile) {
        window.location.href = smsUrl;
      } else {
        window.open(smsUrl, "_blank");
      }
    } else if (title === "email") {
      const emailUrl = `mailto:?subject=Check this out&body=${encodeURIComponent(referralLink)}`;
      window.open(emailUrl, "_blank");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div id="_header" className=" bg-[#02542B] ">
        <div
          id="_inner-box"
          className="mx-auto grid  w-[90%] max-w-[1008px] grid-cols-1  lg:min-h-[358px] lg:grid-cols-2 lg:gap-4"
        >
          <div
            id="_left"
            className="relative mt-5 flex flex-col text-white lg:top-[33%] lg:mt-0 lg:gap-6 lg:pb-[1.8rem]"
          >
            <h3 className="bold-text text-center text-[1.75rem] leading-9 tracking-[-0.5px] lg:text-start lg:text-5xl lg:leading-[3.5rem] lg:tracking-[-1.75px]	">
              Refer & Earn
            </h3>
            <p className="regular-text hidden text-xl leading-8 tracking-[-0.3px] lg:block">
              Share your referral link with your friends to invite them to
              Altcase and earn rewards when they invest.
            </p>
          </div>
          <div id="_right" className="relative">
            <img
              src="/images/refer-and-earn.svg"
              alt="refer"
              className="  absolute  bottom-0   hidden w-full object-cover lg:mt-5 lg:block "
            />
            <img
              src="/images/Frame.svg"
              alt="refer"
              className="mx-auto mb-[40px] h-[10.125rem] max-w-[19.375rem] lg:hidden"
            />
          </div>
        </div>
      </div>
      <div
        id="_translateY"
        className="-mb-5 flex -translate-y-11 flex-col  gap-3 md:mb-0 lg:-translate-y-9 lg:gap-8"
      >
        <div
          id="_second_part"
          className=" mx-auto  grid w-[90%]  max-w-[1008px]  grid-cols-1 gap-3 text-[#1B1B1B] md:w-[75%] md:gap-6 lg:grid-cols-custom  lg:gap-8"
        >
          <div
            id="_left"
            className="flex h-fit flex-col gap-4 rounded-2xl border-[0.5px] bg-white p-5 md:p-8 lg:max-w-[592px] lg:gap-8"
          >
            <div
              id="_first"
              className="bold-text mt-1 text-xl leading-8 tracking-[-0.3px] md:leading-[2.1875rem] lg:mt-0"
            >
              Invite your friends and earn 🎁 rewards
            </div>
            <div
              id="_second"
              className="regular-text mb-1 text-sm leading-6 tracking-[-0.2px] text-slate-500 lg:hidden"
            >
              Share your referral link with your friends to invite them to
              Altcase and earn rewards when they invest.
            </div>
            <div id="_third" className="flex flex-col gap-1">
              <p className="medium-text text-sm leading-6 tracking-[-0.2px] text-slate-500 md:text-base md:leading-7 md:tracking-[-0.3px]">
                Share your referral link
              </p>
              <h5 className="semi-bold-text text-sm leading-6  tracking-[-0.2px] text-[#21B546] md:text-xl md:leading-8 md:tracking-[-0.3px]">
                {getReferralLink()}
              </h5>
            </div>
            <div id="_fourth" className="flex items-center gap-3">
              {data?.map((cur) => {
                return (
                  <button
                    className="rounded-md bg-[#F2FFF5] p-4 "
                    onClick={() => handleIconClick(cur.title)}
                  >
                    <img
                      src={cur?.url}
                      alt={cur.title}
                      className="h-[1.125rem] w-[1.125rem] "
                    />
                  </button>
                );
              })}
            </div>
          </div>
          {/* make the component for this box*/}
          <div
            id="_right"
            className="flex h-fit flex-col gap-5 rounded-2xl border-[0.5px] bg-white p-5 md:p-8 lg:gap-8"
          >
            <div
              id="_top"
              className="bold-text text-xl leading-8 tracking-[-0.3px]"
            >
              Invite Report
            </div>
            <div className="flex items-center gap-[0.875rem]">
              {rightData?.map((cur) => {
                return (
                  <div className="flex min-w-[5.25rem] flex-col rounded-xl border-[0.5px] bg-[#F0F3F9] py-5 ">
                    <h3
                      id="_top"
                      className="semi-bold-text text-center text-base leading-7 tracking-[-0.3px] text-[#1B1B1B]"
                    >
                      {cur?.value}
                    </h3>
                    <p
                      id="_bottm"
                      className="regular-text text-center text-xs leading-5 tracking-[-0.2px] text-[#5E718D]"
                    >
                      {cur?.tag}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          id="_third_part"
          className=" mx-auto  grid w-[90%]  max-w-[1008px]  grid-cols-1 gap-3 text-[#1B1B1B] md:w-[75%] md:gap-6 lg:grid-cols-custom  lg:gap-8"
        >
          <div
            id="_left"
            className="flex h-fit flex-col gap-4 rounded-2xl border-[0.5px] bg-white p-5 md:p-8 lg:max-w-[592px] lg:gap-8"
          >
            <h3
              id="_top"
              className="bold-text text-xl leading-8 tracking-[-0.3px] text-[#1B1B1B]"
            >
              Earning Activities
            </h3>
            <div id="_users" className=" flex flex-col gap-4">
              {earningInfo.map((cur, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-3"
                  >
                    <img
                      src={defaultAvatarUrl}
                      alt={`Avatar for ${cur.name}`}
                      className="h-10 w-10 rounded-full"
                    />

                    <div id="_middle" className="flex flex-1 flex-col ">
                      <h6 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                        {cur.name}
                      </h6>
                      <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                        {cur.date} • {cur.time}
                      </p>
                    </div>
                    <div id="_right" className="regular-text text-right">
                      ₹
                      <span className="semi-bold-text text-base leading-7 tracking-[-0.3px]">
                        {cur.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" md:w-[346px]"></div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ReferAndEarn;
