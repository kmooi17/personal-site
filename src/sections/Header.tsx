import logo from "../assets/image/navbar-logo.png";
import home from "../assets/image/home-img.png";

import Container from "../components/Container";

export default function Header() {
  return (
    <Container>
      <nav className="flex items-center justify-between mb-40">
        <img src={logo} alt="Logo" />

        <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
          Get my CV
        </button>
      </nav>

      <div className="text-center">
        <div className="flex justify-center mb-16">
          <img src={home} alt="Image" />
        </div>

        <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
          Kane Mooi
        </h6>

        <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
          Senior Developer
        </h1>

        <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
          I have a passion for software. I enjoy creating tools that make life
          easier for people.
        </p>

        <a
          href="#"
          className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
        >
          Hire me
        </a>
      </div>
    </Container>
  );
}
