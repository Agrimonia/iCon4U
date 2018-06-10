import * as React from 'react';
// import Progress from './Progress';
import { getDatas } from '../loadsvg';
import NestedPivot from './NestedPivot';

export default class App extends React.Component<{}, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: ''
        };
    }
    componentDidMount() {
        this.setState({
            datas: getDatas()
        });
    }
    render() {
        return (
            <div className='ms-welcome'>
                <NestedPivot datas={this.state.datas}/>
            </div>
        );
    }
}
