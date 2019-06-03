import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import styles from "./styles.css";

let map;

const Mapboxer = React.memo(props => {
  const inputEl = useRef(null);

  const [initialised, setInitialised] = useState(false);

  // On mount initialisation code
  useEffect(() => {
    mapboxgl.accessToken = props.apiKey;
    map = new mapboxgl.Map({
      container: inputEl.current,
      attributionControl: false,
      style: props.styleUrl,
      interactive: false // Stops mouse stopping animation
    });

    setInitialised(true);
  }, []);

  // Update map style
  useEffect(() => {
    if (!initialised) return;
    map.setStyle(props.styleUrl);
  }, [props.styleUrl]);

  return <div className={styles.root} ref={inputEl} />;
});

Mapboxer.defaultProps = {
  styleUrl: "mapbox://styles/mapbox/light-v10"
}

export default Mapboxer;
