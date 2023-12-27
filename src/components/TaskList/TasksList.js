import React, {useState} from 'react';
import {TaskItem} from "../TaskItem/TaskItem";
import {
    Search,
    TasksListWrapper,
    TasksPanelWrapper,
    TasksWrapperText
} from "./TasksList.styles";

export const TasksList = ({tasks = [], onDelete, onUpdate}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTasks = tasks.filter(task => {
        return task.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <TasksPanelWrapper>
            <Search
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <TasksListWrapper>
                {filteredTasks.length > 0 && (filteredTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    ))
                )}
            </TasksListWrapper>
        </TasksPanelWrapper>
    );
};
