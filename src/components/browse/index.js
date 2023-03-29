import React from "react";
import { Container } from "./styles/browse";

export default function Browse({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}