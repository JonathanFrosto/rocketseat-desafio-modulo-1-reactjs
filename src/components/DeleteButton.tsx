import { Trash } from 'phosphor-react'
import styles from './DeleteButton.module.css'

interface DeleteButtonProps {
    id: number;
    onDelete: (id: number) => void;
}

export function DeleteButton({ id, onDelete }: DeleteButtonProps) {

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        onDelete(id);
    }

    return <button className={styles.deleteButton} onClick={handleClick}>
        <Trash size={24} />
    </button>
} 