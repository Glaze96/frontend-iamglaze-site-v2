import Image from "next/image";

interface ImageButtonProps {
  label: string;
  imageUrl: string;
  linkUrl: string;
  textPos: string;
  cPath: string;
  zInd: number;
}

const ImageButton = ({
  label,
  imageUrl,
  linkUrl,
  textPos,
  cPath,
  zInd,
}: ImageButtonProps) => {
  function onClickHandler() {
    console.log("clicked!!");
    window.open(linkUrl);
  }

  return (
    <button className="w-full" onClick={() => onClickHandler()}>
      {textPos == "bottom" ? (
        <h3
          className="bottom-20 right-20 absolute text-2xl"
          style={{ zIndex: 3 }}
        >
          {label}
        </h3>
      ) : (
        <h3 className="px-12 py-12 absolute text-2xl" style={{ zIndex: 3 }}>
          {label}
        </h3>
      )}
      <Image
        src={"/" + imageUrl}
        layout="fill"
        className="brightness-90 hover:brightness-100 hover:scale-110 transition-all"
        style={{
          clipPath: cPath,
          zIndex: zInd,
        }}
      />
    </button>
  );
};

export default ImageButton;
