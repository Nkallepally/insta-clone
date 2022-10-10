import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./form-page.css"
import FileBase64 from "react-file-base64"

const FormPage=()=>{
   const [data,setdata] = useState({ 
      image: "",
      author:"",
      location:"",
      desc:""
   })
            const navigate = useNavigate()
            const handlesubmit = async (e) => {
               e.preventDefault();
               console.log(data)
               axios({
                 method: "POST",
                //url: "https://instaapp-b.herokuapp.com/add",
                 url: "http://localhost:3006/add",
                 data: data,
               })
               navigate("/postview")
                 // .then(() => {
                 //   navigate(-1);
                 // })
                 .catch((err) => {
                   console.log(err);
                 }, []);
             };
           
           
             
    return (
        <>
        <div className="form-container">
           <form action="" className="form-1" onSubmit={handlesubmit}>
        <br/>
           <FileBase64 type="file" multiple={ false } onDone={({base64})=> {setdata({...data,image:base64})}}></FileBase64>
        <br/>
           <input id='author' type="text" name='author' placeholder='Author' onChange={(e)=> {setdata({...data,author:e.target.value})}}/>
        <br/>
           <input id='location' type="text" name='location' placeholder='Location' onChange={(e)=> { setdata({...data,location:e.target.value})}}/>
        <br/>
            <input id='desc' type="text" name='desc' placeholder='Description' onChange={(e)=> {setdata({...data,desc:e.target.value})}}/>
        <br/>
           <button className={(data.author === "" && data.location === "" && data.desc === "" && data.image === "") ? "btn" : "clrbtn"} type="submit">Post</button>
           </form>
         
         
        </div>
        </>
    )
}
export default FormPage




