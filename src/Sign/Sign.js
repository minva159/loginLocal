import React, { useEffect, useRef, useState } from "react";
import Home from './Home';
import "bootstrap/dist/css/bootstrap.css";
import "./Sign.css";

function SignWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")

   useEffect (() => {
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick = () => {
       if(name.current.value && email.current.value && password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Congratulations on joining!!")
        window.location.reload()
      }
   }

   const handleSignIn = () => {
    if(email.current.value === localEmail&&password.current.value === localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div class="gradient-custom">
            {showHome?<Home/>:
            (show?
                <div className="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                       <div class="card-body p-5 text-center">
                       
                       <h1 class="font-weight-bold">Hello {localName}</h1>

                        <div className="form-outline form-white mb-4">
                            <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Email" ref={email} />
                        </div>
                        <div className="form-outline form-white mb-4">
                            <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Password" ref={password} />
                        </div>
                        <button class="btn btn-outline-light btn-lg px-5" onClick={handleSignIn}>Sign In</button>
                        </div>
                        </div>
                    </div>
                    </div>
                :
                <div className="container py-5 h-100">
                   <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                       <div class="card-body p-5 text-center">
                        <div>
                        <h1 class="font-weight-bold text-white">Login </h1>
                        <p class="font-weight-bold text-white">Please enter you and your Password</p>
                        </div>
                        <div className="form-outline form-white mb-4">
                            <input type="text" id="typeTextX" class="form-control form-control-lg" placeholder="Name" ref={name} />
                        </div>
                        <div className="form-outline form-white mb-4">
                            <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Email" ref={email} />
                        </div>
                        <div className="form-outline form-white mb-4">
                            <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Password" ref={password} />
                        </div>
                        <button class="btn btn-outline-light btn-lg px-5"  type="submit" onClick={handleClick}>Sign Up</button>
                        </div>
                    </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default SignWithLocalStorage;