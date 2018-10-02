import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { PivotLinkSize, PivotLinkFormat, PivotItem, Pivot } from 'office-ui-fabric-react/lib/Pivot';
import Search from './Search';
import './nestedPivot.less';

export default class NestedPivot extends React.Component {
  constructor(props) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <div>
        <Pivot linkFormat={PivotLinkFormat.links} linkSize={PivotLinkSize.large}>
          <PivotItem linkText='Search' itemIcon='search' >
            <Search style={{ margin: '5px' }}/>
          </PivotItem>
          <PivotItem linkText='For You' itemIcon='heart'>
            <Label>For you</Label>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
