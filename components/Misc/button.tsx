import Link from "next/link";
import Icon from "./Icon";
import { useRouter } from "next/router";

interface ButtonProps {
  label: string;
  section?: string;
  callback?: () => any;
}

interface LinkButtonProps extends ButtonProps {
  url: string;
  icon?: JSX.Element;
  sameTab?: any;
}

interface IconButtonProps {
  icon?: JSX.Element;
  callback?: () => any;
}

const Button = ({ label, callback, section }: ButtonProps) => {
  const router = useRouter();
  function onClickHandler(func: any, section?: string) {
    if (func) func();
    if (section) router.push("/#" + section, undefined, { shallow: true });
  }

  return (
    <button
      className="px-2 py-2 rounded-md hover:scale-110 font-bold transition-all w-full border-primary border-4 bg-primaryDark"
      onClick={() => onClickHandler(callback, section)}
    >
      <h2>{label}</h2>
    </button>
  );
};

const LinkButton = ({ label, url, icon, sameTab }: LinkButtonProps) => {
  return (
    <Link href={url} target={sameTab ? "" : "_blank"} passHref>
        <div className="px-2 py-2 rounded-mdfont-bold transition-all w-fit flex flex-row gap-2 place-content-start">
          <h3 className="text-lg underline underline-offset-3 text-secondary hover:text-white ">
            {label}
          </h3>
          {icon && (
            <div className="text-lg place-self-center">
              <Icon icon={icon} size="text-lg" />
            </div>
          )}
        </div>
    </Link>
  );
};

const IconButton = ({ icon, callback }: IconButtonProps) => {
  function onClickHandler(func: any, section?: string) {
    if (func) func();
  }
  return (
    <button
      className="text-xl text-secondary hover:scale-110 transition-all"
      onClick={() => onClickHandler(callback)}
    >
      <figure>{icon}</figure>
    </button>
  );
};

Button.Link = LinkButton;
Button.Icon = IconButton;
export default Button;
