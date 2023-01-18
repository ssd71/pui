import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";

const Map = (props) => {
    return (
        <MapContainer
            doubleClickZoom={false}
            id="mapId"
            zoom={13}
            scrollWheelZoom={false}
            center={[48.863021766875804, 2.3393793633770503]}
        >
            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
            />
            <RoutineMachine />
        </MapContainer>
    );
};

export default Map;