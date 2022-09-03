import React, { useEffect, useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskPage: React.FC = () => {
    return (
        <>
            <TaskInput />
            <TaskList />
    </>
    )
}

export default TaskPage