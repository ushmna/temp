import "./App.css";
import SideNavbar from "./Components/SideNavbar";

function App() {
  return (
    <div className="w-full flex">
      <SideNavbar/>
      <div className="bg-red-200 w-full flex">
        
        <div className="bg-yellow-200 w-full bg-textColor">1</div>
        <div className="bg-green-200 w-full">2</div>
      </div>
 
    </div>
  );
}

export default App;
