import React from "react";

const menuItems = [
  {
    name: "Privacy Policy",
    href: "#",
  },
  {
    name: "Terms of Service",
    href: "#",
  },
  {
    name: "Return Policy",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];

function Footer() {
  return (
    <>
      <footer className="relative w-full border-b bg-gray-800 py-5">
        <div className="mx-auto flex max-w-7xl flex items-center justify-between px-4 ">
          <p className="mb-0 text-md font-semibold text-white cursor-pointer">
            Copyright © 2024 All rights reserved.
          </p>
          <div className="footer-link">
            <div className="hidden grow px-12 lg:block">
              <ul className="inline-flex space-x-8">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-md font-semibold text-white cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
