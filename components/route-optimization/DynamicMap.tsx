import dynamic from 'next/dynamic';
import type { DeliveryRequest, Vehicle, RouteSolution } from '../../types/route-optimization';

const DynamicMap = dynamic(
  () => import('./MapComponent'),
  { 
    ssr: false,
    loading: () => <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-lg" />
  }
);

interface DynamicMapProps {
  requests: DeliveryRequest[];
  vehicles: Vehicle[];
  solution: RouteSolution | null;
}

export default function DynamicMapWrapper(props: DynamicMapProps) {
  return <DynamicMap {...props} />;
} 