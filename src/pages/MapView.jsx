import React, { Component } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {transform} from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import {Vector as VectorLayer} from 'ol/layer';
import {Icon, Style} from 'ol/style';
import locationIcon from '../data/location.png';

  // [47.400886, 8.460047]
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
        
        location.setStyle(iconStyle);

        var vectorSource = new VectorSource({
            features: [location],
        });
        
        var vectorLayer = new VectorLayer({
            source: vectorSource,
        });

        new Map({
            target: 'map',
            layers: [
            new Tile({
                source: new OSM()
            }),
            vectorLayer
            ],
            view: new View({
                center: point,
                zoom: 16
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