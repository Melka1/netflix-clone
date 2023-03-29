import React from "react";
import {Container, Name, User, List, Picture, Title} from './styles/profiles';

export default function Profiles({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Profiles.Name = function ProfilesName({children, ...restProps}){
    return <Name {...restProps}>{children}</Name>
}

Profiles.User = function ProfilesUser({children, ...restProps}){
    return <User {...restProps}>{children}</User>
}

Profiles.List = function ProfilesList({children, ...restProps}){
    return <List {...restProps}>{children}</List>
}

Profiles.Picture = function ProfilesPicture({children, ...restProps}){
    return <Picture {...restProps}>{children}</Picture>
}

Profiles.Title = function ProfilesTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}