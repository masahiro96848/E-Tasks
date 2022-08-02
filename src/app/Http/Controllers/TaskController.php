<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\TaskRequest;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    /**
     * Task一覧
     * 
     * @return \Illuminate\Support\Collection
     */

    public function index()
    {
        return Task::orderByDesc('id')->get();
    }

    /**
     * Task作成
     * @param  TaskRequest $request
     * @return \Illuminate\Http\JsonResponse
     */

     public function store(TaskRequest $request)
     {
        $task = Task::create($request->all());

        return $task
            ? response()->json($task, 201)
            : response()->json([], 500);
     }

     /**
     * Task更新
     * @param  TaskRequest $request
     * @param  \App\Models\Task $task
     * @return \Illuminate\Http\JsonResponse
     */

     public function update(TaskRequest $request, Task $task)
     {
        $task->title = $request->title;

        return $task->update()
            ? response()->json($task)
            : response()->json([], 500);
     }

     /**
     * Task削除
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */

     public function destroy(Task $task)
     {
        return $task->delete()
            ? response()->json($task)
            : response()->json([], 500);
     }
}
