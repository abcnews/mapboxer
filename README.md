# Mapboxer

> A Mapbox component for React

[![NPM](https://img.shields.io/npm/v/mapboxer.svg)](https://www.npmjs.com/package/mapboxer) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```bash
npm install
```

## Usage

```jsx
import React, { useState } from "react";
import Mapboxer from "mapboxer";

const Mapboxer = props => {
  const [flyTo, setFlyTo] = useState({});

  const someEvent = () => {
    setFlyTo({
      center: [115.857, -31.95],
      index: 0,
      zoom: 9,
      pitch: 60,
      bearing: -10,
      screenSpeed: 0.5
    });
  };

  return (
    <MyComponent
      apiKey={`put your Mapbox api key here`}
      setStyle={"mapbox://styles/mapbox/satellite-v9"}
      fitBounds={[[135.82, -32.873], [158.11, -8.51]]}
      setZoom={3}
      interactive={false}
      flyTo={flyTo}
      antialias={false}
    />
  );
};
```

## License

MIT © [Joshua Byrd](https://github.com/phocks)
