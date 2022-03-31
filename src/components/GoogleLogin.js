import React from "react";
import ReactGoogleLogin from "react-google-login";
export default function GoogleLogin(props) {
    const onResponse = resp => {
        console.log(resp);
    };
    return (
        <ReactGoogleLogin
            clientId="697095907189-86llat8rckg9humatf50rmtklkuajsqm.apps.googleusercontent.com" // We created this earlier, remember?
            buttonText="Login with Google"
            onSuccess={() => onResponse}
            onFailure={() => onResponse}
        />
    );
}