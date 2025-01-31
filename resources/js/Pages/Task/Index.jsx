
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TasksTable from "./TasksTable";

export default function Index({auth, tasks, queryParams = null}) {

    queryParams = queryParams || {};
    

    

    
    return (
        <AuthenticatedLayout user={auth.user} 
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Tasks</h2>}
        >
            <Head title="Tasks"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TasksTable tasks={tasks} queryParams={queryParams} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}