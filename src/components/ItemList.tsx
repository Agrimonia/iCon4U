import * as React from 'react';
import Item from './item';
import './itemList.less';

interface IconListProps {
  result: string[];
}

export default class ItemList extends React.Component<IconListProps, any> {
  constructor(props) {
    super(props);
  }

  public render(): JSX.Element {
    const { result } = this.props;
    const ListIcons = result.map((item, index) => {
      return (
        <Item item={item} index={index} />
      );
    });
    return (
      <div className='ItemList'>
        {ListIcons}
      </div>
    );
  }
}

