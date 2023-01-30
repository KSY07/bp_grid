import React from "react";
import styled from "styled-components";
import { PMSGrid } from "../types";

export const Cell = (props:PMSGrid.CellOptions) => {

    const CellBox = styled.div`
        display: inline-block;
        color: ${props.isEnable ? props.textColor : 'white'};
        background-color: ${props.isEnable ? props.color : 'gray'};
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

    return (
        <CellBox>{props.innerContent}</CellBox>
    )
}