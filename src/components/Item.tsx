import * as React from 'react';
import { SwatchColorPicker } from 'office-ui-fabric-react/lib/SwatchColorPicker';
//import { svgToBase64 } from '../loadsvg';
import './items.less';

interface ItemProps {
  item: string,
  index: number
}
export default class Item extends React.Component<ItemProps> {
  constructor(props) {
    super(props);
    // this.state = {
    //   color: '#000'
    // };
  }
  // test
  svgToBase64 = () => {
    return 'PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMDAgMjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBpZD0iZmEtNTAwcHgiIGQ9Ik0xNTI5IDE1NDdsLTYgNnEtMTEzIDExMy0yNTkgMTc1LTE1NCA2NC0zMTcgNjQtMTY1IDAtMzE3LTY0LTE0OC02My0yNTktMTc1LTExMy0xMTItMTc1LTI1OC00Mi0xMDMtNTQtMTg5LTQtMjggNDgtMzYgNTEtOCA1NiAyMCAxIDEgMSA0IDE4IDkwIDQ2IDE1OSA1MCAxMjQgMTUyIDIyNiA5OCA5OCAyMjYgMTUyIDEzMiA1NiAyNzYgNTYgMTQzIDAgMjc2LTU2IDEyOC01NSAyMjUtMTUybDYtNnExMC0xMCAyNS02IDEyIDMgMzMgMjIgMzYgMzcgMTcgNTh6bS00NzItNjE1bC02NiA2NiA2MyA2M3EyMSAyMS03IDQ5LTE3IDE3LTMyIDE3LTEwIDAtMTktMTBsLTYyLTYxLTY2IDY2cS01IDUtMTUgNS0xNSAwLTMxLTE2bC0yLTJxLTE4LTE1LTE4LTI5IDAtNyA4LTE3bDY2LTY1LTY2LTY2cS0xNi0xNiAxNC00NSAxOC0xOCAzMS0xOCA2IDAgMTMgNWw2NSA2NiA2NS02NXExOC0xNyA0OCAxMyAyNyAyNyAxMSA0NHptNDcxIDU3cTAgMTE4LTQ2IDIyOC00NSAxMDUtMTI2IDE4Ni04MCA4MC0xODcgMTI2dC0yMjggNDYtMjI4LTQ2LTE4Ny0xMjZxLTgyLTgyLTEyNS0xODYtMTUtMzMtMTUtNDBoLTFxLTktMjcgNDMtNDQgNTAtMTYgNjAgMTIgMzcgOTkgOTcgMTY3aDF2LTM0MXEzLTEzNiAxMDItMjMyIDEwNS0xMDMgMjUzLTEwMyAxNDcgMCAyNTEgMTAzdDEwNCAyNDlxMCAxNDctMTA0LjUgMjUxdC0yNTAuNSAxMDRxLTU4IDAtMTEyLTE2LTI4LTExLTEzLTYxIDE2LTUxIDQ0LTQzbDE0IDNxMTQgMyAzMyA2dDMwIDNxMTA0IDAgMTc2LTcxLjV0NzItMTc0LjVxMC0xMDEtNzItMTcxLTcxLTcxLTE3NS03MS0xMDcgMC0xNzggODAtNjQgNzItNjQgMTYwdjQxM3ExMTAgNjcgMjQyIDY3IDk2IDAgMTg1LTM2LjV0MTU2LTEwMy41IDEwMy41LTE1NSAzNi41LTE4M3EwLTE5OC0xNDEtMzM5LTE0MC0xNDAtMzM5LTE0MC0yMDAgMC0zNDAgMTQwLTUzIDUzLTc3IDg3bC0yIDJxLTggMTEtMTMgMTUuNXQtMjEuNSA5LjUtMzguNS0zcS0yMS01LTM2LjUtMTYuNXQtMTUuNS0yNi41di02ODBxMC0xNSAxMC41LTI2LjV0MjcuNS0xMS41aDg3N3EzMCAwIDMwIDU1dC0zMCA1NWgtODExdjQ4M2gxcTQwLTQyIDEwMi04NHQxMDgtNjFxMTA5LTQ2IDIzMS00NiAxMjEgMCAyMjggNDZ0MTg3IDEyNnE4MSA4MSAxMjYgMTg2IDQ2IDExMiA0NiAyMjl6bS0zMS01ODFxOSA4IDkgMTh0LTUuNSAxOC0xNi41IDIxcS0yNiAyNi0zOSAyNi05IDAtMTYtNy0xMDYtOTEtMjA3LTEzMy0xMjgtNTYtMjc2LTU2LTEzMyAwLTI2MiA0OS0yNyAxMC00NS0zNy05LTI1LTgtMzggMy0xNiAxNi0yMCAxMzAtNTcgMjk5LTU3IDE2NCAwIDMxNiA2NCAxMzcgNTggMjM1IDE1MnoiLz48L3N2Zz4=';
  }
  click = async () => {
    console.log('click');
    Office.context.document.setSelectedDataAsync(this.svgToBase64(), {
      coercionType: Office.CoercionType.Image,
      imageWidth: 100
    }, (asyncResult) => {
      if (asyncResult.status === Office.AsyncResultStatus.Failed) {
        console.log(asyncResult.error.message);
      }
    });
  }

  public render(): JSX.Element {
    const {item, index} = this.props;
    return (
      <div key={index} data-is-scrollable={true}>
        <div className='IconBar'>
          <span dangerouslySetInnerHTML={{ __html: item }} />
          <div className='ms-font-m-plus'>
            <div className='IconName'>{/(?:id='fa-)(\S*)/.exec(item)[0].slice(7, -1)}</div>
            <div className='colorpicker'>
              <img src='https://localhost:3000/assets/kisspng-primary-color.png' height='35' width='35' />
            </div>
            <SwatchColorPicker
              onCellFocused={(_id, color) => {
                this.click();
                console.log(color);
              }}
              columnCount={3}
              cellShape={'circle'}
              colorCells={[
                {
                  id: 'b', label: 'Black', color: '#000000'
                },
                {
                  id: 'g', label: 'Gray', color: '#eaeaea'
                },
                {
                  id: 'w', label: 'White', color: '#ffffff'
                }
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
