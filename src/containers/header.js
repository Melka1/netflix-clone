import React from "react";
import Header from '../components/header';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes'

export default function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Log In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
