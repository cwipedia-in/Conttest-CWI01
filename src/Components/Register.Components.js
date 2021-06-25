import logo from "../Files/cplogo.png";
import { useState } from "react";
import firebase from "../firebase/base";
 const Register =()=>{

    const db = firebase.firestore()
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [clg,setclg]=useState("");
    const [Contact,setCon]=useState("");
    const [branch,setBranch]=useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const handleRegi=(e)=>{
        e.preventDefault();
    
        db.collection("Regi")
          .add({
            name: name,
            email: email,
            contact: Contact,
            Collage_Name: clg,
            Branch: branch,

          })
          .then(() => {
            setMessage("Registration Successful | shortly You will receive an email");
            setTimeout(function(){ 
                setMessage('');
             }, 5000);
          })
          .catch((error) => {
              setError("Try again");
              setTimeout(function(){ 
                setError('');
             }, 5000);
          });
    
        setname("");
        setemail("");
        setBranch("");
        setCon("");
        setclg("");

        

      };

     return(
         <div className="Regi">
         <p className="display-6">Organized by  <img src={logo} className="img-fluid" alt="contest by cwipedia"/> </p>
         <a href="/" type="submit" className="btn rc-col shadow rounded">Home</a >

         <div className="card  cc shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="card-body ">
         <form onSubmit={handleRegi}>
            {message && <div className="alert alert-success" role="alert">
                {message}
            </div>}
            {error && <div className="alert alert-danger" role="alert">
                {error}
            </div>}
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={name} onChange={(e)=> setname(e.target.value)}  required/>
                            <label htmlFor="floatingInput">Student Name</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control form-control1" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=> setemail(e.target.value)} required />
                            <label htmlFor="floatingInput">Email address</label>
                            </div>
                        </div>

                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={Contact} onChange={(e)=> setCon(e.target.value)}  />
                            <label htmlFor="floatingInput">Contact No (optional) </label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={branch} onChange={(e)=> setBranch(e.target.value)}  required/>
                            <label htmlFor="floatingInput">Branch</label>
                            </div>
                        </div>

                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={clg} onChange={(e)=> setclg(e.target.value)}  required/>
                            <label htmlFor="floatingInput">College Name</label>
                            </div>
                        </div>
                       
                        <button type="submit" className="cbtn1 btn shadow rounded">Submit</button>
                    </form>
                    </div>
                    </div>
         </div>

     )
 }
 export default Register;