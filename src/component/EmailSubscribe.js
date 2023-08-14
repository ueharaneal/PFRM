import singer from "./images/singer.jpg"
function EmailSubcribe() {
  return (
    <div className="flex items-center justify-center ">
      <div class="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div class="flex flex-col md:flex-row rounded-l-xl">
          <img
            src={singer}
            alt=""
            class="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />

          <div class="p-6 md:p-12">
            <div className=" flex flex-row items-end">
              <h2 class="font-serif text-xl font-medium text-center text-white md:text-left">
                Know where to
              </h2>
              <h2 class="font-serif text-3xl font-medium text-center mx-2 text-[#7B68EE] md:text-left">
                 Perform  
              </h2>
              <h2 class="font-serif text-xl font-medium text-center text-white md:text-left">
                next! 
              </h2>
            </div>
            

            <p class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Get your name out! Perform to your fans!
            </p>
            <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email address"
                class="p-2 px-4 text-center text-white bg-zinc-800 border border-[#7B68EE] placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              />
              <button class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-[#7B68EE] hover:bg-purple-700 hover:text-white duration-500">
                Subcribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailSubcribe;
