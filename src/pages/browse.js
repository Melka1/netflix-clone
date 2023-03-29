import React from "react";
import useContent from "../hooks/use-content";
import slideFilter from "../utils/slide-filter";
import BrowseContainer from "../containers/browse";

export default function Browse(){
    const {series} = useContent('series')
    const {films} = useContent('films')

    const slides = slideFilter({films, series})
    // console.log(series, films)
    console.log(slides)

    return (
        <BrowseContainer slides={slides} />
    )
}