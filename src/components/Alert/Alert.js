import React, {useState} from 'react';

import {TaskModal} from "../TaskModal/TaskModal";

import {ModalButton, ModalInput} from "./Alert.styles";


export const Alert = ({isModalOpen, onSave, closeModal }) => {
    const [title, setTitle] = useState('');
    const handleSave = () => {
        onSave(title);
        setTitle('');
        closeModal();
    };

    return (
        <>
            {isModalOpen && (
                <TaskModal close={closeModal}>
                    <ModalInput
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
                    <ModalButton onClick={handleSave}>Save</ModalButton>
                </TaskModal>
            )}
        </>
    );
};