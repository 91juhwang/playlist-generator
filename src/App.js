import React, { Component } from "react";
import "./App.css";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "YOUR_CLIENT_ID_GOES_HERE";
const redirectUri = "http://localhost:3000";

class App extends Component {
   render() {
    return (
      <div className="App">
        <header className="button__container">
          <button
            className="button"
          >
            Login to Spotify
          </button>
        </header>
      </div>
    );
  }
}
export default App;


// import React from "react";

// const stateKey = "spotify_auth_state";

// const SpotifyLogin = class extends React.Component {
//   ComponentDidMount() {
//     localStorage.removeItem(stateKey);
//   }

//   handleClick = () => {
//     const client_id = "e5abbee6e0fd4e4bbd080c6d212ca520";
//     const redirect_uri = "http://localhost:3000";
//     const scope = "user-read-private user-read-email";
//     const state = generateRandomString(16);

//     localStorage.setItem(stateKey, state);

//     let url = "https://accounts.spotify.com/authorize";
        // url += "?response_type=token";
        // url += `&client_id=${encodeURIComponent(client_id)}`;
        // url += `&scope=${encodeURIComponent(scope)}`;
        // url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
        // url += `&state=${encodeURIComponent(state)}`;

//     window.location = url;
//   };

//   render() {
//     return <button onClick={this.handleClick}>Log in</button>;
//   }
// };

// const generateRandomString = length => {
//   let text = "";
//   const possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   while (text.length <= length) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }

//   return text;
// };

// export default SpotifyLogin;
