import React, { useEffect, useState } from 'react';
import ProximityAlert from './components/alert/ProximityAlert';
import Location from './components/location';
import { geolocationOptions } from './constants/geolocationOptions';
import useWatchLocation from './hooks/useWatchLocation';

function App() {
  const { location, error } = useWatchLocation(geolocationOptions);

  return (
    <div className="appContainer">
      <header>
        <h1>HTML Geolocation API with React Hooks</h1>
      </header>
      {location !== undefined && <ProximityAlert location={location} />}
      <Location location={location} error={error} />
    </div>
  );
}

export default App;
