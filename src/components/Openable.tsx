import { ReactNode, useEffect, useRef, useState } from "react"
import { Button } from "./Button";
import './Openable.scss';
import { isReducedMotion } from "../reduced-motion";

type IOpenable = {
    label: string;
    children: ReactNode;
}

export function Openable({ label, children }: IOpenable) {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        gsap.set(ref.current!, {maxHeight: 0});
    }, []);

    const toggleAnimate = () => {
        setOpen(!open);
        if (isReducedMotion) {
            if (open) {
                gsap.set(ref.current!, { maxHeight: 0 });
            } else {
                gsap.set(ref.current!, { maxHeight: 512 });
            }
        } else {
            if (open) {
                gsap.to(ref.current!, { maxHeight: 0, duration: 0.5 });
            } else {
                gsap.to(ref.current!, { maxHeight: 512, duration: 0.75 });
            }
        }
    }

    return (<div className="openable">
        <Button label={label} type={open ? 'primary' : 'secondary'} onClick={toggleAnimate}/>
        <div ref={ref} className="px-3">
            <div className="my-3">
                {children}
            </div>
        </div>
    </div>);
}