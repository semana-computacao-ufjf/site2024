"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import Image from "next/image";

export default function MapComponent() {
  const position = { lat: -21.7760983935692, lng: -43.37183297951055 };
  return (
    <Image
      src="/images/map.png"
      alt="Mapa do ICE"
      width={1000}
      height={1000}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}
