function BottomGrid() {
    return (
      <>

<div className="grid grid-cols-12 gap-10 pt-10 ">

<div className=" bg-white rounded-3xl p-5 shadow-lg lg:col-span-5 md:col-span-12 sm:col-span-12 col-span-12 ">
  <p className="font-bold text-xl inline-block">Activites</p>
  <a href="#" className="p-2 pl-5 pr-5 border rounded-lg text-sm text-neutral-500 float-right border-zinc-400">
   This Weak  <img src={require("../images/arrow4.png")}  className="inline-block w-4 h-auto pl-2" /></a>
  <div className="grid grid-cols-12 gap-14 pt-7">
    <div className="col-span-1">
      <ul>
        <li className="text-neutral-400 text-sm pb-7">50K+</li>
        <li className="text-neutral-400 text-sm pb-7">40K+</li>
        <li className="text-neutral-400 text-sm pb-7">30K+</li>
        <li className="text-neutral-400 text-sm pb-7">20K+</li>
        <li className="text-neutral-400 text-sm pb-7">10K+</li>
      </ul>
    </div>
    <div className="col-span-8">
      <div class="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <p className="text-neutral-300 text-lg text-center pb-5">- - -  - - - -</p>
        </div>
        <div className="col-span-6 shadow-md p-2">
          <p className="font-bold text-xs">Total Spending</p>
          <span className="font-bold text-lg pt-0 inline-block">$2,80000.00</span>
          <span className="font-bold text-xs float-right">10%+</span>
        </div>
        <div className="col-span-3">
        <p className="text-neutral-300 text-lg text-center pb-5">- - -  - - - -</p>
        </div>
      </div>
    <img src={require("../images/graph.png")}  className="inline-block max-w-full h-auto" />
    <ul className="pt-3">
        <li className="text-neutral-400 text-sm pl-7 inline-block">Mon</li>
        <li className="text-neutral-400 text-sm pl-7 inline-block">Tue</li>
        <li className="text-neutral-400 text-sm pl-7 inline-block">Wed</li>
        <li className="text-neutral-400 text-sm pl-7 inline-block">Thu</li>
        <li className="text-neutral-400 text-sm pl-7 inline-block">Fri</li>
        <li className="text-neutral-400 text-sm pl-7 inline-block">Sat</li>
        <li className="text-neutral-400 text-sm pl-7 inline-block">Sun</li>
      </ul>
    </div>
  </div>
  
</div>


<div className="bg-white rounded-3xl p-5 shadow-lg lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
<p className="font-bold text-xl pb-3 inline-block">Employees</p>
   <img src={require("../images/plus2.png")}  className="w-7 h-auto p-2 border rounded-md text-sm text-neutral-500 float-right border-zinc-400 inline-block" />
<ul>
  <li className="pt-4">
    <img src={require("../images/e1.png")}  className="inline-block w-10 -mt-5 h-auto"/>
    <div className="inline-block pl-3">
    <p className="font-bold">John Smith</p>
    <p className="text-neutral-500 text-sm">Designer</p>
    </div>
    <p className="text-xs float-right font-semibold text-textColor bg-zinc-200 p-2 pl-5 pr-5 rounded">Designer</p>
  </li>
  <li className="pt-4">
    <img src={require("../images/e2.png")}  className="inline-block w-10 -mt-5 h-auto"/>
    <div className="inline-block pl-3">
    <p className="font-bold">John Smith</p>
    <p className="text-neutral-500 text-sm">HR</p>
    </div>
    <p className="text-xs float-right font-semibold text-textColor bg-zinc-200 p-2 pl-5 pr-5 rounded">Designer</p>
  </li>
  <li className="pt-4">
    <img src={require("../images/e3.png")}  className="inline-block w-10 -mt-5 h-auto"/>
    <div className="inline-block pl-3">
    <p className="font-bold">John Smith</p>
    <p className="text-neutral-500 text-sm">Designer</p>
    </div>
    <p className="text-xs float-right font-semibold text-textColor bg-zinc-200 p-2 pl-5 pr-5 rounded">Designer</p>
  </li>
  <li className="pt-4">
    <img src={require("../images/e4.png")}  className="inline-block w-10 -mt-5 h-auto pt-0"/>
    <div className="inline-block pl-3">
    <p className="font-bold">John Smith</p>
    <p className="text-neutral-500 text-sm">HR</p>
    </div>
    <p className="text-xs float-right font-semibold text-textColor bg-zinc-200 p-2 pl-5 pr-5 rounded">Designer</p>
  </li>
</ul>
<p className="font-semibold text-sm float-right underline text-gray-700">View All</p>
  
</div>
<div className="bg-white rounded-3xl p-5 shadow-lg lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
<p className="font-bold text-xl pb-3 inline-block">Departments</p>
   <img src={require("../images/plus2.png")}  className="w-7 h-auto p-2 border rounded-md text-sm text-neutral-500 float-right border-zinc-400 inline-block" />
<ul>
  <li className="pt-3">
    <img src={require("../images/designer.png")}  className="bg-lime-500 w-9 inline-block -mt-5 p-2 rounded-lg h-auto"/>
    <div className="inline-block pl-3">
    <p className="font-bold">Designer</p>
    <p className="text-neutral-500 text-sm">Salary</p>
    </div>
  
  </li>
  <li className="pt-3">
    <img src={require("../images/marketing.png")}  className="bg-amber-500 w-10 p-2 -mt-5 rounded-lg inline-block  h-auto"/>
    <div className="inline-block pl-3">
    <p className="font-bold">Marketing</p>
    <p className="text-neutral-500 text-sm">HR</p>
    </div>
  </li>
  <li className="pt-3">
    <img src={require("../images/hr.png")}  className="bg-textColor w-10 p-2 -mt-5 rounded-lg inline-block  h-auto"/>
    <div className="inline-block pl-3">
    <p className="font-bold">HR</p>
    <p className="text-neutral-500 text-sm">Salary</p>
    </div>
  </li>
  <li className="pt-3">
    <img src={require("../images/sales.png")}  className="bg-pink-500 w-10 p-2 -mt-5 rounded-lg inline-block  h-auto"/>
    <div className="inline-block pl-3">
    <p className="font-bold">Sales</p>
    <p className="text-neutral-500 text-sm">HR</p>
    </div>
  </li>
</ul>
<p className="font-semibold text-sm float-right underline text-gray-700">View All</p>
  
</div>

  </div>

</>
);
}

export default BottomGrid;