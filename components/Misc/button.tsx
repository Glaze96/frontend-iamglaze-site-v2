import Link from "next/link";

interface ButtonProps {
  label: string;
  callback?: () => any;
}

interface LinkButtonProps extends ButtonProps {
  url: string;
}

const Button = ({ label, callback }: ButtonProps) => {
  function onClickHandler(func: any) {
    if (func) func();
  }

  return (
    <button
      className="px-2 py-2 rounded-md hover:opacity-40 font-bold transition-all w-full border-primary border-4 bg-primaryDark"
      onClick={() => onClickHandler(callback)}
    >
      <h2>{label}</h2>
    </button>
  );
};

const LinkButton = ({ label, url }: LinkButtonProps) => {
  return (
    <Link href={url} passHref>
      <a className="px-2 py-2 rounded-md hover:opacity-40 font-bold transition-all w-full border-primary border-4 bg-primaryDark">
        {label}
      </a>
    </Link>
  );
};

Button.Link = LinkButton;
export default Button;
