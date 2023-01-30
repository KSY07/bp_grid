import React from 'react';
import { PMSGrid } from './types';
import { Container, FirstBox, SContainer } from './grid_element';
import { Columns } from './Component/Columns';
import { Rows } from './Component/Rows';


export default class Grid extends React.Component {

    constructor(props:PMSGrid.GridOptions) {
        super(props);
        this.state = {
            width:props.width,
            height:props.height,
            data:props.data,
        }
    }

    state:PMSGrid.GridOptions = {
        data: {
            columns:[],
            rows:[],
        },
        width: 0,
        height: 0
    }

    componentDidMount(): void {
        
    }

    componentWillUnmount(): void {
        
    }

    setWidth = (sWidth:number) => {
        this.setState({
            width: sWidth 
        });
    }

    setHeight = (sHeight:number) => {
        this.setState({
            height: sHeight
        });
    }

    setData = (sData:PMSGrid.GridData) => {
        this.setState({
            data: sData
        })
    }

    render(): React.ReactNode {
        return(
            <div>
                <Container width={this.state.width} height={this.state.height}>
                    <Columns columnsOptions={this.state.data?.columns} />
                    <SContainer>
                        {this.state.data?.rows.length == 0 ? null : <Rows rowsOptions={this.state.data?.rows} />}
                    </SContainer>
                </Container>
            </div>
        );
    }
}