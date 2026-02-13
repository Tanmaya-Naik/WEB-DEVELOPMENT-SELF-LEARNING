import { useState } from "react";
import { email } from "zod";


function Multiform(){
    const [step,setStep] = useState(1);

    const [formData, setformData] = useState({
        name:"",
        email:"",
    });

    //Handle input change
    
    const handleChange=(e)=>{
        const {name,value}=e.target;


        setformData((prev)=>({
            ...prev,
            [name]:value,

        }));
    };

    const handleNext = () => {
        if(step === 1 && formData.name.trim()===""){
            alert("Name is required")
        }
        if(step === 2 && formData.email.trim()===""){
            alert("Email is required")
        }
        
        setStep((prev)=>prev+1);
    };

    //handle back

    const handleBack = () => {
        setStep((prev) => prev-1);
    };

    return (
    <div style={{ padding: "20px" }}>
      {step === 1 && (
        <div>
          <h2>Step 1: Enter Name</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <br />
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Enter Email</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <br />
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Confirmation</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
}

export default Multiform;