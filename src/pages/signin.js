import React, {useState, useContext} from "react";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import {useNavigate} from 'react-router-dom';
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";

export default function SignIn(){
    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = password===''||emailAddress==='';

    const handleSignIn = (event) =>{
        event.preventDefault();

        firebase
            .auth().signInWithEmailAndPassword(emailAddress, password)
            .then((res) => {
                console.log(res);
                localStorage.setItem("user", JSON.stringify(res.user))
                navigate(ROUTES.BROWSE)
            })
            .catch((err) => {
                setEmailAddress('');
                setPassword('');
                setError(err.message);                    
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                     <Form.Title>Sign In</Form.Title>
                     {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn}>
                        <Form.Input 
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({target})=>setEmailAddress(target.value)} 
                        />
                        <Form.Input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({target})=>setPassword(target.value)} 
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCH to ensure you're not a bot. Learn more.
                    </Form. TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}