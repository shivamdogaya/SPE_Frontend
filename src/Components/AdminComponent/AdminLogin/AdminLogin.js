
 
  import style from "./AdminLogin.module.css";

  import {NavLink} from "react-router-dom";

  import { useState } from "react";

  import axios from "axios";

  import {useHistory} from "react-router-dom";

  import baseUrl from "../../baseUrl";


  
  function AdminLogin() {
    const [admin, setAdmin] = useState({
      admin_name: '',
      admin_password: ''
    });
  
    function handleInput(e) {
      setAdmin({
        ...admin,
        [e.target.name]: e.target.value
      });
    }
  
    let history = useHistory();
  
    async function login(e) {
      e.preventDefault(); // prevent the default form submission behavior
  
      const credentials = { name: admin.admin_name, password: admin.admin_password }; // create an object with the admin name and password
  
      try {
        const response = await axios.post(`${baseUrl}/login`, credentials); // send the POST request with the credentials as the request body
        console.log(response.data); // log the response data to the console
        history.push('/AdminDashboard'); // redirect to the admin page on successful login
      } catch (error) {
        console.error(error); // log any errors to the console
      }
    }

            //  console.log(value.data[0].admin_name);
            //  console.log(admin.admin_name);
           // console.log(value.data);

            //  if(value.data.name === admin.admin_name)
            //  {
            //     if(value.data.password === admin.admin_password){
            //         alert("success");
            //         history.push("/AdminDashboard");
            //     }
            //     else{
            //         alert("Wrong Password");
            //     }
            //  }
            //  else{
            //      alert("Wrong Admin name");
            //  }
         


         return (
            <div id={style.container}>

            
            <div id={style.containerHeadingBox}>
                <h1>Admin Login</h1>
            </div>


            <div id={style.emailBox}>
                <label htmlFor="email"> Email
                    <input name="admin_name" onChange={(e) => handleInput(e)} type="text" id={style.email} />
                </label>
            </div>


            <div id={style.passwordBox}>
                <label htmlFor="password"> Password
                    <input name="admin_password" onChange={(e) => handleInput(e)} type="password" id={style.password} />
                </label>
            </div>

            <button onClick={(e) => login(e)}    id={style.login}>Login</button>
             

            <NavLink to="/" id={style.goBackLink}> Go Back</NavLink> 


            </div>
         );
     }

     export default AdminLogin;