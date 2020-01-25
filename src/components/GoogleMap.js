import React, { Component } from "react";

class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }

    initMap(google) {
        let map = new google.maps.Map(document.getElementById("google-map"), {
            center: this.props.center,
            zoom: this.props.zoom
        });
    }

    loadScript() {
        const googleMapApiUrl =
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvPZ7UFk_aVyLAhi4Yev2KaHBQunGmjJk&callback=resolveGoogleMapsPromise";

        const googleMapPromise = new Promise(resolve => {
            window.resolveGoogleMapsPromise = () => {
                const google = window.google;
                resolve(google);

                delete window.resolveGoogleMapsPromise;
            };

            const script = document.createElement("script");
            script.src = googleMapApiUrl;
            script.async = true;
            document.head.appendChild(script);
        });

        return googleMapPromise;
    }

    componentDidMount() {
        this.loadScript().then(google => {
            this.initMap(google);
        });
    }

    render() {
        return (
            <div>
                <div id="google-map"></div>
            </div>
        );
    }
}

export default GoogleMap;
