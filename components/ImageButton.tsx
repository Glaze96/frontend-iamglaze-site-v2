interface ImageButtonProps {
  label: string;
  imageUrl: string;
  linkUrl: string;
}

const ImageButton = ({ label, imageUrl, linkUrl }: ImageButtonProps) => {

    function onClickHandler() {
        console.log("clicked!!")
        window.open(linkUrl);
    }

    return (
    <button className="w-full h-full overflow-hidden" onClick={() => onClickHandler()}>
      <img src={imageUrl} className="brightness-90 hover:brightness-100 hover:scale-110 transition-all w-full h-full overflow-hidden" />
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
