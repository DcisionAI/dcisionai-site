import { useState } from 'react';
import DynamicMap from '../../components/route-optimization/DynamicMap';
import type { DeliveryRequest, Vehicle, RouteSolution } from '../../types/route-optimization';

// Sample data for the demo
const sampleRequests: DeliveryRequest[] = [
  {
    id: 'R1',
    pickup: { lat: 37.7749, lng: -122.4194 },
    delivery: { lat: 37.7833, lng: -122.4167 }
  },
  {
    id: 'R2',
    pickup: { lat: 37.7750, lng: -122.4184 },
    delivery: { lat: 37.7843, lng: -122.4177 }
  }
];

const sampleVehicles: Vehicle[] = [
  {
    id: 'V1',
    currentLocation: { lat: 37.7749, lng: -122.4194 }
  },
  {
    id: 'V2',
    currentLocation: { lat: 37.7750, lng: -122.4184 }
  }
];

const sampleSolution: RouteSolution = {
  routes: [
    {
      stops: [
        { location: sampleVehicles[0].currentLocation, type: 'pickup', requestId: 'R1' },
        { location: sampleRequests[0].pickup, type: 'pickup', requestId: 'R1' },
        { location: sampleRequests[0].delivery, type: 'delivery', requestId: 'R1' }
      ]
    },
    {
      stops: [
        { location: sampleVehicles[1].currentLocation, type: 'pickup', requestId: 'R2' },
        { location: sampleRequests[1].pickup, type: 'pickup', requestId: 'R2' },
        { location: sampleRequests[1].delivery, type: 'delivery', requestId: 'R2' }
      ]
    }
  ]
};

export default function RouteOptimizationDemo() {
  const [requests, setRequests] = useState<DeliveryRequest[]>(sampleRequests);
  const [vehicles, setVehicles] = useState<Vehicle[]>(sampleVehicles);
  const [solution, setSolution] = useState<RouteSolution | null>(sampleSolution);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Route Optimization Demo
          </h1>
          <p className="text-xl text-gray-600">
            Visualize how DcisionAI optimizes delivery routes in real-time
          </p>
        </div>

        <div className="bg-transparent p-6 mb-8">
          <DynamicMap
            requests={requests}
            vehicles={vehicles}
            solution={solution}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Delivery Requests
            </h2>
            <div className="space-y-4">
              {requests.map((request) => (
                <div key={request.id} className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">Request {request.id}</h3>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Pickup: ({request.pickup.lat}, {request.pickup.lng})</p>
                    <p>Delivery: ({request.delivery.lat}, {request.delivery.lng})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Vehicles
            </h2>
            <div className="space-y-4">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">Vehicle {vehicle.id}</h3>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Current Location: ({vehicle.currentLocation.lat}, {vehicle.currentLocation.lng})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 