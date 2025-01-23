import Card from "@/custom-components/Card";
import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";

const Auctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
          <section className="my-8 ">
            <h1
              className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl`}
            >
              Auctions
            </h1>
            <div className="flex flex-wrap gap-6">
              {allAuctions.map((element) => (
                <Card
                  title={element.title}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  imgSrc={element.image?.url}
                  startingBid={element.startingBid}
                  id={element._id}
                  key={element._id}
                />
              ))}
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default Auctions;
