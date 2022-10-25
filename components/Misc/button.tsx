import Link from 'next/link'

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

  return (
    <button
      className="rounded-sm hover:opacity-20 font-bold transition-all bg-primary"
      onClick={() => onClickHandler(callback)}
    >
      {url ? (
        <Link href={url} target={newtab && "_blank"}>
          {label}
        </Link>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
