import React from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Circle,
  Rectangle,
} from "react-leaflet";
import Data from "../utils/data";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <MapContainer
      minZoom={3}
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
      className="w-screen h-[88vh]"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {Data.map((val, index) => {
        let color;

        let data = val.data;
        if (data < 300) {
          color = "#00008B";
        } else if (data > 300 && data < 500) {
          color = "#00468B";
        } else if (data > 500 && data < 700) {
          color = "#0096FF";
        } else {
          color = "#0000FF";
        }

        const southWest = [
          val.coordinate[0] - val.data / 200, //200 is used randomly to shrink the size of the square accoring to the map.
          val.coordinate[1] - val.data / 200,
        ];
        const northEast = [
          val.coordinate[0] + val.data / 200,
          val.coordinate[1] + val.data / 200,
        ];

        return (
          <Rectangle
            key={index}
            bounds={[southWest, northEast]}
            color={color}
            fillOpacity={0.5}
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
          </Rectangle>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
