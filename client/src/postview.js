import React, {useState, useEffect} from "react";
import axios from "axios";
import like from "./assets/like.png"
import share from "./assets/share.png"
import "./postview.css"
import Logo from "./assets/logo.png"
import Camera from "./assets/camera.png"
import { Link } from "react-router-dom";

const PostView = () => {
    const [postData,setPostData] = useState([])

    useEffect(() =>{
        axios({
            method: "GET",
            url: " https://new-insta-b.herokuapp.com/post",
            //url: "http://localhost:3006/post",
        }).then((userData) => {
            console.log(userData)
            setPostData((userData.data).reverse())
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    
    return (
    <>
        <div className='container'>
            <header>
                <div className='nav'>
                    <img src={Logo} alt='insta-logo'></img>
                   <Link to="/formpage"> <img src={Camera} alt='camera'></img></Link>
                </div>
            </header>
            <hr/>
        <div className="content">
        {
        postData.map((user,i) =>{
            return (
                <div className="post">
                    <div className="user">
                        <div>
                            <div className="user-name" >
                                <div key={i}>{user.author}</div>
                            </div>
                            <div className="user-loc">
                                <span>{user.location}</span>
                             </div>
                        </div>
                    
                        <div>
                           <b>...</b> 
                        </div>
                    </div>
                    <div className="user-image">
                        <img src={user.image} alt="user-postImage"></img>
                    </div>
                    <div className="user-meta">
                        <div >
                            <span>
                            <img src={like} alt="user-postImage"></img>
                            </span>
                            <span>
                            <img src={share} alt="user-postImage"></img>
                            </span>
                        </div>
                        <div className="">
                        <span>{user.date}</span>
                         </div>
                    </div>
                    <div className="user-likes">
                        0 likes
                    </div>
                    <div className="user-description">
                        {user.desc}
                    </div>
                    </div>
                    )
                })
        }
        </div>
        </div>
    </>
    )
}
export default PostView;

// function Postview (props) {
//     const [data, setData] = useState([])
//     useEffect(() =>{
//         axios({
//             method: "GET",
//             url: "http://localhost:3006/post",
//         }).then((userData) => {
//             console.log(userData)
//             setData((userData.data).reverse())
//         }).catch((err) => {
//             console.log(err)
//         })
//     }, [])
//     return (
//         <>
//             {data.map((elem, i) => {
//         return (
//           <div className="block">
//             <div className="block-header">
//               <div key={i}>
//                 <b>{elem.author}</b>
//                 <p className="loc">{elem.location}</p>
//               </div>
//               <p className="dots">...</p>
//             </div>
//             <div>
//               <img className="postImage" src={elem.image} alt="Wait still not found"/>
//             </div>
//             <div className="img">
//               <img id="like" src = {like} alt="Wait still not found"></img>
//               <img id="share" src={share} alt="Wait still not found"></img>
//               <span>{elem.date}</span>
//             </div>
//             <p className="likes">{ "43M likes"}</p>
//             <p className="likes"><b>{elem.description}</b></p>
//           </div>
//         );
//       })}
//         </>
//     )
// }
// export default Postview

