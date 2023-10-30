import Container from "../components/Container";

// TODO: Fix responsiveness
export default function Experience() {
  return (
    <Container>
      <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
        Experience
      </h1>

      <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
        Below is a summary of the places I studied
      </p>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
          <h6 className="font-medium text-gray-400 text-base uppercase">
            Company
          </h6>

          <p className="font-semibold text-gray-600 text-base">
            Massa Fames{" "}
            <span className="font-normal text-gray-300">/ New York</span>
          </p>

          <p className="font-semibold text-gray-600 text-base">
            Massa Fames{" "}
            <span className="font-normal text-gray-300">/ New York</span>
          </p>

          <p className="font-semibold text-gray-600 text-base">
            Massa Fames{" "}
            <span className="font-normal text-gray-300">/ New York</span>
          </p>

          <p className="font-semibold text-gray-600 text-base">
            Massa Fames{" "}
            <span className="font-normal text-gray-300">/ New York</span>
          </p>

          <p className="font-semibold text-gray-600 text-base">
            Massa Fames{" "}
            <span className="font-normal text-gray-300">/ New York</span>
          </p>
        </div>

        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
          <h6 className="font-medium text-gray-400 text-base uppercase">
            Position
          </h6>

          <p className="font-normal text-gray-400 text-base">
            Junior Front-End Developer
          </p>

          <p className="font-normal text-gray-400 text-base">
            Junior Front-End Developer
          </p>

          <p className="font-normal text-gray-400 text-base">
            Junior Front-End Developer
          </p>

          <p className="font-normal text-gray-400 text-base">
            Junior Front-End Developer
          </p>

          <p className="font-normal text-gray-400 text-base">
            Junior Front-End Developer
          </p>
        </div>

        <div className="space-y-8 md:space-y-16">
          <h6 className="font-medium text-gray-400 text-base uppercase">
            Year
          </h6>

          <p className="font-normal text-gray-400 text-base">2016</p>

          <p className="font-normal text-gray-400 text-base">2016</p>

          <p className="font-normal text-gray-400 text-base">2016</p>

          <p className="font-normal text-gray-400 text-base">2016</p>

          <p className="font-normal text-gray-400 text-base">2016</p>
        </div>
      </div>
    </Container>
  );
}
