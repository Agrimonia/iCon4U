import * as React from 'react';
import { SwatchColorPicker } from 'office-ui-fabric-react/lib/SwatchColorPicker';

export default function Item(item, index) {
  return (
    <div key={index} className='ms-ListGhostingExample-container' data-is-scrollable={true}>
      <div className='IconBar'>
        <button id='iconlogo' onClick={this.click}>
          <div className='icon-svg'>
            <div dangerouslySetInnerHTML={{ __html: item }} />
          </div>
        </button>
        <div id='info'>
          <div>
            {/(?:id='fa-)(\S*)/.exec(item)[0].slice(7, -1)}
          </div>
          <div id='colorpicker'>
            <img src='https://localhost:3000/assets/kisspng-primary-color.png' height='35' width='35' />
          </div>
          <SwatchColorPicker
            onCellFocused={
              (_id, color) => {
                console.log(color);
              }
            }
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
}
