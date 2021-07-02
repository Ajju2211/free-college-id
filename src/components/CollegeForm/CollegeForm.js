import React, {useState, useEffect} from 'react'
import styles from "./styles.module.css"
import { FaChevronLeft } from 'react-icons/fa'
import { GoogleLogin, GoogleLogout } from "react-google-login";
import FormBox from './FormBox'
import { Link , useParams} from 'react-router-dom'
import withSizes from 'react-sizes';
import collegesData from "../../data/colleges.json"
import Errorpage from '../Error/Errorpage'
const clientId = "786217029263-0re29kcq90e8vaauvhp1k6qsc8pgu99d.apps.googleusercontent.com";
const NotFound = () => {
    return (
        // <h1 style={{color:"white",textAlign:"center", height:"50vw"}}>No Such Page Found</h1>
        <Errorpage/>
    )
}
function CollegeForm(props) {
    const {id} = useParams();
    const [colgData, setColgData] = useState({})
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const [authRequired, setAuthRequired] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState('{}');
    useEffect(()=>{
        setLoading(false);
        if(id){
            try {
                let data = collegesData.data[parseInt(id)];   
                if(typeof data==="undefined"){
                    setNotFound(true);
                }
                if(!data.available){
                    setNotFound(true);
                }
                else{
                    console.log(data);
                    setNotFound(false);
                    if(collegesData.data[parseInt(id)].code==='snist'){
                        setAuthRequired(true);
                    }
                    setColgData(collegesData.data[parseInt(id)]);
                }

            } catch (error) {
                setNotFound(true);
            }
        }
        
    },[])
    const onLoginSuccess = (res)=>{
        // setShowloginButton(false);
        // setShowlogoutButton(true);
        console.log(res.profileObj);
        setUser(JSON.stringify(res.profileObj));
        setIsLogged(true);
    }
    const onLoginFailure = (res) => {
        console.log("Login Failed:", res);
      };
      const onSignoutSuccess = () => {
        // alert("You have been logged out successfully");
        setUser(JSON.stringify({}));
        setIsLogged(false);
      };
// if(loading){
//     return <h1>Loading...</h1>
// }
if(authRequired && !isLogged){
    return (
        <div className="row" style={{height:props.winHeight, justifyContent:"center",alignContent:"center"}}>
        <div className={styles.signInBox+" card p-0"} style={{width:"50%"}}>
        <h2 className="card-header text-center">Sign in</h2>
        <div className="card-body" style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center"}}>
        <p>College email does not open in few inbuilt browsers of older versions of mobile, use either external browser or desktop to signIn in such issues.</p>
        <GoogleLogin
          clientId={clientId}
          hostedDomain="sreenidhi.edu.in"
          buttonText="Sign In with SNIST college email"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
        </div>
        </div>
        </div>
    )
}
    return (
        <>{
            !notFound ?
            <div className="container-fluid m-0">
                {isLogged ? 
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                    ></GoogleLogout>:<></>}
                <div className="row mt-2">
                    <div className={"offset-1 col-2 col-md-1  " + styles.backWrap}>
                    <Link className="stretched-link" to="/" style={{textDecoration:"none", color:"white",display:"inline"}}>
                        <span className={styles.backBtn}>
                            <FaChevronLeft />
                        </span>
                    </Link>
                    </div>
                    <div className={"col-9 col-md-10"}>
                        <h1 className={styles.title}>{colgData.code}</h1>
                    </div>
                </div>
                <FormBox data={collegesData.data[parseInt(id)]} user={isLogged ? user:'{}'} id={id}/>
            </div>
        :<NotFound/>
        }</>
      )
}
const mapSizesToProps=({height,width})=>({
    winHeight:height-60,
    winWidth:width
    });
export default withSizes(mapSizesToProps)(CollegeForm)
