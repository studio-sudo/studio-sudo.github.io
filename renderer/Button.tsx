import './Button.scss';

type IButton = {
    label: string;
    type?: 'primary' | 'secondary';
    onClick?: () => void;
}

export function Button({ label, type = 'primary', onClick }: IButton) {
    return (
        <button className={type} onClick={onClick}>{label}</button>
    )
}