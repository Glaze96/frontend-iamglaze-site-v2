interface IconProps {
  icon: JSX.Element;
  size: string;
}
interface HoverIconProps extends IconProps {
  label: string;
}
const Icon = ({ icon, size }: IconProps) => {
  return (
    <div className="w-full h-full">
      <figure className={size}>{icon}</figure>
    </div>
  );
};

const HoverIcon = ({ icon, size, label }: HoverIconProps) => {
  return (
    <div className="transition-all hover:scale-110 flex flex-col items-center group">
      <div className="group-hover:text-secondary">
        <figure className={size}>{icon}</figure>
      </div>
      <div className="rounded-sm p-1 absolute bg-black transition-all opacity-0 group-hover:opacity-80">
        <h3 className="text-center flex justify-center text-base transition-all select-none opacity-100 ">
          {label}
        </h3>
      </div>
    </div>
  );
};

Icon.Hover = HoverIcon;

export default Icon;
