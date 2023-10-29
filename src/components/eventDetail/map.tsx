import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function Map({konum}: {konum: [number, number]}) {
  // const konum:[number,number] = [39.9208, 32.8541]; // remove this line

  return (
    <div style={{ height: "300px", width: "400px", border:'10px #FFA559 solid ', borderRadius: '15px', overflow: 'hidden' }}>
      <MapContainer center={konum} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={konum}>
          <Popup>
           Ankara 
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
