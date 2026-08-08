import { useEffect } from "react";
const Contact = () => {

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <>
      <div className="h-screen bg-gradient-to-r bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div className=" flex justify-center items-center h-full max-w-6xl  mx-auto">

          <div className="bg-white/10 backdrop-blur-md rounded-xl w-full border-white/20 border-2 px-10">
            <h2 className="text-center p-8 text-3xl font-semibold text-white">
              Get in touch with us
            </h2>
            <div className="grid grid[1fr_1fr] md:grid-cols-2 place-content-around">
              {/* 1st details section */}

              <div className="w-full">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Contact Info
                  </h2>
                  <p className="text-gray-300 line-clamp-2">
                    Have a question or need support? We're here to help you
                    <br /> with your electronics journey.
                  </p>
                </div>
                <div className="flex flex-col gap-1 my-3">
                  <p className="text-white">
                    📍 <span className="font-bold ">Address:</span>
                    123 Etc, Punjab, Pakistan
                  </p>
                  <p className="text-white">
                    📧 <span className="font-bold ">Email:</span>
                    logo@gmail.com
                  </p>
                  <p className="text-white">
                    📞 <span className="font-bold ">Phone:</span>
                    +92 1234567890
                  </p>
                </div>
              </div>
              {/* 2nd contact form section */}
   
              <div className=" text-white flex flex-col gap-4 mb-5">
                <div >
                  <p>Your Name:</p>
                  <input className=" text-white bg-white/10 backdrop-blur-md rounded-md p-2 w-full" type="text" />
                </div>
                <div>
                  <p>Email Address:</p>
                  <input  className=" text-white bg-white/10 backdrop-blur-md rounded-md p-2 w-full"  type="text" />
                </div>
                <div>
                  <p>Your Message:</p>
                  <input  className=" text-white bg-white/10 backdrop-blur-md rounded-md p-2 w-full"  type="text" />
                </div>

                <button className=" text-white px-2 py-1 text-lg bg-gradient-to-r from-red-500 to-purple-500 rounded-lg font-medium">Send Message 🚀</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
