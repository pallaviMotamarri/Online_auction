import React from 'react'

const About = () => {
    const values = [
        {
          id: 1,
          title: "Integrity",
          description:
            "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
        },
        {
          id: 2,
          title: "Community",
          description:
            "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
        },
        {
          id: 3,
          title: "Customer Focus",
          description:
            "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
        },
      ];
  return (
    <>
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
        <div>
        <h1
          className={`text-[#d6482b] text-4xl font-bold mb-2 min-[480px]:text-4xl md:text-4xl xl:text-4xl 2xl:text-4xl`}
        >
          About Us
        </h1>
        <hr className="mb-4 border-t-[#d6482b]" />
        <p className="text-xl text-stone-600">
            Welcome to BidMaster, the ultimate destination for online auctions
            and bidding excitement. Founded in 2025, we are dedicated to
            providing a dynamic and user-friendly platform for buyers and
            sellers to connect, explore, and transact in a secure and seamless
            environment.
          </p>
        </div>
        <br></br>
        <div>
          <h3
            className={`text-[#e92d2d] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Mission
          </h3>
          <p className="text-xl text-stone-600">
            At BidMaster, our mission is to revolutionize the way people buy and
            sell items online. We strive to create an engaging and trustworthy
            marketplace that empowers individuals and businesses to discover
            unique products, make informed decisions, and enjoy the thrill of
            competitive bidding.
          </p>
        </div>
        <br/>
        <div>
          <h3
            className={`text-[#e92d2d] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Values
          </h3>
          <ul className="list-inside">
            {values.map((element) => {
              return (
                <li className="text-xl text-stone-600 mb-2" key={element.id}>
                  <span className="text-black font-bold">{element.title}</span>:{" "}
                  {element.description}
                </li>
              );
            })}
          </ul>
        </div>
        <br/>
        <div>
          <h3
            className={`text-[#e92d2d] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Story
          </h3>
          <p className="text-xl text-stone-600">
            Founded by VVIT students, BidMaster was born out of a passion for
            connecting people with unique and valuable items. our team is committed 
            to creating a platform that offers an unparalleled auction experience
            for users worldwide.
          </p>
        </div>
        <br/>

        <div>
          <h3
            className={`text-[#e92d2d] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Join Us
          </h3>
          <p className="text-xl text-stone-600">
            Whether you're looking to buy, sell, or simply explore, BidMaster
            invites you to join our growing community of auction enthusiasts.
            Discover new opportunities, uncover hidden gems, and experience the
            thrill of winning your next great find.
          </p>
        </div>
        <br/><br/>
        <div>
          <p className="text-[#d6482b] text-2xl font-bold mb-3">
            Thank you for choosing BidMaster. We look forward to being a part of
            your auction journey!
          </p>
        </div>
    </section>
    </>
  )
}

export default About;