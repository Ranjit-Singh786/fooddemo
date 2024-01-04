import { createContext } from "react";

const userContext = createContext({
    user:{
        name:"Ranjit singh",
        email:"ranjit@dev.com"
    }
})
export default userContext;