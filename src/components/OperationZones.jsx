import { Link } from "react-router-dom";
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
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Maarif</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Anfa</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Ain Diab</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Ain Sebaâ</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Hay Hassani</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Oasis</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Sidi Maârouf</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Bourgogne</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Belvédère</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Racine</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Gauthier</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Mers Sultan</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Derb Sultan</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Hay Mohammadi</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Ben Msik</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Sbata</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Sidi Bernoussi</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Sidi Moumen</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Val Fleuri</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile CIL</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Bouskoura</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Tamaris</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile El Oulfa</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Lissasfa</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Dar Bouazza</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Roches Noires</Link></li>
          <li className={styles["zone--item"]}><Link to="/soins-infirmiers" className="zone-link">Infirmier à domicile Californie</Link></li>
        </ul>
        <DestinationMap />
      </div>
    </section>
  );
};

export default OperationZones;
