import { useEffect, useState } from "react";

const useOnline=()=>{
        const [isonlineStatus,setIsonlineStatus] = useState(true);
        useEffect(()=>{
            function onlineStatus(){
                    setIsonlineStatus(true);
            }
           function offlineStatus(){
                setIsonlineStatus(false);
            
           }
           window.addEventListener("online", onlineStatus);
           window.addEventListener("offline", offlineStatus);
          return ()=>{
                window.removeEventListener("online",onlineStatus)
                window.removeEventListener("offline",offlineStatus)
          } 
        },[])
        return isonlineStatus;
}

export default useOnline;