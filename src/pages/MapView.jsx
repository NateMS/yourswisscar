import { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {transform} from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import {Vector as VectorLayer} from 'ol/layer';
import {Icon, Style} from 'ol/style';
import Overlay from 'ol/Overlay';
import {defaults as defaultControls} from 'ol/control';

const pinSvg = (fill) => 'data:image/svg+xml,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 24 36">` +
    `<path fill="${fill}" d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0zm0 16.2c-2.3 0-4.2-1.9-4.2-4.2S9.7 7.8 12 7.8s4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"/>` +
    `</svg>`
);

function MapView() {
    useEffect(() => {
        const point = transform([8.4600236, 47.4006055], 'EPSG:4326', 'EPSG:3857');
        const location = new Feature({
            geometry: new Point(point),
            name: 'Your SwissCar GmbH',
        });

        const iconOptions = {
            anchor: [0.5, 1],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            scale: 1.2,
        };

        const defaultStyle = new Style({
            image: new Icon({ ...iconOptions, src: pinSvg('#000000') }),
        });

        const hoverStyle = new Style({
            image: new Icon({ ...iconOptions, src: pinSvg('#8B0000') }),
        });

        location.setStyle(defaultStyle);

        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [location],
            }),
        });

        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({ source: new OSM() }),
                vectorLayer
            ],
            controls: defaultControls({attribution: false}),
            view: new View({
                center: point,
                zoom: 16,
                minZoom: 12,
                maxZoom: 19
            })
        });

        const label = document.createElement('div');
        label.className = 'map-label';
        label.innerHTML = '<strong>Your SwissCar GmbH</strong><br>Bernstrasse 27, 8952 Schlieren';
        const overlay = new Overlay({
            element: label,
            position: point,
            positioning: 'bottom-center',
            offset: [0, -50],
        });
        map.addOverlay(overlay);

        map.on('singleclick', (e) => {
            map.forEachFeatureAtPixel(e.pixel, () => {
                window.open('https://www.google.com/maps/search/?api=1&query=Your+SwissCar+GmbH+Bernstrasse+27+8952+Schlieren', '_blank');
            });
        });

        map.getViewport().style.cursor = 'default';
        map.on('pointermove', (e) => {
            const hit = map.hasFeatureAtPixel(e.pixel);
            map.getViewport().style.cursor = hit ? 'pointer' : 'default';
            location.setStyle(hit ? hoverStyle : defaultStyle);
        });

        return () => map.setTarget(null);
    }, []);

    return (
        <div className="page page-map">
            <div id="map" className="map"></div>
        </div>
    );
}

export default MapView;
