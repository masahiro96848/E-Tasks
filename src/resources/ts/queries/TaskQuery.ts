import * as api from '../api/TaskApi';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const useTasks = () => {
    return useQuery('tasks', async () => api.getTasks())
}

const useUpdateDoneTask = () => {
    const queryClient = useQueryClient()

    return useMutation(api.updateDoneTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        }
    })
}

export {
    useTasks,
    useUpdateDoneTask
}