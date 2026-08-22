import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="">
      <div className="px-2 max-w-5xl mx-auto container py-30 md:py-40">

      <div className="   rounded-2xl h-content flex flex-col   gap-6 py-10 px-4 shadow-2xl shadow-gray-500 ">
        <h2 className="text-3xl text-gray-800 font-semibold text-center">
          About{" "}
          <div className="inline text-red-600 font-bold">Shop Now</div>
        </h2>
        <h2 className="text-2xl text-gray-800 font-semibold ">About</h2>
        <div className=" text-gray-700 text-md ">
          Welcome to{" "}
          <div className="inline text-red-600 font-bold">Shop Now</div>,
          your one-stop destination for the latest and greatest in electronics.
          From cutting-edge gadgets to must-have accessories, we’re here to
          power up your tech life with premium products and unbeatable service.
        </div>

        <h2 className="text-2xl text-gray-800 font-semibold">Our Mission</h2>
        <div>
          At <div className="inline text-red-600 font-bold">Shop Now</div>,
          our mission is to make innovative technology accessible to everyone.
          We’re passionate about connecting people with the tools and tech they
          need to thrive in a digital world — all at competitive prices and
          delivered with speed and care.
        </div>

        <h2 className="text-2xl text-gray-800 font-semibold">
          Why Choose{" "}
          <div className="inline text-red-600 font-bold">Shop Now</div>
        </h2>
        <div className="text-left">
          <ul className="list-disc pl-6 text-gray-700 space-y-2 ">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>
        <h2 className="text-2xl text-gray-800 font-semibold">Our Vision </h2>

        <div className="text-gray-700 text-md">
          We envision a future where technology elevates everyday life. At{" "}
          <div className="inline text-red-600 font-bold">Shop Now</div>,
          we’re committed to staying ahead of the curve, offering cutting-edge
          solutions that are both practical and affordable.
        </div>

        <div className="text-center mt-10 ">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Join the Family
          </h3>
          <div className="text-gray-700 mb-4">
            Whether you’re a tech enthusiast, a professional, or just looking
            for something cool and functional —{" "}
            <div className="inline text-red-600 font-bold">Shop Now</div>{" "}
            has something for everyone
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-70 mb-2">
            <Link to="/products">Start Shopping</Link>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
