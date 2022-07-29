 

function SideNavbar() {
  return (
    <>
      <div class="flex flex-row h-screen">
        <div>
          <div className="bg-white p-10">
             <img src={require("../images/Vector.png")}  class="max-w-full h-auto" alt="logo" /> 
            <div className="pt-52">
              <ul>
                <li>
                  <img
                    src={require("../images/vector2.png")}
                    className="w-full h-auto bg-textColor p-2 rounded-md	shadow-lg"
                    alt="Home"
                  />
                </li>
                <li className="pt-5">
                  <img
                    src={require("../images/vector3.png")}
                    className="max-w-full h-auto"
                    alt="Home"
                  />
                </li>
                <li className="pt-5">
                  <img
                    src={require("../images/vector4.png")}
                    className="max-w-full h-auto"
                    alt="Home"
                  />
                </li>
                <li className="pt-5">
                  <img
                    src={require("../images/vector5.png")}
                    className="max-w-full h-auto"
                    alt="Home"
                  />
                </li>
                <li className="pt-5">
                  <img
                    src={require("../images/vector6.png")}
                    className="max-w-full h-auto"
                    alt="Home"
                  />
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 pb-10 pr-10">
              <img
                src={require("../images/vector7.png")}
                className="max-w-full h-auto"
                alt="settings"
              />
            </div>
          </div>
        </div>
         
      </div>
    </>
  );
}

export default SideNavbar;
