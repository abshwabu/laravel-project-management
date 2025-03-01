import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({auth, projects, users}) {
   const {data, setData, post, errors, reset} = useForm({
        name: '',
        description: '',
        image: '',
        due_date: '',
        status: '',
        priority: '',
        project_id: '',
        assigned_to: '',
        created_by: auth.user.id,
        updated_by: auth.user.id,
    })
    const onSubmit = (e) => {
        e.preventDefault();
        post(route('task.store'));
    }

    return (
        <AuthenticatedLayout
        user={auth.user} 
        header={
        <div className="flex items-center justify-between">
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Create Task</h2>
            
        </div>}
        >
            <Head title="Tasks"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                        
                            <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <div>
                                    <InputLabel htmlFor="task_project_id" value="" className="text-white" />
                                    <SelectInput id="task_project_id" name="project_id" className="mt-1 block w-full text-white bg-gray-900" value={data.project_id} onChange={(e) => setData('project_id', e.target.value)}>
                                        <option value="">Select Priority</option>
                                        {projects.data.map((project) => (
                                            <option value={project.id} key={project.id}>{project.name}</option>
                                        ))}
                                        
                                    </SelectInput>
                                    <InputError message={errors.project_id} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="task_image_path" value="Tasak Image" className="text-white" />
                                    <TextInput id="task_image_path" type="file" name="image" className="mt-1 block w-full text-white bg-gray-900" onChange={(e) => setData('image', e.target.files[0])} />
                                    <InputError message={errors.image} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="task_name" value="Task Name" className="text-white" />
                                    <TextInput id="task_name" type="text" name="name" className="mt-1 block w-full text-white bg-gray-900" isFocused={true} value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                    <InputError message={errors.name} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="task_description" value="Task Description" className="text-white" />
                                    <TextAreaInput id="task_description" name="description" className="mt-1 block w-full text-white bg-gray-900" value={data.description} onChange={(e) => setData('description', e.target.value)} />
                                    <InputError message={errors.description} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="task_due_date" value="Due Date" className="text-white" />
                                    <TextInput id="task_due_date" type="date" name="due_date" className="mt-1 block w-full text-white bg-gray-900" value={data.due_date} onChange={(e) => setData('due_date', e.target.value)} />
                                    <InputError message={errors.due_date} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="task_status" value="Status" className="text-white" />
                                    <SelectInput id="task_status" name="status" className="mt-1 block w-full text-white bg-gray-900" value={data.status} onChange={(e) => setData('status', e.target.value)}>
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </SelectInput>
                                    <InputError message={errors.status} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="task_priority" value="priority" className="text-white" />
                                    <SelectInput id="task_priority" name="priority" className="mt-1 block w-full text-white bg-gray-900" value={data.priority} onChange={(e) => setData('priority', e.target.value)}>
                                        <option value="">Select Priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </SelectInput>
                                    <InputError message={errors.priority} className="text-red-500 mt-2" />
                                </div>
                                
                                <div>
                                    <InputLabel htmlFor="task_assigned_to" value="Assigned To" className="text-white" />
                                    <SelectInput id="task_assigned_to" name="assigned_to" className="mt-1 block w-full text-white bg-gray-900" value={data.assigned_to} onChange={(e) => setData('assigned_to', e.target.value)}>
                                        <option value="">Select User</option>
                                        {users.data.map((user) => (
                                            
                                            <option value={user.id} key={user.id}>{user.name}</option>
                                        ))}
                                    </SelectInput>
                                    <InputError message={errors.assigned_to} className="text-red-500 mt-2" />
                                </div>
                                <div className="text-right mt-4">
                                    <Link href={route('task.index')} className="px-3 py-1 text-gray-800 bg-gray-100 border rounded shadow transition-all hover:bg-gray-200 mr-2 text-sm h-8">
                                        Cancel
                                    </Link>
                                    <button className="px-3 py-1 text-white bg-emerald-500 rounded shadow transition-all hover:bg-emerald-00 text-sm h-8">
                                    Submit
                                    </button>
                                </div>
                            </form>
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}