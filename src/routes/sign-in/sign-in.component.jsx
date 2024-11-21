// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

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
    

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

//   const logGoogleRedirectUser = async () => {
//     const { user } = await signInWithGoogleRedirect();
//     console.log({ user });
//   };

  return (
    <div>
      <h1>SignIn page</h1>

      <button onClick={logGoogleUser}>SignIn with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        SignIn with Google Redirect
      </button> */}

      <SignUpForm />
    </div>
  );
};

export default SignIn;
