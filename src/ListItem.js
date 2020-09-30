import React from 'react'
import './ListItem.css';

const ListItem = (props) => {
    const items = props.items;
    const ListItem = items.map(item => {
        return <div className="list" key="item.key">
            <p>{item.text}</p>
        </div>
    })
    return (
        <div>
            {ListItem}
        </div>
    )
}

export default ListItem
