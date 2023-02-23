import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import styles from './Input.module.css';

interface InputProps {
    passValueToParent: (content: string) => void;
}

export function Input({ passValueToParent }: InputProps) {
    function doChangeValue(event: ChangeEvent<HTMLInputElement>) {
        passValueToParent(event.target.value);
    }

    return <input onChange={doChangeValue}
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
    />
}