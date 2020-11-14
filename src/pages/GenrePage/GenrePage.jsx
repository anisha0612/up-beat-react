import React from "react";
import axios from "axios";
import CardList from "../../components/CardList/CardList.jsx";

class GenrePage extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      genreList: [
        "Hits",
        "Pop",
        "Hip Hop",
        "Rock",
        "Country",
        "Dance",
        "Jazz",
        "The '80s",
        "Disco",
      ],
      genre: [],
    };
  }

  addGenre = () => {
    for (let type of this.state.genreList) {
      let newGenre = this.state.result.find((genre) => genre.title === type);
      this.setState({ genre: [...this.state.genre, newGenre] });
    }
    console.log(this.state);
  };

  componentDidMount() {
    const corsUrl = "https://cors-anywhere.herokuapp.com/";
    const genreUrl = "https://api.deezer.com/genre/0/radios";

    axios
      .get(`${corsUrl + genreUrl}`)
      .then((response) => {
        this.setState({ result: response.data.data });
        // console.log(this.state.result);
        this.addGenre();
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="GenrePage">
        <CardList genre={this.state.genre} />
      </div>
    );
  }
}

export default GenrePage;
