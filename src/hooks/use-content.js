import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target){
    const [content, setContent] = useState([])
    const {firebase} = useContext(FirebaseContext)

    useEffect(()=>{
        firebase    
            .firestore()
            .collection(target)
            .get()
            .then((data)=>{
                const allContent = data.docs.map((set)=>{
                    return {...set.data(),
                            docId:set.id}
                })
                setContent(allContent)
            })
            .catch(error=>{
                console.log(error)
            })
    },[])

    return {[target]:content}
}