import * as React from 'react';
import { SwatchColorPicker } from 'office-ui-fabric-react/lib/SwatchColorPicker';
// import { Button } from 'office-ui-fabric-react/lib/Button';
// import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
// import { List } from 'office-ui-fabric-react/lib/List';
// import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
// import { svgToBase64 } from '../loadsvg';
import { windows } from './base64';

export interface IconListProps {
  items: any[];
}

export default class ItemList extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      iconList: []
    };
  }
  click = async () => {
    console.log('click');
    Office.context.document.setSelectedDataAsync(windows, {
      coercionType: Office.CoercionType.Image,
      imageLeft: 50,
      imageTop: 50,
      imageWidth: 400
    }, (asyncResult) => {
        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
          console.log(asyncResult.error.message);
        }
      });
    /*
    svgToBase64(this.props.items[0], (_base64) => {
      Office.context.document.setSelectedDataAsync(_base64, {
        coercionType: Office.CoercionType.Image
      }, result => {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error(result.error.message);
        }
      });
    });
    */
  }
  public render(): JSX.Element {
    return (
      <div>
        <button onClick={this.click}>
          <div className='icon-svg'>
            <div dangerouslySetInnerHTML={{ __html: this.props.items[1] }} />
          </div>
        </button>
        <SwatchColorPicker
          columnCount={3}
          cellShape={'circle'}
          colorCells={[
            { id: 'b', label: 'Black', color: '#000000' },
            { id: 'g', label: 'Gray', color: '#eaeaea' },
            { id: 'w', label: 'White', color: '#ffffff' }
          ]}
        />
      </div>
    );
  }
}
  /*
  public render(): JSX.Element {
    const { items } = this.props;

    return (
      <FocusZone direction={FocusZoneDirection.vertical}>
        <div className='ms-ListGhostingExample-container' data-is-scrollable={true}>
          <List items={items} onRenderCell={this._onRenderCell} />
        </div>
      </FocusZone>
    );
  }

  private _onRenderCell(): JSX.Element {
    return (
      <div className='ms-ListGhostingExample-itemCell' data-is-focusable={true}>
        <div className='icon-svg'>
          <div dangerouslySetInnerHTML={{ __html: this.props.items[0] }} />
        </div>
      </div>
    );
  }
  */


