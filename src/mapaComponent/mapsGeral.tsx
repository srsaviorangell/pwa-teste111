import { MapContainer, TileLayer } from 'react-leaflet'

export default function MapaGeral() {
  return (
    <MapContainer
      center={[-11.297384, -41.851860]}
      zoom={17}
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}