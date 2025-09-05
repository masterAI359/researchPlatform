
interface IconProps {
    src: string
}

export default function NodeIcon({ src }: IconProps): JSX.Element {

    return (
        <img src={src} />
    );
};