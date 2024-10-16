"use client";

import { FC } from "react";
import { data } from "../data/data";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const RightSideBar: FC = () => {
  return (
    <>
      <div className="hidden md:flex flex-col items-center justify-center text-white shadow-primary-800 shadow-sm rounded-tl-3xl p-4 fixed right-0 top-0 w-72 h-full">
        <div className="space-y-8">
          {data.contactLinks.map((link) => (
            <Link
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {link.platform === "Email" ? (
                <Mail className="h-6 w-6 mr-2" />
              ) : link.platform === "LinkedIn" ? (
                <Linkedin className="h-6 w-6 mr-2" />
              ) : link.platform === "GitHub" ? (
                <Github className="h-6 w-6 mr-2" />
              ) : null}
              <span>{link.platform}</span>
            </Link>
          ))}
        </div>
      </div>

    </>
  );
};
