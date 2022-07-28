import './App.css';

function App() {
  return (
    <>
<div class="flex flex-row h-screen">
  <div class="basis-1/7 border-r-2">  
  <div className='bg-white p-10'>
  <img src={require("./images/vector.svg")}  class="max-w-full h-auto" alt="logo" />
  <div className='pt-40'>
  <ul >
      <li ><img src={require('./images/vector.svg')} class="max-w-full h-auto" alt="Home" /></li>
      <li className='pt-5'><img src={require('./images/vector.svg')} class="max-w-full h-auto" alt="Home" /></li>
      <li className='pt-5'><img src={require('./images/vector.svg')} class="max-w-full h-auto" alt="Home" /></li>
      <li className='pt-5'><img src={require('./images/vector.svg')} class="max-w-full h-auto" alt="Home" /></li>
      <li className='pt-5'><img src={require('./images/vector.svg')} class="max-w-full h-auto" alt="Home" /></li>
    </ul>
  </div>
<div className='absolute bottom-0 pb-10 pr-10'>
<img src={require('./images/vector.svg')} class="max-w-full h-auto" alt="settings" />
</div>
 
  
    </div>
    </div>
  <div class="basis-1/2 bg-slate-100">02</div>
  <div class="basis-1/2 bg-slate-100">03</div>
</div>

    

    
    </>
    
  );
}

export default App;
