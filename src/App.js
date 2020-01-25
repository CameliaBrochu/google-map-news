import React from "react";
import GoogleMap from "./components/GoogleMap";
import "./App.css";

function App() {
    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 8;

    return (
        <div className="App">
            <header className="App-header"></header>
            <GoogleMap center={center} zoom={zoom} />
        </div>
    );
}

export default App;
