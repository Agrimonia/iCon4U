import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
// import './SearchBox.Small.Example.scss';
import ItemList from './ItemList';

// tslint:disable:jsx-no-lambda
export default class Search extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className='ms-SearchBoxBar'>
        <SearchBox
          placeholder='Input icon name'
          onEscape={_ev => {
            console.log('Custom onEscape Called');
          }}
          onClear={_ev => {
            console.log('Custom onClear Called');
          }}
          onChange={newValue => console.log('SearchBox onChange fired: ' + newValue)}
          onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
          onFocus={() => console.log('onFocus called')}
          onBlur={() => console.log('onBlur called')}
        />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}
