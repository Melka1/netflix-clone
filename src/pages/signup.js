import React, {useState, useContext} from "react";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import {useNavigate} from 'react-router-dom';
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";


export default function SignUp(){
    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid  =  firstName==''||emailAddress==''||password==''

    const handleSignUp = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then(result=>{
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.ceil(Math.random()*5)
                })
                .then(()=>{
                    navigate(ROUTES.BROWSE)
                })
            })
            .catch(error =>{
                setEmailAddress('');
                setFirstName('');
                setPassword('');
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp}>
                        <Form.Input
                            placeholder="First name"
                            value={firstName} 
                            onChange={({target})=>setFirstName(target.value)}
                        />
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
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCH to ensure you're not a bot. Learn more.
                        </Form. TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}