import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import config from "./config"; // Try not to commit API tokens to GitHub
import styles from "./styles.css";

mapboxgl.accessToken = config.MAPBOX_KEY;

let map;

const Mapboxer = React.memo(props => {
  const inputEl = useRef(null);

  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    map = new mapboxgl.Map({
      container: inputEl.current,
      attributionControl: false,
      style: props.styleUrl,
      // center: [137.256953, -29.87192],
      // zoom: props.zoomFactor,
      interactive: false
      // scrollZoom: false
    });

    setInitialised(true);
  }, []);

  useEffect(() => {
    if (!initialised) return;
    // map.setStyle(props.styleUrl);
    // map.setZoom(props.zoomFactor);
    // console.log(map)
    console.log("effect");

    const random = Math.random();
    if (random < 0.3333) {
      map.flyTo({
        center: [153.02809, -27.46794],
        zoom: 5.5,
        pitch: 0,
        bearing: 0,
        screenSpeed: 0.8
      });
    } else if (random > 0.3333 && random < 0.6666) {
      map.flyTo({
        center: [133.7751, -25.2744],
        zoom: 3,
        bearing: 0,
        pitch: 0,
        screenSpeed: 0.8
      });
    } else if (random > 0.6666) {
      map.flyTo({
        center: [144.9631, -37.8136],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        screenSpeed: 0.8
      });
    }
  }, [props.styleUrl, props.zoomFactor, props.destination]);

  return <div className={styles.root} ref={inputEl} />;
});

Mapboxer.defaultProps = {
  styleUrl: "mapbox://styles/mapbox/light-v10"
}

export default Mapboxer;
