

interface IconProps {
    icon: JSX.Element
}


const Icon = ({icon}: IconProps) => {
    return <div className="w-full h-full">
        <figure className="text-xl">{icon}</figure>
    </div>
}


export default Icon;