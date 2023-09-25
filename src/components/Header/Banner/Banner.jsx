import React from 'react';


const Banner = () => {
  return (

    <div className="hero relative -mt-32 h-[80vh]" style={{ backgroundImage: 'url(https://i.postimg.cc/yxx5MZk2/Rectangle-4281.png)' }}>
      {/* <div className="hero-overlay bg-opacity-80"></div> */}
      <div class="col-start-1 row-start-1  bg-[#FFFFFFF2] bg-opacity-70 w-full h-full"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" flex flex-col items-center text-center">
          <h1 className=" my-8 text-4xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>
          <div class="mb-3 ">
            <div class="relative mb-4 flex w-full mx-auto items-stretch flex-wrap ">
              <input
                type="search"
                class="relative m-0 mx-auto max-w-7xl -mr-3 block min-w-0 flex-auto rounded-lg border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-2 text-sm font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-[#FF444A] focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search here...."
                aria-label="Search"
                aria-describedby="button-addon1" />


              <button
                class="relative z-[2] flex items-center rounded-r bg-[#FF444A] px-6 py-2.5 text-sm font-medium  leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 focus:bg-red-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light">
                Search
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Banner;