import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Menu, Search, TicketPlus, XIcon } from "lucide-react";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";


const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      {/* Logo Image */}
      <Link className="max-md:flex-1" to={"/"}>
        <img src={assets.logo} className="w-36 h-auto" alt="" />
      </Link>

      {/* Menu Items */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/200 overflow-hidden transition-[width] duration-300
      ${isOpen ? "max-md:w-full" : "max-md:w-0"}`}
      >
        <XIcon
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
        />

        <Link
          onClick={() => {
            scrollTo(0, 0); setIsOpen(false);
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0); setIsOpen(false);
          }}
          to="/movies"
        >
          Movies
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0); setIsOpen(false);
          }}
          to="/"
        >
          Theaters
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0); setIsOpen(false);
          }}
          to="/"
        >
          Releases
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0); setIsOpen(false);
          }}
          to="/favourite"
        >
          Favourites
        </Link>
      </div>

      {/*Log In button and Search Icon  */}
      <div className="flex items-center gap-8">
        <Search className="max-md:hidden w-6 h-6 cursor-pointer" />
        {!user ? (
         <button onClick={openSignIn} className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
            LogIn
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action onClick={() => navigate("/my-bookings")} label="My Bookings" labelIcon={<TicketPlus width={15} />} />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      <Menu
        onClick={() => setIsOpen(!isOpen)}
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
