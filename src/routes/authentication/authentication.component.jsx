// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";

import './authentication.styles.scss'


const SignIn = () => {

    // useEffect(() => {
    //     const fetchRedirectResult = async () => {
    //         try {
    //             const response = await getRedirectResult(auth);
    //             console.log(response);
    //         } catch (error) {
    //             console.error("Error fetching redirect result:", error);
    //         }
    //     };
    
    //     fetchRedirectResult();
    // }, []);
    

//   const logGoogleRedirectUser = async () => {
//     const { user } = await signInWithGoogleRedirect();
//     console.log({ user });
//   };

  return (
    <div className="authentication-container">

      {/* <button onClick={logGoogleUser}>SignIn with Google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        SignIn with Google Redirect
      </button> */}

      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default SignIn;
