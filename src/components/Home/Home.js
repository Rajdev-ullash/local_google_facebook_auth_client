import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

const Home = () => {

  const responseGoogle = (response) => {
    console.log(response);
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/googlelogin',
      data: { tokenId: response.tokenId }
    }).then(response => {
      console.log("Google signed in completed successfully", response);
    })
  }
  const responseErrorGoogle = (response) => {
    console.log(response);
  }

  const responseFacebook = (response) => {
    console.log(response);
    console.log(response);
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/facebooklogin',
      data: { accessToken: response.accessToken, userID: response.userID }
    }).then(response => {
      console.log("Facebook signed in completed successfully", response);
    })
  }


  return (

    <div>
      <div>
        <h1 className="text-center">Login with google</h1>
        <div className="d-flex justify-content-center">
          <GoogleLogin
            clientId="518005766882-vsq4487p8hglk8n4nq751ckn2b78prnu.apps.googleusercontent.com"
            buttonText="Login with google"
            onSuccess={responseGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
      <div>
        <h1
          className="text-center">
          Login with Facebook
        </h1>
        <div
          className="d-flex 
            justify-content-center
        ">
          <FacebookLogin
            appId="1296987157438853"
            autoLoad={false}
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
          />
        </div>
      </div>
    </div>

  );
};

export default Home;