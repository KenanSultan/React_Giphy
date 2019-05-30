import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM
import axios from 'axios';

var gifs = []

axios.get('https://api.giphy.com/v1/gifs/search?api_key=O5LyiGH753b9EWs8TEN6LL0DLtx8wqNm&q=cat&limit=25&offset=0&rating=G&lang=en').then((response) => {
    gifs = response.data.data.map((val, i) => {
        return (<li>
            <img src={val.images['480w_still'].url}/>
                </li>)
    })
    ReactDOM.render(<ul>{gifs}</ul>, document.querySelector("#root"));
})


