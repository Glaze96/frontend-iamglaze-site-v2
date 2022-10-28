interface ImageButtonProps {
  label: string;
  imageUrl: string;
  linkUrl: string;
  textPos: string;
}

const ImageButton = ({
  label,
  imageUrl,
  linkUrl,
  textPos,
}: ImageButtonProps) => {
  function onClickHandler() {
    console.log("clicked!!");
    window.open(linkUrl);
  }

  return (
    <button
      className="w-full h-full overflow-hidden"
      onClick={() => onClickHandler()}
    >
      {textPos == "bottom" ? (
        <h3 className="bottom-20 right-20 absolute text-2xl" style={{ zIndex: 3 }}>
          {label}
        </h3>
      ) : (
        <h3 className="px-12 py-12 absolute text-2xl" style={{ zIndex: 3 }}>
          {label}
        </h3>
      )}
      <img
        src={imageUrl}
        className="brightness-90 hover:brightness-100 hover:scale-110 transition-all w-full h-full overflow-hidden"
      />
      {/* <section
        className={
          "h-full bg-[url('../public/" +
          imageUrl +
          "')] bg-no-repeat bg-cover bg-center brightness-90 hover:brightness-100 hover:scale-110 transition-all"
        }
      >
        <div className="w-full h-full grid place-content-center">
          <h3 className="text-xl select-none">{label}</h3>
        </div>
      </section> */}
    </button>
  );
};

export default ImageButton;
