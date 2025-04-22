export interface Location {
  lat: number;
  lng: number;
}

export interface DeliveryRequest {
  id: string;
  pickup: Location;
  delivery: Location;
}

export interface Vehicle {
  id: string;
  currentLocation: Location;
}

export interface RouteStop {
  location: Location;
  type: 'pickup' | 'delivery';
  requestId: string;
}

export interface Route {
  stops: RouteStop[];
}

export interface RouteSolution {
  routes: Route[];
} 