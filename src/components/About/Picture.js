import image from "../../asset/picture.png";
function Picture() {
  return (
    <div className="w-full h-full">
      <img
        src={image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        alt="profil picture"
      />
    </div>
  );
}

export default Picture;
