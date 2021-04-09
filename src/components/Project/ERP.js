import image from "../../asset/erp.PNG";
function Picture() {
  return (
    <div className="w-full h-full">
      <div className="absolute w-full h-full bg-gray-800 bg-opacity-30"></div>
      <img
        src={image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fit",
        }}
        alt="erp picture"
      />
    </div>
  );
}

export default Picture;
