import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({auth, user}) {
   const {data, setData, post, errors, reset} = useForm({
        name: user.data.name || "",
        description: user.data.description || "",
        image: '',
        due_date: user.data.due_date  || "",
        status: user.data.status || "",
        created_by: auth.user.id,
        updated_by: auth.user.id,
        _method: 'PUT'
    })
    const onSubmit = (e) => {
        e.preventDefault();
        post(route('user.update', user.data.id));
    }

    return (
        <AuthenticatedLayout
        user={auth.user} 
        header={
        <div className="flex items-center justify-between">
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit {user.data.name}</h2>
            
        </div>}
        >
            <Head title="Users"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                        
                            <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                {user.data.image_path && <div className="mb-4">
                                    <img src={user.data.image_path} alt={user.data.name} className="w-64" />
                                    </div>}
                                <div>
                                    <InputLabel htmlFor="user_image_path" value="User Image" className="text-white" />
                                    <TextInput id="user_image_path" type="file" name="image " className="mt-1 block w-full text-white bg-gray-900" onChange={(e) => setData('image', e.target.files[0])} />
                                    <InputError error={errors.image} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="user_name" value="User Name" className="text-white" />
                                    <TextInput id="user_name" type="text" name="name" className="mt-1 block w-full text-white bg-gray-900" isFocused={true} value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                    <InputError error={errors.name} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="user_description" value="User Description" className="text-white" />
                                    <TextAreaInput id="user_description" name="description" className="mt-1 block w-full text-white bg-gray-900" value={data.description} onChange={(e) => setData('description', e.target.value)} />
                                    <InputError error={errors.description} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="user_due_date" value="Due Date" className="text-white" />
                                    <TextInput id="user_due_date" type="date" name="due_date" className="mt-1 block w-full text-white bg-gray-900" value={data.due_date} onChange={(e) => setData('due_date', e.target.value)} />
                                    <InputError error={errors.due_date} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="user_status" value="Status" className="text-white" />
                                    <SelectInput id="user_status" name="status" className="mt-1 block w-full text-white bg-gray-900" value={data.status} onChange={(e) => setData('status', e.target.value)}>
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </SelectInput>
                                    <InputError error={errors.status} className="text-red-500 mt-2" />
                                </div>
                                <div className="text-right mt-4">
                                    <Link href={route('user.index')} className="px-3 py-1 text-gray-800 bg-gray-100 border rounded shadow transition-all hover:bg-gray-200 mr-2 text-sm h-8">
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