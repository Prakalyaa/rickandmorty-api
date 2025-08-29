import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Location } from "@/types/location";

type Props = {
  location: Location;
};

export function LocationCard({ location }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{location.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Type:</strong> {location.type}</p>
        <p><strong>Dimension:</strong> {location.dimension}</p>
        <p><strong>Residents:</strong> {location.residents.length}</p>
        <p className="text-xs text-gray-500">
          Created: {new Date(location.created).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
