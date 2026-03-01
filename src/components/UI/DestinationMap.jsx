import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet default marker
const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const casablanca = [33.581127, -7.6164313];

const neighborhoods = [
  { name: "Anfa", coords: [33.5857, -7.6332] },
  { name: "Maarif", coords: [33.589, -7.6158] },
  { name: "Ain Diab", coords: [33.5743, -7.655] },
  { name: "Sidi Bernoussi", coords: [33.6075, -7.5478] },
  { name: "Ain Sbaa", coords: [33.5971678, -7.5697526] },
  { name: "Val Fleuri", coords: [33.5748628, -7.63987] },
  { name: "Gauthier", coords: [33.5905, -7.6187] },
  { name: "Bourgogne", coords: [33.5924, -7.6168] },
  { name: "Mers Sultan", coords: [33.5766399, -7.6186173] },
  { name: "Californie", coords: [33.5358332, -7.642031] },
  { name: "Polo", coords: [33.5520696, -7.6119376] },
  { name: "Al Fida", coords: [33.5678412, -7.613182] },
  { name: "Sidi Moumen", coords: [33.5976011, -7.544768] },
  { name: "Roches Noires", coords: [33.6072184, -7.5867637] },
  { name: "Hay Hassani", coords: [33.5696048, -7.6876519] },
];

// Colors for each route
const colors = [
  "red",
  "royalblue",
  "green",
  "orange",
  "purple",
  "teal",
  "gold",
  "crimson",
  "darkcyan",
];

export default function DestinationMap() {
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDashOffset((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={casablanca}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Colorful map style */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* Main city marker */}
        <Marker position={casablanca}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            Casablanca
          </Tooltip>
        </Marker>

        {/* Neighborhood markers + animated colored routes */}
        {neighborhoods.map((nb, idx) => (
          <div key={idx}>
            <Marker position={nb.coords}>
              <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                {nb.name}
              </Tooltip>
            </Marker>

            <Polyline
              positions={[casablanca, nb.coords]}
              pathOptions={{
                color: colors[idx % colors.length],
                weight: 5,
                opacity: 0.9,
                dashArray: "8,12",
                dashOffset: `${dashOffset}`,
                lineCap: "round",
              }}
            />
          </div>
        ))}
      </MapContainer>
    </section>
  );
}
