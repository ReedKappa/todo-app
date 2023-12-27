import React, {useState} from 'react';
import {useQuery} from "react-query";

import {TasksList} from "../TaskList/TasksList";
import {Alert} from "../Alert/Alert";
import {useTaskMutations} from "../../hooks/useTaskMutations";

import {
    AddButton,
    Check,
    ButtonConfirm,
    ConfirmText,
    Cross,
    DeleteConfirm,
    DeleteConfirmBackdrop,
    Plus,
    Title,
    Wrapper, ButtonsConfirm
} from "./MainTodo.styles";
import yesIcon from "../../icons/check.png";
import crossIcon from "../../icons/cross.png"
import plusIcon from "../../icons/plus.png"

export const MainTodo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [taskIdToDelete, setTaskIdToDelete] = useState(null);

    const tasks = useQuery('tasks',
        () => JSON.parse(localStorage.getItem('tasks')) || []);

    const openModal = (task = null) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const {
        addTaskMutation,
        deleteTaskMutation,
        updateTaskMutation
    } = useTaskMutations();

    const handleAddTask = (newTask) => {
        addTaskMutation.mutate(newTask);
        closeModal();
    };

    const closeModal = () => {
        setSelectedTask(null);
        setIsModalOpen(false);
    };

    const confirmDelete = (taskId) => {
        setTaskIdToDelete(taskId);
        setShowConfirmation(true);
    };

    const handleUpdateTask = (task) => {
        openModal(task);
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };

    const handleDelete = () => {
        deleteTaskMutation.mutate(taskIdToDelete);
        setShowConfirmation(false);
    };

    return (
        <Wrapper>
            <Title>Task Manager</Title>
            <AddButton onClick={() => openModal()}>
                <Plus src={plusIcon} />
            </AddButton>
            <TasksList
                tasks={tasks.data}
                onDelete={confirmDelete}
                onUpdate={handleUpdateTask}
            />
            {isModalOpen && (
                <Alert
                    isModalOpen={isModalOpen}
                    onSave={(title) => {
                        if (selectedTask) {
                            updateTaskMutation.mutate({ id: selectedTask.id, title });
                        } else {
                            handleAddTask({ title });
                        }
                    }}
                    closeModal={closeModal}
                />
            )}
            {showConfirmation && (
                <DeleteConfirmBackdrop>
                    <DeleteConfirm>
                        <ConfirmText>Are you sure?</ConfirmText>
                        <ButtonsConfirm>
                            <ButtonConfirm onClick={handleDelete}>
                                <Check src={yesIcon}/>
                            </ButtonConfirm>
                            <ButtonConfirm onClick={handleCancelDelete}>
                                <Cross src={crossIcon}/>
                            </ButtonConfirm>
                        </ButtonsConfirm>
                    </DeleteConfirm>
                </DeleteConfirmBackdrop>
            )}
        </Wrapper>
    );
};