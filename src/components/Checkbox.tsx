import { Check } from 'phosphor-react'
import { useState } from 'react'
import styles from './Checkbox.module.css'

interface CheckboxProps {
    id: number;
    onDone: (id: number, isDone: boolean) => void;
}

export function Checkbox({ id, onDone }: CheckboxProps) {
    const [active, setActive] = useState(false);

    function doActive(event: React.MouseEvent<HTMLButtonElement>) {
        const isDone = !active;
        setActive(isDone);
        onDone(id, isDone);
    }

    return <button className={active ? styles.checkboxActive : styles.checkbox} onClick={doActive} >
        {active ? <Check /> : ''}
    </button>
}