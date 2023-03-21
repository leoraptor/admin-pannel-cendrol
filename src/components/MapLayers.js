import React, { useRef, useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { Style, Circle, Fill } from "ol/style";
import TileLayer from "ol/layer/Tile.js";
import OSM from "ol/source/OSM";
function MapLayers() {
  const mapRef = useRef(null);
  const points = [
    [-75.1652, 39.9526], // Philadelphia
    [-73.9352, 40.7306], // New York City
    [-77.0369, 38.9072], // Washington, D.C.
  ];

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: points.map((point) => {
              const [lon, lat] = point;
              return new Feature({
                geometry: new Point(fromLonLat([lon, lat])),
              });
            }),
          }),
          style: new Style({
            image: new Circle({
              radius: 8,
              fill: new Fill({
                color: "#FF5722",
              }),
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([points[0][0], points[0][1]]),
        zoom: 10,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, [points]);

  return <div ref={mapRef} style={{ width: "100%", height: "85vh" }}></div>;
}

export default MapLayers;
