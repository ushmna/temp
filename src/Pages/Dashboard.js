import SideNavbar from "../Components/SideNavbar";
import TopGrid from "../Components/TopGrid";
import BottomGrid from "../Components/BottomGrid";

function Dashboard() {
  return (
    <div className="w-full flex">
      <SideNavbar/>
      <div className="bg-slate-100 w-full pt-8 pb-5 pl-14 pr-14">
      <img src={require("../images/apple.png")}  className="inline-block max-w-full h-auto" alt="logo" /> 
      <p className="text-xl font-bold inline-block pt-2 p-3 absolute">Apple</p>
      <img src={require("../images/ellipse.png")}  className="absolute inline-block pr-10 right-0 w-20 h-auto" alt="logo" />
      <TopGrid/>
      <BottomGrid/>
      </div>
      </div>
    
  );
}

export default Dashboard;
