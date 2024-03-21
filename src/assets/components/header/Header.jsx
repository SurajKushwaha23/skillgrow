import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, MoveRight, X } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Pages",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Reward Point",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="relative w-full border-b bg-blue-primary py-3 shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 ">
          <div className="inline-flex items-center space-x-2">
            <span className="font-bold text-white text-lg">SkillGro</span>
          </div>
          <div className="hidden grow px-12 lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white font-semibold hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-3 gap-1 py-2 flex items-center justify-between">
              <NavLink
                to="login"
                className="text-white text-sm text-black font-semibold cursor-pointer"
              >
                Log in
              </NavLink>
              <MoveRight className="text-white" />
            </div>
            <div className="px-3 gap-1 py-2 flex items-center justify-between">
              <NavLink
                to="register"
                className="text-white text-sm text-black font-semibold cursor-pointer"
              >
                Register
              </NavLink>
              <MoveRight className="text-white" />
            </div>
            <div class="user-profile hidden">
              <div class="flex flex items-center justify-between">
                <img
                  class="relative mx-2 inline-block h-6 w-6 rounded-full ring-1 ring-white"
                  src="/user-icon.png"
                  alt="user profile"
                />
                <span class="text-sm font-semibold text-gray-800 hover:text-gray-900">
                  Suraj Kushwaha
                </span>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span className="font-bold">Reward Point</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Button text
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
