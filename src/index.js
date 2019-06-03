import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import styles from "./styles.scss";

console.log(styles)

let map; // Mapbox

const Mapboxer = props => {
  const inputEl = useRef(null);

  const [initialised, setInitialised] = useState(false);

  // On mount initialisation code
  useEffect(() => {
    mapboxgl.accessToken = props.apiKey;

    map = new mapboxgl.Map({
      container: inputEl.current,
      attributionControl: false,
      style: props.setStyle,
      interactive: false, // Stops mouse stopping animation
      bounds: props.setBounds // Australia [[103.4,-47.7],[163.0,-2.7]]
    });

    setInitialised(true);
  }, []);

  // Update map style
  useEffect(() => {
    if (!initialised) return;
    map.setStyle(props.setStyle);
  }, [props.setStyle]);

  // Update map bounds
  useEffect(() => {
    if (!initialised) return;
    map.fitBounds(props.setBounds, {animate: false});
  }, [props.setBounds])

  return <div className={styles.root} ref={inputEl} />;
};

Mapboxer.defaultProps = {
  setStyle: "mapbox://styles/mapbox/light-v10",
  setBounds: [[103.4,-47.7],[163.0,-2.7]]
}

export default Mapboxer;
