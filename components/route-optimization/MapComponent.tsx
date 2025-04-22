'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { DeliveryRequest, Vehicle, RouteSolution } from '../../types/route-optimization';
import type { LatLngTuple } from 'leaflet';

interface MapComponentProps {
  requests: DeliveryRequest[];
  vehicles: Vehicle[];
  solution: RouteSolution | null;
}

// Default center (San Francisco)
const DEFAULT_CENTER = {
  lat: 37.7749,
  lng: -122.4194
};

export default function MapComponent({ requests, vehicles, solution }: MapComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof window === 'undefined') {
    return <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-lg" />;
  }

  // Create icons
  const iconPerson = new L.Icon({
    iconUrl: '/leaflet/marker-icon-red.png',
    iconRetinaUrl: '/leaflet/marker-icon-2x-red.png',
    shadowUrl: '/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const iconDelivery = new L.Icon({
    iconUrl: '/leaflet/marker-icon-green.png',
    iconRetinaUrl: '/leaflet/marker-icon-2x-green.png',
    shadowUrl: '/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const iconVehicle = new L.Icon({
    iconUrl: '/leaflet/marker-icon-blue.png',
    iconRetinaUrl: '/leaflet/marker-icon-2x-blue.png',
    shadowUrl: '/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Calculate map bounds
  const locations = [
    ...requests.map(r => [r.pickup, r.delivery]).flat(),
    ...vehicles.map(v => v.currentLocation)
  ];

  let center = DEFAULT_CENTER;
  if (locations.length > 0) {
    const bounds = locations.reduce(
      (acc, loc) => ({
        minLat: Math.min(acc.minLat, loc.lat),
        maxLat: Math.max(acc.maxLat, loc.lat),
        minLng: Math.min(acc.minLng, loc.lng),
        maxLng: Math.max(acc.maxLng, loc.lng)
      }),
      { minLat: Infinity, maxLat: -Infinity, minLng: Infinity, maxLng: -Infinity }
    );

    center = {
      lat: (bounds.minLat + bounds.maxLat) / 2,
      lng: (bounds.minLng + bounds.maxLng) / 2
    };
  }

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden ">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={13}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        className="z-0 bg-transparent"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {requests.map((request) => (
          <div key={`request-${request.id}`}>
            <Marker
              position={[request.pickup.lat, request.pickup.lng]}
              icon={iconPerson}
            >
              <Popup>Pickup: {request.id}</Popup>
            </Marker>
            <Marker
              position={[request.delivery.lat, request.delivery.lng]}
              icon={iconDelivery}
            >
              <Popup>Delivery: {request.id}</Popup>
            </Marker>
          </div>
        ))}

        {vehicles.map((vehicle) => (
          <Marker
            key={`vehicle-${vehicle.id}`}
            position={[vehicle.currentLocation.lat, vehicle.currentLocation.lng]}
            icon={iconVehicle}
          >
            <Popup>Vehicle: {vehicle.id}</Popup>
          </Marker>
        ))}

        {solution?.routes.map((route, index) => {
          const routeColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
          const positions: LatLngTuple[] = route.stops.map(stop => [stop.location.lat, stop.location.lng]);
          
          return (
            <Polyline
              key={`route-${index}`}
              positions={positions}
              pathOptions={{
                color: routeColor,
                weight: 3,
                opacity: 0.7
              }}
            >
              <Popup>Route {index + 1}</Popup>
            </Polyline>
          );
        })}
      </MapContainer>
    </div>
  );
} 