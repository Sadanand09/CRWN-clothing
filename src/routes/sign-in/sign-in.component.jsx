import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const  SignIn =  () => {

    const logGoogleUser = async () => {

        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response);

    }

    return(
        <div>
            <h1>SignIn page</h1>

            <button onClick={logGoogleUser}>
                SignIn with Google
            </button>
        </div>
    )

}

export default SignIn;