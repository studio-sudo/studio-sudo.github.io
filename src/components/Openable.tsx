import { ReactNode, useEffect, useRef, useState } from "react"
import { Button } from "./Button";
import './Openable.scss';

type IOpenable = {
    label: string;
    children: ReactNode;
}

export function Openable({ label, children }: IOpenable) {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        gsap.set(ref.current!, {height: 0});
    }, []);

    const toggleAnimate = () => {
        setOpen(!open);
        if (open) {
            gsap.to(ref.current!, { height: 0, duration: 0.5 });
        } else {
            gsap.to(ref.current!, { height: 256, duration: 0.5 });
        }
    }

    return (<div className="openable">
        <Button label={label} type={open ? 'primary' : 'secondary'} onClick={toggleAnimate}/>
        <div ref={ref}>
            {children}
        </div>
    </div>);
}