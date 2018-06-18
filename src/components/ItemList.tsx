import * as React from 'react';
import { SwatchColorPicker } from 'office-ui-fabric-react/lib/SwatchColorPicker';
// import { Button } from ;
// import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
// import { Label } from 'office-ui-fabric-react/lib/Label';
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
  svgToBase64 = () => {return windows; };

  click = async () => {
    console.log('click');
    Office.context.document.setSelectedDataAsync(this.svgToBase64(), {
      coercionType: Office.CoercionType.Image,
      imageWidth: 200
    }, (asyncResult) => {
        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
          console.log(asyncResult.error.message);
        }
      });
  }
  public render(): JSX.Element {
    const {items} = this.props;
    const ListIcons = items.map( (item, index) => {
      // let name = item.match(/(?:id='fa-)(\S*)/)[1];
      return (
      <div key={index} className='ms-ListGhostingExample-container' data-is-scrollable={true}>
        <div className='IconBar'>
          <button id='iconlogo' onClick={this.click}>
            <div className='icon-svg'>
              <div dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          </button>
          <div id='info'>
              <h2>{/(?:id='fa-)(\S*)/.exec(item)[0].slice(7, -1)}</h2>
              <div id='colorpicker'>
                <img src='https://localhost:3000/assets/kisspng-primary-color.png' height='35' width='35' />
              </div>
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
        </div>
      </div>
      );
    });
    return (
      <div className='ItemList'>
        {ListIcons}
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


