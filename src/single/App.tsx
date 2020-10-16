import React from "react"

const list = [
    {
        id: "a",
        firstname: "Robin",
        lastname: "Wieruch",
        year: 1988
    },
    {
        id: "b",
        firstname: "Dave",
        lastname: "Davidds",
        year: 1990
    }
]

const App = () => <List list={list} />

export default App

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
