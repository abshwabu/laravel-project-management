import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { use } from "react";

export default function Index({auth, users, queryParams = null, success}) {

    queryParams = queryParams || {};
    const selectedFieldChanged = (field, value) => {

        if (value) {
            queryParams[field] = value;
        } else {
            delete queryParams[field];
        }

        router.get(route('user.index', queryParams));
    }

    const onKeyPress = (field, e) => {
        if (e.key === 'Enter') {
            selectedFieldChanged(field, e.target.value);
        }
        return;
    }

    const sortChange = (field) => {
        if (queryParams.sort_field === field) {
            queryParams.sort_direction = queryParams.sort_direction === 'asc' ? 'desc' : 'asc';
        }else{
            queryParams.sort_field = field;
            queryParams.sort_direction= 'asc';
        }
        
        router.get(route('user.index', queryParams));
    }
    const deleteProjuct = (e) => {
        if (!confirm('Are you sure you want to delete this user?')) {
            return;
        }
        router.delete(route('user.destroy', e.id))
    }
    return (
        <AuthenticatedLayout user={auth.user} 
        header={
        <div className="flex items-center justify-between">
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Users</h2>
            <Link href={route('user.create')} className="bg-emerald-500 py-1 px-3 text-white rounded shadow transiton-all hover:bg-emerald-600">Add New</Link>
        </div>
    }
        >
            <Head title="Users"/>
            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> {success}</span>
                </div>
            )}
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th onClick={(e) => sortChange('id')} className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                            <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                            ID 
                                            <div>
                                            <ChevronUpIcon  className={
                                                queryParams.sort_field === 'id' && queryParams.sort_direction === 'asc' ? 'w-4' : 'w-0'
                                            }/> 
                                            <ChevronDownIcon className={
                                                queryParams.sort_field == 'id' && queryParams.sort_direction === 'desc' ? 'w-4' :"w-0"
                                            }/>
                                            </div>
                                            </div>
                                            
                                             </th>
                                        <th onClick={(e) => sortChange('name')}>
                                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                            Name
                                        <div>
                                            <ChevronUpIcon  className={
                                                queryParams.sort_field === 'name' && queryParams.sort_direction === 'asc' ? 'w-4' : 'w-0'
                                            }/> 
                                            <ChevronDownIcon className={
                                                queryParams.sort_field == 'name' && queryParams.sort_direction === 'desc' ? 'w-4' :"w-0"
                                            }/>
                                        </div>
                                        </div>
                                        </th>
                                        <th onClick={(e) => sortChange('email')}>
                                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                            Email
                                        <div>
                                            <ChevronUpIcon  className={
                                                queryParams.sort_field === 'email' && queryParams.sort_direction === 'asc' ? 'w-4' : 'w-0'
                                            }/> 
                                            <ChevronDownIcon className={
                                                queryParams.sort_field == 'email' && queryParams.sort_direction === 'desc' ? 'w-4' :"w-0"
                                            }/>
                                            </div>
                                        </div>
                                        </th>
                                        <th onClick={(e) => sortChange('created_at')} className="px-3 py-3">
                                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                            Create Date
                                        <div>
                                            <ChevronUpIcon  className={
                                                queryParams.sort_field === 'created_at' && queryParams.sort_direction === 'asc' ? 'w-4' : 'w-0'
                                            }/> 
                                            <ChevronDownIcon className={
                                                queryParams.sort_field == 'created_at' && queryParams.sort_direction === 'desc' ? 'w-4' :"w-0"
                                            }/>
                                            </div>
                                            </div>
                                        </th>
                                        <th className="px-3 py-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3">
                                            <TextInput className="w-full" placeholder="User Name"
                                            defaultValue={queryParams.name}
                                            onBlur={(e) => selectedFieldChanged('name', e.target.value)}
                                            onKeyPress={e => onKeyPress('name',e)}
                                            />
                                        </th>
                                        <th className="px-3 py-3">
                                        <TextInput className="w-full" placeholder="User Email"
                                            defaultValue={queryParams.email}
                                            onBlur={(e) => selectedFieldChanged('email', e.target.value)}
                                            onKeyPress={e => onKeyPress('email',e)}
                                            />
                                        </th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3 text-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map((user) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                                        <td className="px-3 py-3 text-nowrap">{user.id}</td>
                                        
                                        <th className="px-3 py-3 text-white text-nowrap">
                                            
                                            {user.name}
                                            
                                        </th>
                                        <td className="px-3 py-3 text-nowrap">
                                            {user.email}
                                        </td>
                                        <td className="px-3 py-3 text-nowrap">{user.created_at}</td>
                                        
                                        <td className="px-3 py-3 text-nowrap text-right">
                                            <Link href={route('user.edit', user.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">Edit</Link>
                                            <button onClick={(e) => deleteProjuct(user)} className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">Delete</button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={users.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}