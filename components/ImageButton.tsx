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
      <div
        className={
          "h-full bg-[url('../public/" +
          imageUrl +
          "')] bg-cover brightness-90 hover:brightness-100 hover:scale-110 transition-all"
        }
      >
        <div className="w-full h-full grid place-content-center">
          <h3 className="text-xl select-none">{label}</h3>
        </div>
      </div>
    </button>
  );
};

export default ImageButton;
