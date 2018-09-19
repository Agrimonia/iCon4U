import * as React from 'react';
// import Progress from './Progress';
import NestedPivot from './NestedPivot';

export default class App extends React.Component {
  render() {
    return (
      <div className='ms-welcome'>
        <NestedPivot />
      </div>
    );
  }
}
