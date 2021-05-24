import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import '../../App.css';
import Img from '../../images/img-5.jpg';


 export class SignUp extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
   render() {
     return (
      <>
       <div className='google-sign' style={{backgroundColor:'black', width:'100%', height:'100%'}}>
         <GoogleLogin 
         clientId='805926608369-hj8n2o86ie6b3ehmb6gs0bg32fm7114v.apps.googleusercontent.com'
         buttonText='Login'
         onSuccess={this.responseGoogle}
         onFailure={this.responseGoogle}
         cookiePolicy={'single_host_origin'}

         />

       </div>
       
       <img src={Img} style={{height:'300px', width:'auto'}} alt='gsign'/>
       </>
       
     )
   }
 }
 export default SignUp;