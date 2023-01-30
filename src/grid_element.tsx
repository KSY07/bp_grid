import styled from "styled-components"
import React from "react"

interface ContainerProps {
    children: React.ReactNode;
    width: number;
    height: number;    
}

interface SContainerProps {
    children: React.ReactNode;
}

export const Container = ({children ,width, height}:ContainerProps) => {

    const GridContainer = styled.div`
    `
    return (
        <GridContainer>
            {children}
        </GridContainer>
    )
}

export const SContainer = ({children}:SContainerProps) => {
    
    const RowAndCellContainer = styled.div`
    display:flex;
    flex-direction: row;
    `

    return (
        <RowAndCellContainer>
            {children}
        </RowAndCellContainer>
    )
}

export const FirstBox = () => {

    const FirstBox = styled.div`
    display: inline-block;
    background-color: 'white';
    border: 1px solid gray;
    border-radius: 4px;
    width: 100px;
    height: 20px;
    cursor: "cell";
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
        <FirstBox />
    );
}