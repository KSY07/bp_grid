import React from "react";
import { PMSGrid } from "../types";
import { Row } from "./Row";
import styled from "styled-components";

interface RowsProps {
    rowsOptions?: PMSGrid.RowOptions[];
}

const RowsContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const Rows = (props:RowsProps) => {

    return(
        <RowsContainer>
            <>
                {props.rowsOptions?.map((rowsOption) => {
                    return <Row title={rowsOption.title} data={rowsOption.data} />
                })}
            </>
        </RowsContainer>
    );
}