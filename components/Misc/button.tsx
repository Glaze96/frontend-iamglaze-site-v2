import Link from "next/link";
import { SiFontawesome } from "react-icons/si";
import Icon from "./Icon";

interface ButtonProps {
  label: string;
  callback?: () => any;
}

interface LinkButtonProps extends ButtonProps {
  url: string;
  icon?: JSX.Element;
}

const Button = ({ label, callback }: ButtonProps) => {
  function onClickHandler(func: any) {
    if (func) func();
  }

  return (
    <button
      className="px-2 py-2 rounded-md hover:scale-110 font-bold transition-all w-full border-primary border-4 bg-primaryDark"
      onClick={() => onClickHandler(callback)}
    >
      <h2>{label}</h2>
    </button>
  );
};

const LinkButton = ({ label, url, icon }: LinkButtonProps) => {
  return (
    <Link href={url} passHref>
      <a target="_blank">
        <div className="px-2 py-2 rounded-mdfont-bold transition-all w-fit flex flex-row gap-2 place-content-start">
          <h3 className="text-lg underline underline-offset-3 text-secondary hover:text-white ">{label}</h3>
          {icon && <div className="text-lg place-self-center">
            <Icon icon={icon} size="text-lg"/>
          </div>}
        </div>
      </a>
    </Link>
  );
};

Button.Link = LinkButton;
export default Button;
