import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";

export default function Show({auth, task, tasks, queryParams=null}) {
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">'{`Project "${task.data.name}"`}'</h2>}
        >
            <Head title={`Project "${task.data.name}"`} />
            <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                        <div>
                                    <img src={task.data.image_path} alt="" className="w-full h-64 object-cover" />
                                </div>
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                
                                <div className="grid gap-1 grid-cols-2 mt-2">
                                    <div>
                                        <div className="mt-4">
                                        <label className="font-bold text-lg">ID</label>
                                        <p>{task.data.id}</p>
                                        </div>
                                        <div className="mt-4">
                                        <label className="font-bold text-lg">Name</label>
                                        <p>{task.data.name}</p>
                                        </div>
                                        <div className="mt-4">
                                            <label className="font-bold text-lg">Status</label>
                                            <p className="mt-1">
                                            <span
                                                className={
                                                "px-2 py-1 rounded text-white " +
                                                TASK_STATUS_CLASS_MAP[task.data.status]
                                                }
                                            >
                                                {TASK_STATUS_TEXT_MAP[task.data.status]}
                                            </span>
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <label className="font-bold text-lg">Created By</label>
                                            <p>{task.data.createdBy.name}</p>
                                        </div>
                                        <div className="mt-4">
                                            <label className="font-bold text-lg">Updated by</label>
                                            <p>{task.data.updatedBy.name}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                        <label className="font-bold text-lg">Created At</label>
                                        <p>{task.data.created_at}</p>
                                        </div>
                                        <div className="mt-4">
                                        <label className="font-bold text-lg">Due Date</label>
                                        <p>{task.data.due_date}</p>
                                        </div>
                                        
                                        <div className="mt-4">
                                        <label className="font-bold text-lg">Updated by</label>
                                        <p>{task.data.updatedBy.name}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="mt-4">
                                        <label className="font-bold text-lg">Description</label>
                                        <p>{task.data.description}</p>
                                        </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="pb-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                
                                <TasksTable tasks={tasks} queryParams={queryParams} hideProjectColumn={true}/>
                            </div>
                        </div>
                    </div>
            </div>

        </AuthenticatedLayout>
    );
}