 

function SideNavbar() {
  return (
    <>
      <div class="flex flex-row h-screen">
        <div class="basis-1/7 border-r-2">
          <div className="bg-white p-10">
            {/* <img src={require("./images/Vector.png")}  class="max-w-full h-auto" alt="logo" /> */}
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.806462 0.161644C0.320016 0.161644 0.0300017 0.512253 0.159118 0.946458L6.41407 21.9851C6.54318 22.4187 7.0411 22.7701 7.52954 22.7701H9.13896C9.62607 22.7701 10.1068 22.415 10.2121 21.9788L15.2915 0.952747C15.3972 0.515702 15.0878 0.161441 14.6007 0.161441H13.5029C13.0157 0.161441 12.5452 0.517731 12.4518 0.956805L9.3557 15.5191C9.26234 15.9586 8.78936 16.3146 8.30291 16.3146H8.58807C8.09985 16.3146 7.6037 15.9622 7.4801 15.53L3.31175 0.946052C3.18815 0.512659 2.69354 0.161441 2.20687 0.161441H0.806242L0.806462 0.161644ZM12.4591 22.7642C11.9709 22.7642 11.6663 22.4126 11.7802 21.9735L17.2516 0.870776C17.3649 0.434137 17.8517 0.0800781 18.34 0.0800781H19.5715C20.0595 0.0800781 20.3643 0.431702 20.2513 0.870776L14.8073 21.9735C14.6947 22.4103 14.2074 22.7642 13.7192 22.7642H12.4591ZM18.8275 23.0503C19.3153 23.0503 19.8055 22.6958 19.9209 22.2634L25.6055 0.975675C25.7216 0.540862 25.4215 0.188629 24.9313 0.188629H23.432C22.9435 0.188629 22.4529 0.543094 22.3375 0.975675L16.6568 22.2632C16.5409 22.6979 16.8407 23.0501 17.33 23.0501H18.8275V23.0503Z"
                fill="#1A1B1F"
              />
            </svg>
            <div className="pt-40">
              <ul>
                <li>
                  <img
                    src={require("../images/Vector.png")}
                    class="max-w-full h-auto"
                    alt="Home"
                  />
                </li>
                <li className="pt-5">
                  <img
                    src={require("../images/Vector.png")}
                    class="max-w-full h-auto"
                    alt="Home"
                  />
                </li>
                <li className="pt-5">
                  <img
                    src={require("../images/Vector.png")}
                    class="max-w-full h-auto"
                    alt="Home"
                  />
                </li>
                <li className="pt-5">
                  <img
                    src={require("../images/Vector.png")}
                    class="max-w-full h-auto"
                    alt="Home"
                  />
                </li>
                <li className="pt-5">
                  <img
                    src={require("../images/Vector.png")}
                    class="max-w-full h-auto"
                    alt="Home"
                  />
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 pb-10 pr-10">
              <img
                src={require("../images/Vector.png")}
                class="max-w-full h-auto"
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
