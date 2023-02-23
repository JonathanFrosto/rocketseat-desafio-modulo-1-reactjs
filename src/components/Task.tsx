import { Checkbox } from './Checkbox'
import { DeleteButton } from './DeleteButton'
import styles from './Task.module.css'

interface TaskProps {
    id: number;
    content: string;
    done: boolean;
    onDelete: (id: number) => void;
    onDone: (id: number, isDone: boolean) => void;
}

export function Task({ id, content, done, onDelete, onDone }: TaskProps) {
    return <div className={styles.task}>
        <Checkbox id={id} onDone={onDone} />
        <p className={done ? styles.done : ""}>{content}</p>
        <DeleteButton id={id} onDelete={onDelete} />
    </div>
}