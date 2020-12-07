import React, { Component } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import MapboxVector from 'ol/layer/MapboxVector';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import {transform} from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import {Vector as VectorLayer} from 'ol/layer';
import {Icon, Style} from 'ol/style';
import locationIcon from '../data/location.png';
import {defaults as defaultControls} from 'ol/control';


class MapView extends Component {
    async componentDidMount() {
        let point = transform([8.4600236, 47.4006055], 'EPSG:4326', 'EPSG:3857');
        let location = new Feature({
            geometry: new Point(point),
            name: 'Your SwissCar GmbH',
        });

        var iconStyle = new Style({
            image: new Icon({
                anchor:  [0.5, 50],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: locationIcon,
            }),
        });
        var mapbox = new MapboxVector({
            styleUrl: 'mapbox://styles/mapbox/light-v10',
            accessToken: process.env.REACT_APP_MAPBOX_KEY,
        });

        console.log(process.env.REACT_MAPBOX_KEY)
        
        location.setStyle(iconStyle);

        var vectorSource = new VectorSource({
            features: [location],
        });
        
        var vectorLayer = new VectorLayer({
            source: vectorSource,
        });

        new Map({
            target: 'map',
            interactions: MouseWheelZoom.active = false,
            layers: [
                mapbox,
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
    }

    render() {
        return (
            <div className="page page-map">
                <div id="map" className="map"></div>
            </div>
            
        );
    }
}

export default MapView;