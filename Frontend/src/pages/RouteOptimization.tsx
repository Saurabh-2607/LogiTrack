import React, { useState } from 'react';

interface Location {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

const RouteOptimization: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [optimizedRoute, setOptimizedRoute] = useState<Location[]>([]);

    const addLocation = (location: Location) => {
        setLocations([...locations, location]);
    };

    const optimizeRoute = () => {
        // Placeholder for route optimization logic
        // For simplicity, we'll just sort locations by id
        const sortedLocations = [...locations].sort((a, b) => a.id - b.id);
        setOptimizedRoute(sortedLocations);
    };

    return (
        <div>
            <h1>Route Optimization</h1>
            <button onClick={optimizeRoute}>Optimize Route</button>
            <h2>Locations</h2>
            <ul>
                {locations.map(location => (
                    <li key={location.id}>{location.name}</li>
                ))}
            </ul>
            <h2>Optimized Route</h2>
            <ul>
                {optimizedRoute.map(location => (
                    <li key={location.id}>{location.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RouteOptimization;