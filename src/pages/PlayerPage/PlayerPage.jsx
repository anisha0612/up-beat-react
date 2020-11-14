import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class PlayerPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      songs: [],
    };
  }
  playSong = () => {
    this.setState({ isPlaying: true });
  };
  pauseSong = () => {
    this.setState({ isPlaying: false });
  };
  componentDidMount() {
    const corsUrl = "https://cors-anywhere.herokuapp.com/";
    const { trackList } = this.props.location.state;
    axios
      .get(`${corsUrl + trackList}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ songs: response.data.data });
      })

      .catch((err) => console.log(err));
  }
  render() {
    return <div className="PlayerPage"></div>;
  }
}

export default withRouter(PlayerPage);
