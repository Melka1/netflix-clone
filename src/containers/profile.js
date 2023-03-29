import React from "react";
import Header from '../components/header';
import Profiles from '../components/profiles';
import  * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer({user, setProfile}){
    console.log(user?.displayName)
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User>
                        <Profiles.Picture src={'/images/users/'+user?.photoURL+'.png'}/>
                        <Profiles.Name>Hello {user?.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}
