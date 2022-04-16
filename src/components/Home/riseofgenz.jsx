// IMAGE IMPORTS

const styles = {

  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  }
}
import Rise from "../../../images/rise.svg";
const riseofgen = () => {
  return (
    <div className="text-blue pt-64">
      <img src={Rise} alt="" style={styles.img} />
    </div>
  )
}

export default riseofgen