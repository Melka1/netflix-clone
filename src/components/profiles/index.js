import React from "react";
import {Container, Name, Item, List, Picture, Title} from './styles/profiles';

export default function Profiles({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Profiles.Name = function ProfilesName({children, ...restProps}){
    return <Name {...restProps}>{children}</Name>
}

Profiles.Item = function ProfilesItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>
}

Profiles.List = function ProfilesList({children, ...restProps}){
    return <List {...restProps}>{children}</List>
}

Profiles.Picture = function ({ src, ...restProps }) {
    return <Picture
        {...restProps}
        src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`} />;
}

Profiles.Title = function ProfilesTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}