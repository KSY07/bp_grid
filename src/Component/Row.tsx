import React from "react";
import styled from "styled-components";
import { PMSGrid } from "../types";


export const Row = (props:PMSGrid.RowOptions) => {

    const RowContainer = styled.div`
        display: inline-block;
    `

    const RowBox = styled.div`
        display: inline-block;
        background-color: ${props.color};
        border: 1px solid gray;
        border-radius: 4px;
        width: 100px;
        height: auto px;
        cursor: ${props.drop ? "pointer" : "cell"};
        text-align: center;
        margin: 0 auto;
        padding: 0 0;
        font-size: 0.8em;

        &:hover {
            background-color: gray;
        }

    `

    const DataBox = styled.div`
        display: inline-block;
        background-color: ${props.color};
        border: 1px solid gray;
        border-radius: 4px;
        width: 100px;
        height: auto;
        cursor: cell;
        text-align: center;
        margin: 0 auto;
        padding: 0 0;
        font-size: 0.8em;

        &:hover {
            background-color: gray;
        }
    `

    return (
        <RowContainer>
            <RowBox>{props.title}</RowBox>
            <>
                {props.data?.map((data)=> {
                    return <DataBox>{data.innerContent}</DataBox>
                })}
            </>
        </RowContainer>
    );
    
}