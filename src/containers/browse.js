import React from "react";
import Browse from '../components/browse';
import SelectProfileContainer from "../containers/profile";

export default function BrowseContainer({slides, children, ...restProps}){
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(slides)
    return (
        <>
            <SelectProfileContainer user={user}/>
            Hi, I am Browser
        </>
    )
}