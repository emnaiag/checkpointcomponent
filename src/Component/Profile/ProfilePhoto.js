import image from "../../assets/photo.jpg";
import background from "../../assets/backgr.jpg";
function ProfilePhoto() {
  return (
    <div>
      <header>
        {" "}
        <img
          src={background}
          alt="background"
          style={{ width: "100%",height:'200px', padding: "20px 0px" }}
        />{" "}
      </header>
      <div style={{ textAlign: "center" }}>
        <img
          src={image}
          height={150}
          width={150}
          style={{
            border: "3px solid #fff",
            boxShadow: "0px 0px 20px #ffff7c",
            borderRadius: "50%",
            marginTop: "-100px",
          }}
          alt="photoprofile"
        />
      </div>
    </div>
  );
}

export default ProfilePhoto;
