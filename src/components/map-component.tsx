"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import Image from "next/image";

export default function MapComponent() {
  const position = { lat: -21.7760983935692, lng: -43.37183297951055 };
  return (
    // <MapContainer
    //   center={position}
    //   zoom={30}
    //   scrollWheelZoom={true}
    //   className=" border-[3px] border-purple-700 rounded-3xl"
    //   style={{ height: "100%", width: "100%" }}
    // >
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <Marker
    //     position={position}
    //     icon={
    //       new Icon({
    //         iconUrl: "/images/marker.png",
    //         iconSize: [60, 60],
    //         iconAnchor: [30, 41],
    //       })
    //     }
    //   >
    //     <Popup>
    //       <span className="text-red-950">
    //         Instituto de Ciências Exatas - ICE <br /> Universidade Federal de
    //         Juiz de Fora
    //       </span>
    //     </Popup>
    //   </Marker>
    // </MapContainer>
    <Image src="/images/map.png" alt="Mapa do ICE" width={1000} height={1000} />
  );
}
