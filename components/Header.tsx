"use client";

import { useState, FC } from "react";
import { Menu, X } from "lucide-react";
import {
  Navbar,
  Button,
  Link as NextUILink,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { data } from "../data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Desktop Mode */}
      <div className="hidden md:flex flex-col w-72 bg-background h-screen shadow-md shadow-content1 rounded-tr-lg text-white fixed p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{data.personalInfo.name}</h1>
          <p className="text-gray-400">{data.personalInfo.role}</p>
        </div>

        {/* Centering the nav links */}
        <div className="flex-grow flex flex-col justify-center">
          <nav className="space-y-4">
            {data.NavLink.map((item) => (
              <NextUILink
                key={item.id}
                as={Link}
                href={item.path}
                className={`flex items-center p-2 rounded-lg hover:bg-gray-200 hover:text-background transition-colors ${
                  pathname === item.path
                    ? "bg-gray-200 text-background"
                    : "text-foreground"
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </NextUILink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Mode */}
      <Navbar isBordered className="md:hidden">
        <NavbarBrand>
          <h1 className="text-xl font-bold text-white">
            {data.personalInfo.name}
          </h1>
        </NavbarBrand>
        <NavbarContent>
          <Button
            isIconOnly
            onPress={toggleMenu}
            className="text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </NavbarContent>
      </Navbar>

      {isOpen && (
        <div className="md:hidden bg-background p-4">
          <ul className="space-y-4">
            {data.NavLink.map((item) => (
              <li key={item.id}>
                <NextUILink
                  as={Link}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`"flex items-center p-2  rounded-lg hover:bg-gray-200 hover:text-background transition-colors ${
                    pathname === item.path
                      ? "bg-gray-200 text-background"
                      : "text-foreground"
                  }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>{" "}
                </NextUILink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
