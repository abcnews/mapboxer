import React, { useEffect, useState, useRef } from "react";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

// CSS Modules
import styles from "./styles.scss";

let map; // Mapbox

const Mapboxer = props => {
  // Setup element reference for Mapbox to attach to
  const inputEl = useRef(null);

  // Set up state
  const [initialised, setInitialised] = useState(false);

  // On mount initialisation code
  useEffect(() => {
    mapboxgl.accessToken = props.apiKey;

    map = new mapboxgl.Map({
      container: inputEl.current,
      attributionControl: props.attributionControl,
      style: props.setStyle,
      interactive: props.interactive, // Stops mouse stopping animation
      bounds: props.setBounds,
      antialias: props.antialias
    });

    setInitialised(true);
  }, []);

  // Set map style on props change
  useEffect(() => {
    if (!initialised) return;
    map.setStyle(props.setStyle);
  }, [props.setStyle]);

  // Set map bounds instantly on props change
  useEffect(() => {
    if (!initialised || map.isMoving()) return;
    map.fitBounds(props.setBounds, { animate: false });
  }, [props.setBounds]);

  // Fit to bounds with animation
  useEffect(() => {
    if (!initialised) return;
    // Allow fit bounds options
    if (typeof props.fitBoundsOptions === "undefined") map.fitBounds(props.fitBounds);
    else map.fitBounds(props.fitBounds, props.fitBoundsOptions);
  }, [props.fitBounds]);

  // Instantly set zoom
  useEffect(() => {
    if (!initialised || map.isMoving()) return;
    map.setZoom(props.setZoom);
  }, [props.setZoom]);

  // Flying animation
  useEffect(() => {
    if (!initialised) return;
    map.flyTo(props.flyTo);
  }, [props.flyTo]);

  // Easing animation
  useEffect(() => {
    if (!initialised) return;
    map.easeTo(props.easeTo);
  }, [props.easeTo]);

  // Jump immediately to a point
  useEffect(() => {
    if (!initialised) return;
    map.jumpTo(props.jumpTo);
  }, [props.jumpTo]);

  return (
    <div className={styles.root} ref={inputEl}>
      {props.children}
    </div>
  );
};

Mapboxer.defaultProps = {
  setStyle: "mapbox://styles/mapbox/light-v10",
  setBounds: [[103.4, -47.7], [163.0, -2.7]], // Australia by default
  attributionControl: {},
  interactive: false,
  antialias: false
};

export default Mapboxer;
