import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { PivotLinkSize, PivotLinkFormat, PivotItem, Pivot } from 'office-ui-fabric-react/lib/Pivot';
import Search from './Search';


export default class PivotFabricExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <div>
        <Pivot linkFormat={PivotLinkFormat.links} linkSize={PivotLinkSize.large}>
          <PivotItem linkText='Search' itemIcon='search'>
            <Search />
          </PivotItem>
          <PivotItem linkText='For You' itemIcon='heart'>
            <Label>For you</Label>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
