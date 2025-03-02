<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Http\Resources\TaskResource;

class DashboardController extends Controller
{
    public function index()
    {
        $pendingTasks = Task::where('status', 'pending')->count();
        $myPendingTasks = Task::where('status', 'pending')
            ->where('assigned_to', auth()->id())
            ->count();
        $completedTasks = Task::where('status', 'completed')->count();
        $myCompletedTasks = Task::where('status', 'completed')
            ->where('assigned_to', auth()->id())
            ->count();
        $inProgressTasks = Task::where('status', 'in_progress')->count();
        $myInProgressTasks = Task::where('status', 'in_progress')
            ->where('assigned_to', auth()->id())
            ->count();
        $myActiveTasks = Task::whereIn('status', ['pending','in_progress'])
            ->where('assigned_to', auth()->id())->limit(10)->get();
        $myActiveTasks = TaskResource::collection($myActiveTasks);
        return inertia('Dashboard', [
            'pendingTasks' => $pendingTasks,
            'myPendingTasks' => $myPendingTasks,
            'completedTasks' => $completedTasks,
            'myCompletedTasks' => $myCompletedTasks,
            'inProgressTasks' => $inProgressTasks,
            'myInProgressTasks' => $myInProgressTasks,
            'myActiveTasks' => $myActiveTasks,
        ]);
    }
}
