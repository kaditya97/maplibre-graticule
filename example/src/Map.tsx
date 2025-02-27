import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import MaplibreGraticule from 'maplibre-graticule';

const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: {
                version: 8,
                glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
                sources: {
                    osm: {
                        type: 'raster',
                        tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        tileSize: 256,
                        attribution: '&copy; OpenStreetMap Contributors',
                        maxzoom: 25
                    },
                },
                layers: [
                    {
                        id: 'osm',
                        type: 'raster',
                        source: 'osm'
                    }
                ],
            },
            center: [85.324, 27.717],
            zoom: 7,
        });

        map.on('load', () => {
            const graticule = new MaplibreGraticule({
                minZoom: 0,
                maxZoom: 20,
                showLabels: true,
                labelType: 'hdms',
                labelSize: 12,
                labelColor: "#0000ee",
                longitudePosition: 'bottom',
                latitudePosition: 'right',
                paint: {
                    'line-opacity': 0.8,
                    'line-color': "rgba(255,120,0,0.9)",
                    'line-dasharray': [2, 1],
                }
            });
            map.addControl(graticule);
        });

        return () => map.remove(); // Cleanup map instance on unmount
    }, []);

    return <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />;
};

export default Map;
