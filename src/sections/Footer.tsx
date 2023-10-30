import { ReactNode } from "react";
import {
  FaEnvelopeOpenText,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

interface Socials {
  icon: ReactNode;
  link: string;
}

export default function Footer() {
  const socialLinks: Socials[] = [
    { icon: <FaLinkedinIn />, link: "" },
    { icon: <FaGithub />, link: "" },
    { icon: <FaEnvelopeOpenText />, link: "" },
    { icon: <FaWhatsapp />, link: "" },
  ];

  return (
    <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">
            Socials
          </h1>

          <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
            Please feel free to connect or contact me for any inquiries.
          </p>

          <div className="flex items-center justify-center space-x-8">
            {socialLinks.map((s: Socials, i: number) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noreferer"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500">
                  {s.icon}
                </i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
