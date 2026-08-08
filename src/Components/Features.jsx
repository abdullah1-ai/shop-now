import { ClockCheck, LockKeyhole, RotateCcw, Truck } from "lucide-react";

const Features = () => {
  return (
    <div className=" my-9 text-gray-700">
      <div className="md:mx-auto ml-15 grid grid-cols-2 gap-4  md:flex justify-around font-semibold py-6 ">
        <div className="flex items-center gap-3">
          <Truck size={"2rem"} />
          <div className="flex flex-col ">
            <p>Fast Shipping</p>
            <p> On orders over $100</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LockKeyhole size={"2rem"} />
          <div className="flex flex-col">
            <p>Protected payments</p>
            <p>Secure Payment 100% </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <RotateCcw size={"2rem"} />
          <div className="flex flex-col ">
            <p>Easy Returns</p>
            <p>30-day return policy</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ClockCheck size={"2rem"} />
          <div className="flex flex-col ">
            <p>24/7 Support</p>
            <p>Dedicated customer service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
