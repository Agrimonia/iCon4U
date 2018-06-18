import * as React from 'react';

import Item from './item';
// import { svgToBase64 } from '../loadsvg';
import { windows } from '../base64';
interface IconListProps {
  result: string[];
}

export default class ItemList extends React.Component<IconListProps, any> {
  constructor(props) {
    super(props);
  }
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
    const { result } = this.props;
    const ListIcons = result.map((item, index) => {
      return (
        Item(item, index)
      );
    });
    return (
      <div className='ItemList'>
        {ListIcons}
      </div>
    );
  }
}

