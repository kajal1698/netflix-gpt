import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Browser from "./Browser";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "../utilis/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilis/userSlice";
const Body = ()=>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
            }
          });
    },[])
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element:<Browser></Browser>
        }
    ])
    return(
<div>
        <RouterProvider router={appRouter}></RouterProvider>
</div>
    )
}
export default Body;