import NavBar from "../component/NavBar";
import purpleSinger from "../component/images/purpleSinger.jpeg";

function About() {
  return (
    <div>
      <NavBar className="z-10" />
      {/* About us container */}
      <div className="flex flex-col items-center h-screen w-screen text-white">
        <h1 className="text-6xl font-bold mb-10 mt-5">About Us</h1>
        <div className="justify-center">
          <h1 className="w-full text-center text-4xl pb-7 text-[#7B68EE] font-bold ">
            Who we are?
          </h1>
          {/* Image container */}
          <div className="flex flex-col-reverse lg:flex-row border border-slate-700 rounded-2xl mx-5 ">
            <div className="flex flex-col min-w-84 lg:justify-center">
              <p className=" text-center pt-10 lg:pt-2 text-2xl font-bold text-[#7B68EE]">
                Our Origin Story
              </p>
              <p className=" text-center m-2 p-5 indent-8 lg:5 md:text-left lg:px-20 xl:text-lg">
                Welcome to PFRM, a visionary company deeply rooted in the
                vibrant city of Newport Beach, California. We are a team of
                dedicated engineers and creatives committed to reshaping how
                people engage with music in public settings. Our journey began
                amidst the coastal beauty of Newport Beach, where we envisioned
                a novel way to infuse music seamlessly into daily life.
              </p>
            </div>
            <div className="flex mx-10 lg:w-full items-center justify-center ">
              <img
                className="z-0 border border-purple-200 border-4 border-rounded-2xl lg:object-fit object-fit lg:w-70 rounded-2xl h-75 lg:90 transform hover:scale-105"
                src={purpleSinger}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center h-screen w-screen text-white md:flex-row">
          <div className="flex flex-col min-w-84 lg:justify-center">
            <p className=" text-center pt-10 lg:pt-2 text-2xl font-bold text-[#7B68EE]">
              Our Mission
            </p>
            <p className=" text-center m-2 p-5 indent-8 lg:5 md:text-left lg:px-20 xl:text-lg">
              Our mission is to harmonize technology, music, and human
              connections, creating immersive experiences that bring people
              together. We are driven by the belief that music is a universal
              language that has the power to bridge gaps, ignite emotions, and
              foster a sense of belonging. Through our innovative speaker
              solutions, we aim to enrich public spaces with the gift of music,
              creating moments of joy, inspiration, and shared resonance.
            </p>
          </div>
          <div className="flex flex-col min-w-84 lg:justify-center">
            <p className=" text-center pt-10 lg:pt-2 text-2xl font-bold text-[#7B68EE]">
              What We Do
            </p>
            <p className=" text-center m-2 p-5 indent-8 lg:5 md:text-left lg:px-20 xl:text-lg">
              Here, ur expertise lies in crafting innovative speaker
              solutions that redefine how music is experienced. Our ingenious
              speaker boxes are strategically placed in high-traffic locales,
              such as bustling beach boardwalks, to bring the magic of music to
              the heart of everyday life. Our speakers are not just conduits of
              sound – they're gateways to a world of sonic wonder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
