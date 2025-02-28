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
        email: user.data.email || "",
        password:  "",
        password_confirmation:  "",
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
                                <div>
                                    <InputLabel htmlFor="user_name" value="User Name" className="text-white" />
                                    <TextInput id="user_name" type="text" name="name" className="mt-1 block w-full text-white bg-gray-900" isFocused={true} value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                    <InputError message={errors.name} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="user_email" value="User Email" className="text-white" />
                                    <TextInput id="user_email" type="text" name="email" className="mt-1 block w-full text-white bg-gray-900" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                    <InputError message={errors.email} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="user_password" value="Password" className="text-white" />
                                    <TextInput id="user_password" type="password" name="password" className="mt-1 block w-full text-white bg-gray-900" value={data.password} onChange={(e) => setData('password', e.target.value)} />
                                    <InputError message={errors.password} className="text-red-500 mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="user_password_confirmation" value="Confirm Password" className="text-white" />
                                    <TextInput id="user_password_confirmation" type="password" name="password_confirmation" className="mt-1 block w-full text-white bg-gray-900" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} />
                                    <InputError message={errors.password_confirmation} className="text-red-500 mt-2" />
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