import './Button.scss';

type IButton = {
    label: string;
    type?: 'primary' | 'secondary';
    onClick?: () => void;
    kind?: 'button' | 'submit' | 'reset';
    id?: string;
}

export function Button({ label, type = 'primary', onClick, kind, id }: IButton) {
    return (
        <button className={type} onClick={onClick} type={kind} id={id}>{label}</button>
    )
}