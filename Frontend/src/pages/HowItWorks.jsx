import React from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
          icon: <FaUser />,
          title: "User Registration",
          description:
            "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
        },
        {
          icon: <FaGavel />,
          title: "Role Selection",
          description:
            'Users must register and log in as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
        },
        {
          icon: <FaEnvelope />,
          title: "Winning Bid Notification",
          description:
            "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, UPI ID.",
        },
        {
          icon: <FaDollarSign />,
          title: "Commission Payment",
          description:
            "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
        },
        {
          icon: <FaFileInvoice />,
          title: "Proof of Payment",
          description:
            "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
        },
        {
          icon: <FaRedo />,
          title: "Reposting Items",
          description:
            "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
        },
      ];
  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
        <h1
          className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-3xl md:text-3xl xl:text-3xl 2xl:text-3xl`}
        >
          Discover How BidMaster Operates
        </h1>
        <div className="flex flex-col gap-4 my-5">
          {steps.map((element, index) => {
            return (
              <div
                key={index}
                className="bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033] border-4 border-dashed border-slate-500 rounded-md p-2 lg:p-5 flex flex-col gap-2 group hover:bg-[#c08ac0af] transition-all duration-300"
              >
                <div className="bg-[#3958d3e5] text-white p-3 text-xl rounded-full w-fit group-hover:bg-[#d6482b] transition-all duration-300">
                  {element.icon}
                </div>
                <h3
                  className={`text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
                >
                  {element.title}
                </h3>
                <p className="text-xl text-stone-700 group-hover:text-[#fff] transition-all duration-300">
                  {element.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
}

export default HowItWorks