import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./map.module.css";
import { useEffect, useState } from "react";
import PageHeader from "../PageHeader/Pageheader";

const coordinates: [number, number] = [8.49664, 4.54214];
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

type LocationType = {
  city: string;
  continent: string;
  countryName: string;
  countryCode: string;
};

function Map() {
  const [isLoading, setIsLoading] = useState(false);
  const [locationDets, setLocationDets] = useState<LocationType>({
    city: "",
    continent: "",
    countryName: "",
    countryCode: "",
  });

  useEffect(() => {
    const fetchLocationDets = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${BASE_URL}?latitude${coordinates[0]}?longitude${coordinates[1]}`
        );
        const data = await res.json();
        setLocationDets(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocationDets();
  }, [coordinates]);

  return (
    <>
      <PageHeader title="My location" />

      <div className={styles.map_wrapper}>
        <div className={styles.location_details}>
          <div className={styles.location_details_item}>
            <h3 className={styles.title}>City</h3>
            <p className={styles.value}>
              {isLoading ? "loading..." : locationDets.city}
            </p>
          </div>

          <div className={styles.location_details_item}>
            <h3 className={styles.title}>Country</h3>
            <p className={styles.value}>
              {isLoading
                ? "loading..."
                : locationDets.countryName +
                  " " +
                  "(" +
                  locationDets.countryCode +
                  ")"}
            </p>
          </div>

          <div className={styles.location_details_item}>
            <h3 className={styles.title}>Continent</h3>
            <p className={styles.value}>
              {isLoading ? "loading..." : locationDets.continent}
            </p>
          </div>
        </div>

        <MapContainer
          center={coordinates}
          zoom={6}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
