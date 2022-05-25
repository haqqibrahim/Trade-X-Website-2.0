// IMAGE IMPORTS
import Map from "../../../../images/map.svg";

const styles = {
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
};

const MobileMapping = () => {
  return (
    <>
      <div className="p-10">
        <img src={Map} alt="map" style={styles.img} />
      </div>
    </>
  );
};

export default MobileMapping;
