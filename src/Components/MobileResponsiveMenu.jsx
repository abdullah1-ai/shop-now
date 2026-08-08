import {
  Show,
  UserButton,
  useUser,
} from "@clerk/react";
import {
  UserCircle2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileResponsiveMenu = ({setOpenMenu}) => {

    const { user } = useUser();

  return (
    <div className="fixed inset-0 w-[70%]  h-full bg-gray-100 z-50">
      <div className="flex flex-col justify-between gap-100">
        <div className="flex flex-col justify-start gap-5 items-start h-full ml-[10%] mt-[10%]">
          <div className="flex items-center gap-3">
            {user ? (
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
            ) : (
              <UserCircle2 size={"2.5rem"} />
            )}
            <div>
              {user ? <p>Hello, {user.fullName}</p> : <p> Hello, Guest</p>}
              <p className="text-slate-700">Premium User</p>
            </div>
          </div>

          <ul className="flex flex-col  gap-7  ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " border-b-2 border-red-500"
                  : "text-black border-b-none"
              }
            >
              {" "}
              <li
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                Home
              </li>
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
              <li
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                Contact Us
              </li>
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
              <li
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                About
              </li>
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
              <li
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                Products
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="self-center ">
          <p>Made with ❤️ by Fahad Abdullah</p>
        </div>
      </div>
    </div>
  );
};

export default MobileResponsiveMenu;