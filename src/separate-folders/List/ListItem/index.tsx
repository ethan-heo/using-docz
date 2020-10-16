import React from "react"

export type ItemType = {
    id: string
    firstname: string
    lastname: string
    year: number
}

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

export default ListItem
