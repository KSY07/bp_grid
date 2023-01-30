import React from "react";
import styled from "styled-components";
import { Column } from "./Column";
import { PMSGrid } from "../types";

interface ColumnsProps {
    columnsOptions?:PMSGrid.ColumnOptions[];   
}

export const Columns = (props:ColumnsProps) => {

    // const FirstBox = styled.div`
    // display: none;
    // background-color: 'white';
    // border: 1px solid gray;
    // border-radius: 4px;
    // width: 100px;
    // height: 50px;
    // cursor: "cell";
    // text-align: center;
    // font-size: 0.8rem;

    // &:hover {
    //     background-color: gray;
    // }

    // &:focus {
    //     background-color: gray;
    // }
    // `
    return (
        <>
            {/* <FirstBox /> */}
            {props.columnsOptions?.map((columnOption) => {
                return <Column innerContent={columnOption.innerContent} color={columnOption.color} drop={columnOption.drop} />
            })}
        </>
    );
}