import * as React from 'react';
import { Button } from 'office-ui-fabric-react/lib/Button';
// import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
// import { List } from 'office-ui-fabric-react/lib/List';
// import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
// import {svgToBase64} from '../loadsvg';
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
    //TODO: 插入图片
    /*
    svgToBase64(this.props.items[0], (base64) => {
      Office.context.document.setSelectedDataAsync(base64, {
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
      <div className='icon-svg'>
        <div dangerouslySetInnerHTML={{ __html: this.props.items[0] }} />
        <Button className='ms-welcome__action' onClick={this.click}>Run</Button>
      </div>
    );
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
}

