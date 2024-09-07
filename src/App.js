import "./App.css";
import Header from "./Header";

import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
 
  
  return (
    <BrowserRouter>
     <Header />
   
    <Routes>

    </Routes>
    <div className="App">
     
    
     <div className="app__body">
       <Sidebar />
       <Feed />
       <Widgets />
     </div>
 
</div>
    </BrowserRouter>
    
  );
}

export default App;
