function LoginForm() {
  return (
    <>
      <div className="bg-slate-100 grid h-screen place-items-center  ">
        <div className="bg-white p-7 pt-14 pb-14 rounded-3x1 shadow-lg border mx-10 min-w-600">
          <h1 className="text-7xl text-center font-extrabold text-black">
            Logo
          </h1>
          <p className="text-xl mt-10 font-normal">Amount (USDC/mon)</p>
          <input
            placeholder="25"
            className="placeholder-black text-4xl font-extrabold border p-3 p1-7 pr-7 rounded-lg border-color: rgb(203 213 225); w-full mt-5"
          ></input>
          <button className="border px-10 mt-5 bg-violet-400 text-white text-lg p-3 w-full rounded-lg">
            {" "}
            Make a Payment
          </button>
          <p className="text-center text-violet-400 mt-5 text-lg">Back</p>
        </div>
      </div>
    </>
  );
}
export default LoginForm;
