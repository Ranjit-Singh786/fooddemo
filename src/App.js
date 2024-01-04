import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
  import "../style.css";
import userContext from "./components/utils/userContext";




  function App() {
    return (     
      <>                                                                                                                                                                                                                                                                                                                                                                                                                          
      <div>
        <Header />                                                                                                                                                                                                         
        <userContext.Provider value={{user:{
           name:"john",
           email:"john@dev.com"
        }}}>                                                                                                                                                                                                                                                                                                                                                           
        <Outlet />
       <Footer />    
       </userContext.Provider>                                                                           
    </div>   
    </>                            
  );                                                           
}

export default App;                                                                                     
