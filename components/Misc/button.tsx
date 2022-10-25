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
    }
  }

  const styling =
    "px-2 py-2 rounded-md hover:opacity-40 font-bold transition-all w-full border-primary border-4 bg-primaryDark w-80";

  return (
    <>
      {url ? (
        <a className={styling} href={url} target={newtab && "_blank"}>
          {label}
        </a>
      ) : (
        <button className={styling} onClick={() => onClickHandler(callback)}>
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
