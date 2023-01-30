import React from "react";
import styled from "styled-components";
import { PMSGrid } from "../types";


export const Row = (props:PMSGrid.RowOptions) => {

    const RowBox = styled.div`
        display: inline-block;
        background-color: ${props.color};
        border: 1px solid gray;
        border-radius: 4px;
        width: 100px;
        height: 20px;
        cursor: ${props.drop ? "pointer" : "cell"};
        text-align: center;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.8em;

        &:hover {
            background-color: gray;
        }

    `

    return (<RowBox>{props.innerContent}</RowBox>);
    
}