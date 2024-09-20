import hero from "../assets/hero.png";
function Hero() {
  return (
    <section className="bg-[#00413D] relative">
      <div className="flex ">
        <div className="container pt-[194px] pb-[248px] relative z-10">
          <h1 className="text-white text-[100px] font-bold leading-[110px] absolute max-w-[834px]">
            <span className="block">Hello!</span> I’m Zarror Nibors
          </h1>
          <p className="max-w-[670px] pt-[234px] pb-[50px] text-white/50 text-xl font-normal leading-[30px]">
            I’am freelance{" "}
            <a href="/" className="text-white cursor-text">
              UI/UX Desogner
            </a>{" "}
            based in Indonesia who loves to craft attractive design experiences
            for the web.
          </p>
          <a href="/" className="btn">
            Contact Me
          </a>
        </div>
        <div className="w-[44%] h-full absolute right-0 bottom-0 -z-[1px]">
          <img className="w-full h-full" src={hero} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
