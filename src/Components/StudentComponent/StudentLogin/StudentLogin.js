import style from "./StudentLogin.module.css";
  import {NavLink , useHistory} from "react-router-dom";

   import {useState} from "react" ;
   import axios from "axios";
   import baseUrl from "../../baseUrl";


     function StudentLogin(){

        const [user , setUser] = useState({
            email:'',
            password:''
        });

        function onTextFieldChange(e){
            setUser({
                ...user ,
                [e.target.name] : e.target.value
            });
        }


          let history = useHistory();


          async function handleLogin(e) {
            e.preventDefault(); // prevent the default form submission behavior
          
            const credentials = { email: user.email, password: user.password }; // create an object with the admin name and password
          
            try {
              const response = await axios.post(`${baseUrl}/use`, credentials); // send the POST request with the credentials as the request body
              console.log(response); // log the response data to the console
          
              // set the user data in sessionStorage
              sessionStorage.setItem('user', JSON.stringify(response.data));
          
              history.push('/StudentDashboard'); // redirect to the admin page on successful login
            } catch (error) {
              console.error(error); // log any errors to the console
            }
          }
        



         return(
            <div id={style.container}>

                <div id={style.containerHeadingBox}>
                    <h1>Student Login</h1>
                </div>

               <div id={style.emailBox}>
                   <label htmlFor="email"> Email
                       <input name="email" 
                       onChange={(e) => onTextFieldChange(e)} type="text" id={style.email} />
                   </label>
               </div>


               <div id={style.passwordBox}>
                   <label htmlFor="password"> Password
                     <input name="password" 
                      onChange={(e) => onTextFieldChange(e)} type="password" id={style.password} />
                   </label>
               </div>


               <button id={style.login} onClick={(e) => handleLogin(e)} >Login</button>


              <div id={style.signup}>
                 New to Portal?  <NavLink exact to="/StudentSignup"> Register</NavLink> 
                 <NavLink id={style.goBackLink} exact to="/"> Go Back</NavLink> 
              </div>


               </div>
         ); 
     }

     export default StudentLogin;