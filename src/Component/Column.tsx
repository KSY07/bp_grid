import styled from "styled-components";
import React from "react";
import { PMSGrid } from "../types";


export const Column = (props:PMSGrid.ColumnOptions) => {
    const ColumnBox = styled.div`
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
        font-size: 0.8rem;
        word-break: break-all;

        &:hover {
            background-color: gray;
        }

        &:focus {
            background-color: gray;
        }

    `

    // const ColumnBoxDropIcon = styled.div`
    //     display: flex;
    //     padding-left: 2em;
    // `

    return (
        <ColumnBox>{props.innerContent} {props.drop ? "▾" : ""}</ColumnBox>
    );
}