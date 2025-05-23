import React from "react";
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";

const SocialLinks = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <a href="#">
        <FaLinkedin className="size-4 hover:text-light-green transition duration-150 ease-out mx-2" />
      </a>
      <a href="#">
        <FaTwitterSquare className="size-4 hover:text-light-green transition duration-150 ease-out mx-2" />
      </a>
      <a href="#">
        <FaGithub className="size-4 hover:text-light-green transition duration-150 ease-out mx-2" />
      </a>
      <a href="#">
        <FaFacebookSquare className="size-4 hover:text-light-green transition duration-150 ease-out mx-2" />
      </a>
      <a href="#">
        <MdOutgoingMail className="size-5 hover:text-light-green transition duration-150 ease-out mx-2" />
      </a>
    </div>
  );
};

export default SocialLinks;
