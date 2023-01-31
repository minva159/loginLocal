import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Sign.css";

function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div class = "gradient-custom">
        <div className = "container py-5 h-100">
        <div class = "row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                       <div class="card-body p-5 text-center">
            <h1 class="font-weight-bold text-white">Hello </h1>
            <p class="font-weight-bold text-white">Wellcome {localStorage.getItem("name")}</p>
            <button class="btn btn-outline-light btn-lg px-5"  type="submit" onClick={logout}>Logout</button>
            <button class="btn btn-outline-light btn-lg px-5"  type="submit" onClick={deleteAccount}>Delete</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
}
export default Home;