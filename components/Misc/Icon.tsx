

interface IconProps {
    icon: JSX.Element;
    size: string;
}


const Icon = ({icon, size}: IconProps) => {
    return <div className="w-full h-full">
        <figure className={size}>{icon}</figure>
    </div>
}


export default Icon;