import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className = {`w-full h-full min-h-[100vh] bg-white ${darkMode && "dark"}`}>
      <div className = {'w-full h-full min-h-[100vh] bg-white'}>
<div className = 'dark:bg-gradient-to-tr from-[#0235a3] via-[#12031c] to-[#05174e]'>
  hehe
</div>
</div>

  </div>
    
  );
}

export default App;
