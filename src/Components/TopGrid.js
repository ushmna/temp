function TopGrid() {
  return (
    <>
      <div className="grid grid-cols-11 gap-10 pt-7">
        <div className="bg-slate-100 rounded-3xl p-5 shadow-lg lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
          <p className="font-bold text-lg pl-5">Current Balance</p>
          <p className="text-center lg:text-5xl md:text-3xl sm:text-2xl p-7 font-extrabold text-gray-800">
            $2,32,235.50
          </p>

          <div className="grid text-center grid-cols-12 gap-4">
            <div className="col-span-6">
              <img
                src={require("../images/arrow.png")}
                className="inline-block max-w-full h-auto"
                alt="logo"
              />
              <p className="inline-block font-semibold pl-2">$500.50</p>
              <p className="text-gray-800">Today's Income</p>
            </div>
            <div className="col-span-6">
              <img
                src={require("../images/arrow2.png")}
                className="inline-block max-w-full h-auto"
                alt="logo"
              />
              <p className="inline-block font-semibold pl-2">$1150.50</p>
              <p className="text-gray-800 ">Today's Income</p>
            </div>
          </div>
        </div>
        <div className="bg-textColor rounded-3xl p-5 shadow-lg lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
          <p className="font-semibold text-lg text-white pl-5">
            Total Employees
          </p>
          <p className="text-center lg:text-5xl md:text-3xl sm:text-2xl p-7 font-extrabold text-white">
            2530
          </p>

          <div className="grid text-center grid-cols-12 gap-4">
            <div className="col-span-6">
              <img
                src={require("../images/emp.png")}
                className="inline-block max-w-full h-auto"
                alt="logo"
              />
              <p className="inline-block font-normal pl-2 text-white">
                $500.50
              </p>
              <p className=" text-white">Total Departments</p>
            </div>
            <div className="col-span-6">
              <img
                src={require("../images/emp2.png")}
                className="inline-block max-w-full h-auto"
                alt="logo"
              />
              <p className="inline-block font-normal pl-2 text-white">
                $1150.50
              </p>
              <p className="text-white">Employees Groupes</p>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-3 md:col-span-12 sm:col-span-12 col-span-12 text-center bg-slate-50 shadow-md p-3 rounded-3xl">
          <img
            src={require("../images/stream.png")}
            className="inline-block w-24 h-auto"
            alt=""
          />
          <a
            className="bg-violet-400 text-white w-full text-center p-2 rounded-xl block mt-3 mb-2"
            href="#"
          >
            <img
              src={require("../images/plus.png")}
              className="inline-block w-6 h-auto pr-3"
            />{" "}
            Create Stream
          </a>

          <a
            className="bg-violet-400 text-white w-full text-center p-2 rounded-xl block"
            href="#"
          >
            <img
              src={require("../images/arrow3.png")}
              className="inline-block w-6 h-auto pr-3"
            />{" "}
            Instant Transfer
          </a>
        </div>
      </div>
    </>
  );
}

export default TopGrid;
