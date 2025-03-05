import { useRef, useState } from "react";
import Header from "./Header";
import { validateEmailPassword } from "../utilis/validate";
import { auth } from "../utilis/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState('');
    const navigate = useNavigate();
    const toggleForm = ()=>{
        setIsSignInForm(!isSignInForm);
        setErrorMessage('');
    }
    const email = useRef(null);
    const password = useRef(null);
    const onSignInButtonClick = ()=>{
        let message = validateEmailPassword(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message){
            return;
        }
        if(!isSignInForm){
            //sign up form
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log("user:::::",user);
                // ...
                navigate("/browse")
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                // ..
              });
        }
        else{
            //sign in form
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("user:::::",user);
                // ...
                navigate("/browse")
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
              });
        }
    }
return (
    <div >
        <Header></Header>
        <div className="absolute">
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="backgroundimg"></img>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>
            <h1 className="text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {isSignInForm === false && (<input type="text" placeholder="Enter Full Name" className="my-2 p-2 w-full bg-slate-800"></input>)}
            <input ref={email}type="text" placeholder="Enter Email Address" className="my-2 p-2 w-full bg-slate-800"></input>
            <input ref={password} type="password" placeholder="Enter Password" className="my-2 p-2 w-full  bg-slate-800"></input>
            <p className="text-red-500 font-bold text-lg py-2px">{errorMessage}</p>
            <button type="button" className="my-3 p-3 bg-red-700 w-full" onClick={onSignInButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <input type="checkbox"></input>
            <span className="m-2 text-gray-500">Remeber Me</span>
            <div className="m-2 p-2">
                <span className="text-gray-500 cursor-pointer hover:text-white" onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign up Now" : "Already registered?Sign in Now."}</span>
            </div>
        </form>
    </div>
)
}
export default Login;