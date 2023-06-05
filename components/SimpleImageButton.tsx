import Image from "next/image";

interface SimpleImageButtonProps {
	imageUrl: string;
	linkUrl: string;
	alt: string;
  width: number;
  height: number;
}

const SimpleImageButton = ({
	imageUrl,
	linkUrl,
	alt,
  width,
  height,
}: SimpleImageButtonProps) => {
	function onClickHandler() {
		console.log("clicked!!");
		window.open(linkUrl);
	}

	return (
		<button className="w-full" onClick={() => onClickHandler()}>
			<Image
				src={imageUrl}
        width={width}
        height={height}
				className="brightness-90 hover:brightness-100 hover:scale-110 transition-all"
				alt={alt}
			/>
		</button>
	);
};

export default SimpleImageButton;
