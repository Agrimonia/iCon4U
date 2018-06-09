import * as React from 'react';
// import { Button, ButtonType } from 'office-ui-fabric-react';
// import HeroList, { ListItem } from './HeroList';
import Progress from './Progress';
// import Search from './Search';
import { readFile } from '../loadsvg';

export interface AppProps {
    title: string;
    isOfficeInitialized: boolean;
}
/*
export interface AppState {
    items: any[];
}
*/
export default class App extends React.Component<AppProps> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: []
        };
    }
    componentDidMount() {
        this.setState({
            datas: new Promise(readFile).then((datas) => {
                return datas;
            })
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
                <h1>Welcome</h1>
            </div>
        );
    }
}
