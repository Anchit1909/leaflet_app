import React from "react";
import { MapContainer, TileLayer, Popup, Circle } from "react-leaflet";
import Data from "../utils/data";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <MapContainer
      minZoom={3}
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
      className="w-screen h-[94vh]"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {Data.map((val, index) => {
        let color;

        let data = val.data;
        if (data < 300) {
          color = "rgb(252 165 165)";
        } else if (data > 300 && data < 500) {
          color = "rgb(248 113 113)";
        } else if (data > 500 && data < 700) {
          color = "rgb(239 68 68)";
        } else {
          color = "rgb(220 38 38)";
        }

        return (
          <Circle
            key={index}
            color={color}
            fillOpacity={0.5}
            center={val.coordinate}
            radius={val.data + 1000000 / 3}
          >
            <Popup>
              <div className="flex flex-col space-y-1 p-2">
                <h5 className="text-base">
                  <span className="font-bold">Region:</span> {val.region}
                </h5>
                <h6 className="text-base">
                  <span className="font-bold">Available Network:</span>{" "}
                  {val.data}
                </h6>
                <h6 className="text-base">
                  <span className="font-bold">Usage:</span> $
                  {Math.round((val.data / 3) * 2)}
                </h6>
              </div>
            </Popup>
          </Circle>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
