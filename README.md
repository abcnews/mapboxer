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

## Styling

Use [Mapbox Studio](https://studio.mapbox.com/) to change styles and add custom geographical features to the map. Publish your new style and set the mapbox url with the `setStyle` prop.

## TODO

* Add more Mapbox API options
* Add ability to programatically add layers

## Demo

http://nucwed.aus.aunty.abc.net.au/news/2019-06-04/mapbox-component/11156202 (ABC Internal only)

## License

MIT © [Joshua Byrd](https://github.com/phocks)
