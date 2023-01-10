import React from 'react';
import styled from 'styled-components';
import { PMSGrid } from './types';

const container = styled.div`
    border-color: black;
    border-styled: solid;
`



export default class Grid extends React.Component {

    constructor(props:PMSGrid.GridOptions<string,string>){
        super(props); 
    }

    render(): React.ReactNode {
        return(
            <div></div>
        );
    }
}