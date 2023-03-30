import React, {useState} from "react";
import {Link as ReactRouterLink} from "react-router-dom";
import {Background, PlayButton, SearchInput, SearchIcon, Search, Profile, Picture, Dropdown, Group, ButtonLink, Feature, Container, Logo, Text, FeatureCallOut, Link} from './styles/header'

export default function Header({bg = true, children, ...restProps}) {
    return bg ? (<Background {...restProps}>{children}</Background>) : children;
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return (
        <Feature {...restProps}>{children}</Feature>
    )
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
    <ReactRouterLink to={to}>
        <Logo {...restProps} />
    </ReactRouterLink>)
}

Header.ButtonLink = function HeaderButtonLink({to, children, ...restProps}) {
    return (
        <ButtonLink to={to} {...restProps}>{children}</ButtonLink>
    )
}

Header.Text = function HeaderText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Group = function HeaderGroup({children, ...restProps}){
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.Picture = function HeaderPicture({...restProps}){
    return <Picture {...restProps}/>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Search = function HeaderSearch({setSearchText, searchText, ...restProps}){
    const [searchActive, setSearchActive] = useState(false)
    return (
        <Search {...restProps}>
            <SearchIcon onClick={()=>setSearchActive(searchActive=>!searchActive)}>
                <img src='/images/icons/search.png' />
            </SearchIcon>
            <SearchInput
                value={searchText}
                onChange={({ target }) => setSearchText(target.value)}
                placeholder='Search films and series'    
                active = {searchActive}
            />
        </Search>)
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}