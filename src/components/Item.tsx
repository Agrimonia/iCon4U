import * as React from 'react';
import { SwatchColorPicker } from 'office-ui-fabric-react/lib/SwatchColorPicker';
//import { svgToBase64 } from '../loadsvg';
import { windows } from '../base64';
import './items.less';

interface ItemProps {
  item: string,
  index: number
}
export default class Item extends React.Component<ItemProps> {
  constructor(props) {
    super(props);
  }
  // test
  svgToBase64 = () => {
    return windows;
  }
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
    const {item, index} = this.props;
    return <div key={index} className='ms-ListGhostingExample-container' data-is-scrollable={true}>
        <div className='IconBar'>
          <button className='iconlogo' onClick={this.click}>
          <div className='icon-svg'>
              <div dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          </button>
        <div className='info ms-font-m-plus'>
            <div>{/(?:id='fa-)(\S*)/.exec(item)[0].slice(7, -1)}</div>
            <div className='colorpicker'>
              <img src='https://localhost:3000/assets/kisspng-primary-color.png' height='35' width='35' />
            </div>
            <SwatchColorPicker onCellFocused={(_id, color) => {
                // TODO: setState => click(this.state.color)
                console.log(color);
              }} columnCount={3} cellShape={'circle'} colorCells={[{ id: 'b', label: 'Black', color: '#000000' }, { id: 'g', label: 'Gray', color: '#eaeaea' }, { id: 'w', label: 'White', color: '#ffffff' }]} />
          </div>
        </div>
      </div>;
  }
}
