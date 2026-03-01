import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default icon for Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// import styles from "./OperationZones.module.css";
import "leaflet/dist/leaflet.css";
import DestinationMap from "./UI/DestinationMap";
import styles from "./OperationZones.module.css";

const OperationZones = () => {
  return (
    <section className="container">
      <h2 className="secondary-heading center-text u-margin-bottom-medium heading--color">
        Infirmier à domicile à Casablanca : Zones d&apos;intervention
      </h2>
      <div className={`${styles.zones} "layout-content"`}>
        <ul className={`${styles["zones--list"]} layout-text`}>
          <li className={styles["zone--item"]}>Infirmier à domicile anfa</li>
          <li className={styles["zone--item"]}>Infirmier à domicile maarif</li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile ain diab
          </li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile ain sbaa
          </li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile sidi bernoussi
          </li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile val fleuri
          </li>
          <li className={styles["zone--item"]}>Infirmier à domicile CIL</li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile bourgone
          </li>
          <li className={styles["zone--item"]}>Infirmier à domicile racine</li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile gauthier
          </li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile sidi moumen
          </li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile bouskoura
          </li>
          <li className={styles["zone--item"]}>Infirmier à domicile tamaris</li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile El oulfa
          </li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile mers sultan
          </li>
          <li className={styles["zone--item"]}>
            Infirmier à domicile a californie
          </li>
        </ul>
        <DestinationMap />
      </div>
    </section>
  );
};

export default OperationZones;
