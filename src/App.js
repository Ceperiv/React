import React from "react";
import './App.css';
import Character from "./components/Сharacter";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataIsLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://rickandmortyapi.com/api/character")
            .then((value) => value.json())
            .then((value) => {
                this.setState({
                    items: value.results.slice(0, 8),
                    DataIsLoaded: true
                });
            })

    }


    render() {
        const {DataIsLoaded, items} = this.state;
        if (!DataIsLoaded) return <div>
            <h1 className={'wait'}> Please wait.... </h1></div>;

        return items.map((value) => {
            console.log(value);
            return (

                // <p>{value.name}</p>
                <Character
                    userId={value.id}
                    userName={value.name}
                    status={value.status}
                    species={value.species}
                    gender={value.gender}
                    image={value.image}

                />
            )
        })
    }

    // catch (err) {console.warn(err)}
}

export default App;