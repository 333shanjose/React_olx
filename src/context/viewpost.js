import { createContext,useState } from "react";
export const postcontext=createContext(null)
export default function Postcontext({children}){
    const [Post,setPost]=useState('')
     return(
         <postcontext.Provider value={{Post,setPost}}>
            {children}
         </postcontext.Provider>
     )
 }