import React from "react"

type ItemType = {
    id: string
    firstname: string
    lastname: string
    year: number
}

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

type ItemProps = {
    item: ItemType
}

const ListItem = ({ item }: ItemProps) => (
    <li>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
    </li>
)
