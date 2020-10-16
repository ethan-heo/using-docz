import React from "react"

import ListItem, { ItemType } from "./ListItem"

type ListType = ItemType[]

type ListProps = {
    list: ListType
}

const List = ({ list }: ListProps) => (
    <ul>
        {list.map(item => (
            <ListItem key={item.id} item={item} />
        ))}
    </ul>
)

export default List
