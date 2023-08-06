import './Button.scss';

type IButton = {
    label: string;
}

export function Button({ label }: IButton) {
    return (
        <button>{label}</button>
    )
}