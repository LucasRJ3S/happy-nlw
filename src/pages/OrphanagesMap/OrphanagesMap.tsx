import React from 'react';
import { Container } from './orphanages-map'
import mapMarkerImg from '../../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Link } from 'react-router-dom';

export const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Duque de Caxias</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>

      <Map
        center={[-22.7372773, -43.3212234]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Container>
  )
}
