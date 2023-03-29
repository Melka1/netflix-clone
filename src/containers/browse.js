import React, { useContext, useState, useEffect } from "react";
import Browse from '../components/browse';
import SelectProfileContainer from "../containers/profile";
import {FirebaseContext} from '../context/firebase'
import Loading from "../components/loading";

export default function BrowseContainer({slides, children, ...restProps}){
    const {firebase} = useContext(FirebaseContext) 
    const user = firebase.auth().currentUser||{};
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    //const user = JSON.parse(localStorage.getItem("user"))

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    console.log(slides)
    return profile.displayName? (
        loading?<Loading src={user.photoURL}/>:null
    ):(
        <SelectProfileContainer user={user} setProfile={setProfile}/>
    )
}