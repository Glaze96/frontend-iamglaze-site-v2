import Link from "next/link";

interface ButtonProps {
  label: string;
  callback?: () => any;
  url?: string;
  newtab?: any;
}

const Button = ({ label, callback, url, newtab }: ButtonProps) => {
  function onClickHandler(func: any) {
    if (func) {
      func();
    } else if (url) {
      window.open(url, "_blank");
    }
  }

  return (
    <button className={"px-2 py-2 rounded-md hover:opacity-40 font-bold transition-all w-full border-primary border-4 bg-primaryDark"} onClick={() => onClickHandler(callback)}>
      <h2>{label}</h2>
    </button>
  );
};

export default Button;
