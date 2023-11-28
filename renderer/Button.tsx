import './Button.scss';

type IButton = {
    label: string;
    type?: 'primary' | 'secondary';
    onClick?: () => void;
    kind?: 'button' | 'submit' | 'reset'
}

export function Button({ label, type = 'primary', onClick, kind }: IButton) {
    return (
        <button className={type} onClick={onClick} type={kind}>{label}</button>
    )
}