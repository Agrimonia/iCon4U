import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
// import './SearchBox.Small.Example.scss';
import { fontawesome } from '../data';
import ItemList from './ItemList';

interface SearchState {
  result: string[],
  isSearched: boolean
}
export default class Search extends React.Component<any, SearchState> {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      isSearched: false
    };
  }
  /* 希望的输入： window
  希望的输出：
  {
    "fa-windows-xxx",
    "fa-window-xxx",
    "fa-windwo-xyz"
  }
  */
  searchResult(input) {
    console.log(input);
    let iconlist = [];
    for (let i = 0; i < fontawesome.length; i++) {
      let index = fontawesome[i].name.search(input);
      if (index > 0) {
        // tslint:disable-next-line:quotemark
        let svg = "<svg width='100' height='100' viewBox='0 0 2000 2300' xmlns='http://www.w3.org/2000/svg'>" + fontawesome[i].path + "</svg>";
        iconlist.push(svg);
      }
    }
    this.setState({
      result: iconlist
    }, () => {
      console.log('set iconlist');
    });
  }
  public render(): JSX.Element {
    const isSearched = this.state.isSearched;
    let isRendering = null;
    if (isSearched) {
      isRendering = <ItemList result={this.state.result} />;
    }
    return (
      <div className='ms-SearchBoxBar'>
        <br/>
        <SearchBox
          placeholder='Please input icon name'
          /*
          onEscape={_ev => {
            console.log('Custom onEscape Called');
          }}
          onClear={_ev => {
            console.log('Custom onClear Called');
          }}
          */
          onChange={newValue => {
            console.log('SearchBox onChange fired: ' + newValue);
            this.setState({
              isSearched: false
            });
          }}
          onSearch={newValue => {
            console.log('SearchBox onSearch fired: ' + newValue);
            this.searchResult(newValue);
            this.setState({
              isSearched: true
            });
          }}
          onBlur={() => {
            console.log('onBlur called');
          }}
        />
        {isRendering}
      </div>
    );
  }
}
