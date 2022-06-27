import "./App.css";
import React, { useState } from "react";
//import { FormControl, NativeSelect } from "@material-ui/core";

// const App = () => {
//   const [values, setvalues] = useState({
//     ptitle: "",
//     decription: "",
//     numofOpenenings: 0,
//     numberofToken: 0,
//     DATE: new Date(),
//     fixed: false,
//     range: false,
//     nda: false,
//     projectAward: "",
//     time: "",
//     skills: "",
//     keepAnonymous: false,
//   });
//   const [skills, setSkills] = useState([]);

//   const handleSkills = () => {
//     setSkills([...skills, values.skills]);
//     console.log(skills);
//   };

//   const handleChange = (name) => (e) => {
//     setvalues({ ...values, [name]: e.target.value });
//   };

//   // return (
//   //   <div className="App">
//   //     <section className="sec1">
//   //       <input
//   //         className="projectitle"
//   //         onChange={handleChange("ptitle")}
//   //         placeholder="Which place are you looking for?"
//   //       />
//   //       <div>
//   //         <label for="duration">Apply by</label>
//   //         <div>
//   //           <input type="date" />
//   //           -
//   //           <input type="date" />
//   //         </div>
//   //         <hr />
//   //       </div>
//   //     </section>
//   //     <section className="sec1">
//   //       <fieldset>
//   //         <legend>Project Description</legend>
//   //         <textarea
//   //           className="projectDescription"
//   //           type="text"
//   //           onChange={handleChange("description")}
//   //         />
//   //       </fieldset>
//   //     </section>
//   //     <section className="sec1">
//   //       <FormControl>
//   //         <NativeSelect default="" onChange={handleChange("time")}>
//   //           <option value="Asia">Asia</option>
//   //           <option value="Africa">Africa</option>
//   //           <option value="European">European</option>
//   //           <option value="North American">North American</option>
//   //         </NativeSelect>
//   //       </FormControl>

//   //       <fieldset>
//   //         <legend>Num of Openenings</legend>
//   //         <input
//   //           className="projectDescription"
//   //           onChange={handleChange("numberOfOpenings")}
//   //           placeholder=""
//   //         />
//   //       </fieldset>
//   //     </section>

//   //     <section>
//   //       <fieldset>
//   //         <legend>Skills required</legend>
//   //         {skills?.map((sk) => (
//   //           <div
//   //             style={{ display: "inline-block", width: "20px", margin: "15px" }}
//   //           >
//   //             {sk}
//   //           </div>
//   //         ))}
//   //         <input
//   //           type="text"
//   //           onChange={handleChange("skills")}
//   //           style={{ margin: "10px" }}
//   //         />
          
//   //         <button onClick={() => handleSkills()}>Add</button>
//   //       </fieldset>
//   //     </section>

//   //     <section className="sec11">
//   //       <FormControl>
//   //         <NativeSelect default="" onChange={handleChange("projectAward")}>
//   //           <option value="Award1">Award1</option>
//   //           <option value="Award2">Award2</option>
//   //           <option value="Award3">Award3</option>
//   //           <option value="Award4">Award4</option>
//   //         </NativeSelect>
//   //       </FormControl>

//   //       <div>
//   //         <label for="duration">Apply by</label>
//   //         <div>
//   //           <input type="date" />
//   //           -
//   //           <input type="date" />
//   //         </div>
//   //         <hr />
//   //       </div>
//   //       <div>
//   //         <label for="duration">Apply by</label>
//   //         <div>
//   //           <input type="date" />
//   //           -
//   //           <input type="date" />
//   //           <hr />
//   //         </div>
//   //       </div>
//   //     </section>

//   //     <section>
//   //       <legend>Choose compensation</legend>

//   //       <div className="radiobtn">
//   //         <input type="radio" id="male" name="gender" value="male" />
//   //         <label for="male">Male</label>
//   //       </div>

//   //       <div className="radiobtn">
//   //         <input type="radio" id="female" name="gender" value="female" />
//   //         <label for="female">Female</label>
//   //       </div>
//   //     </section>

//   //     <input
//   //       className="token"
//   //       onChange={handleChange("numberofToken")}
//   //       placeholder="Tokens"
//   //     />

//   //     <section>
//   //       <div className="radiobtn">
//   //         <input type="checkbox" />
//   //         <label for="male">NDA required</label>
//   //       </div>
//   //       <div className="radiobtn">
//   //         <input type="checkbox" />
//   //         <label for="female">keep Anonymous</label>
//   //       </div>
//   //     </section>
//   //     <button className="button1">Post Project</button>
//   //   </div>
//   // );
// };


const App=()=>{
  return(
    <div><p>happy react learning</p></div>
  )
}

export default App;
