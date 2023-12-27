import React from 'react';
import {
    IconDelete,
    IconEdit,
    ButtonTask,
    ButtonsTask,
    ItemTask,
    TextTask
} from "./TaskItem.styles";
import deleteIcon from "../../icons/cross.png";
import editIcon from "../../icons/pencil.png";

export const TaskItem = ({ task, onDelete, onUpdate }) => {
    return (
        <ItemTask>
            <TextTask>
                {task.title}
            </TextTask>
            <ButtonsTask>
                <ButtonTask onClick={() => onUpdate(task)}>
                    <IconEdit src={editIcon} />
                </ButtonTask>
                <ButtonTask onClick={() => onDelete(task.id)}>
                    <IconDelete src={deleteIcon}  />
                </ButtonTask>
            </ButtonsTask>
        </ItemTask>
    );
};

