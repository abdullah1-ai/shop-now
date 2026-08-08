import { useState, useEffect } from "react";
import { RiUserLocationFill } from "react-icons/ri";
import {
  ChevronsDown,
  MenuIcon,
  ShoppingCart,
  X,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/react";
import MobileResponsiveMenu from "./MobileResponsiveMenu";
import Footer from "./Footer";

async function ExactLonLattValue() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error.message);
      },
    );
  });
}

const NavBar = () => {
  const [location, setLocation] = useState("Add Location");
  const [openBox, setOpenBox] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();
  async function getLocation({ longitude, latitude }) {
    try {
      let response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
      );
      let data = await response.json();
      setLocation(data.address);
      setOpenBox((prev) => !prev);
    } catch (error) {console.log(error)}
  }

  return (
    <div className="relative">
      <div className="w-full bg-gray-100 ">
        <div className=" flex justify-between items-center max-w-7xl mx-auto p-4 gap-9 text-lg">
          <div className="flex gap-4">
            <NavLink
              to={"/"}
              className=" flex items-center justify-center cursor-pointer"
            >
              <img className="w-[80px]" src={Logo} alt="" />
              <p>Shop Now</p>
            </NavLink>

            <div className="flex justify-center items-center  gap-2 ">
              <RiUserLocationFill color="red" size={"1.5rem"} />
              {location === "Add Location" ? (
                <p>{location}</p>
              ) : (
                <p>
                  {location.city} <br />
                  {location.country}{" "}
                </p>
              )}{" "}
              <ChevronsDown
                color="red"
                onClick={() => {
                  setOpenBox((prev) => !prev);
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-12 justify-around">
            <ul className="hidden items-center justify-center gap-9 md:flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-red-500"
                    : "text-black border-b-none"
                }
              >
                {" "}
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-red-500"
                    : "text-black border-none"
                }
              >
                {" "}
                <li>Contact Us</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold border-red-500"
                    : "text-black border-none"
                }
              >
                {" "}
                <li>About</li>
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-red-500"
                    : "text-black border-none"
                }
              >
                {" "}
                <li>Products</li>
              </NavLink>
            </ul>
            <div className="flex flex-row items-center gap-5 md:gap-8">
              <ShoppingCart
                onClick={() => navigate("cart")}
                className="self-center"
                color="red"
              />

              <MenuIcon
                onClick={() => {
                  setOpenMenu((prev) => !prev);
                }}
                className="md:hidden shrink-0"
              />
            </div>

            <div className="hidden items-center justify-center gap-3 md:flex">
              <Show when="signed-out">
                <SignInButton className="text-white bg-red-500 rounded-lg px-2 py-1" />
                <SignUpButton className="text-white bg-red-500 rounded-lg px-2 py-1" />
              </Show>
              <Show when="signed-in">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: {
                        width: "2.5rem", // Adjust actual avatar/logo size
                        height: "2.5rem",
                      },
                    },
                  }}
                />
              </Show>
            </div>
          </div>
        </div>
      </div>
      {/* Open Box for detect Location */}
      {openBox && (
        <div className=" mx-auto w-[240px] h-[150px] bg-gray-100 rounded-xl absolute top-29 md:left-70 left-45 z-50">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-700 ml-12 mt-6">
                Change Location
              </p>
              <X
                className="mb-8"
                onClick={() => {
                  setOpenBox((prev) => !prev);
                }}
              />
            </div>
            <div className="flex self-center">
              <button
                className="text-white bg-red-500 px-2 py-1 rounded-lg mt-3 mx-auto"
                onClick={async () => {
                  let lonLat = await ExactLonLattValue();
                  await getLocation(lonLat);
                }}
              >
                Detect Location
              </button>
            </div>
          </div>
        </div>
      )}

      {openMenu && <MobileResponsiveMenu setOpenMenu={setOpenMenu} />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default NavBar;
