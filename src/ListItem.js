import React from 'react'
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItem = (props) => {
    const items = props.items;
    const ListItem = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input 
                    type="text" 
                    id={item.key} 
                    value={item.text} 
                    onChange = {
                        (e) => {
                            props.setUpdate(e.target.value, item.key)
                        }
                    }                
                />
                <span>
                    <FontAwesomeIcon 
                        className="faicons" 
                        icon="trash" 
                        onClick= {() => props.deleteItem(item.key)}
                    />
                </span>
            </p>

        </div>
    })
    return (
        <div>
            {ListItem}
        </div>
    )
}

export default ListItem
