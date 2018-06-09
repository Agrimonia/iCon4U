import * as React from 'react';
import Progress from './Progress';
import { readFile } from '../loadsvg';
import NestedPivot from './NestedPivot';

export interface AppProps {
    title: string;
    isOfficeInitialized: boolean;
}
/*
export interface AppState {
    datas: any[];
}
*/
export default class App extends React.Component<AppProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: []
        };
    }
    componentDidMount() {
        new Promise(readFile).then((datas) => {
            this.setState({
                datas: datas
            });
        });
    }
/*
    click = async () => {
        Office.context.document.setSelectedDataAsync('Hello World!', {
            coercionType: Office.CoercionType.Text
        }, result => {
            if (result.status === Office.AsyncResultStatus.Failed) {
                console.error(result.error.message);
            }
        });
    }
*/
    render() {
        const {
            title,
            isOfficeInitialized,
        } = this.props;

        if (!isOfficeInitialized) {
            return (
                <Progress
                    title={title}
                    logo='assets/logo-filled.png'
                    message='Please sideload your addin to see app body.'
                />
            );
        }

        return (
            <div className='ms-welcome'>
                <NestedPivot counts={5} datas={this.state.datas}/>
            </div>
        );
    }
}
