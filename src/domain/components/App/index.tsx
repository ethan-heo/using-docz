import React from "react"

import List from "../List"

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
