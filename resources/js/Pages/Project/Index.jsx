import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { PROJECT_STATUS_TEXT_MAP, PROJECT_STATUS_CLASS_MAP} from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Index({auth, projects, queryParams = null}) {

    queryParams = queryParams || {};
    const selectedFieldChanged = (field, value) => {

        if (value) {
            queryParams[field] = value;
        } else {
            delete queryParams[field];
        }

        router.get(route('project.index', queryParams));
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
        
        router.get(route('project.index', queryParams));
    }
    return (
        <AuthenticatedLayout user={auth.user} 
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>}
        >
            <Head title="Projects"/>
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
                                        <th className="px-3 py-3">Image</th>
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
                                        <th onClick={(e) => sortChange('status')}>
                                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                            Status
                                        <div>
                                            <ChevronUpIcon  className={
                                                queryParams.sort_field === 'status' && queryParams.sort_direction === 'asc' ? 'w-4' : 'w-0'
                                            }/> 
                                            <ChevronDownIcon className={
                                                queryParams.sort_field == 'status' && queryParams.sort_direction === 'desc' ? 'w-4' :"w-0"
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
                                        <th onClick={(e) => sortChange('due_date')} className="px-3 py-3">
                                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                            Due Date
                                        <div>
                                            <ChevronUpIcon  className={
                                                queryParams.sort_field === 'due_date' && queryParams.sort_direction === 'asc' ? 'w-4' : 'w-0'
                                            }/> 
                                            <ChevronDownIcon className={
                                                queryParams.sort_field == 'due_date' && queryParams.sort_direction === 'desc' ? 'w-4' :"w-0"
                                            }/>
                                            </div>
                                            </div>
                                        </th>
                                        <th className="px-3 py-3">Created By</th>
                                        <th className="px-3 py-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3">
                                            <TextInput className="w-full" placeholder="Project Name"
                                            defaultValue={queryParams.name}
                                            onBlur={(e) => selectedFieldChanged('name', e.target.value)}
                                            onKeyPress={e => onKeyPress('name',e)}
                                            />
                                        </th>
                                        <th className="px-3 py-3">
                                            <SelectInput className="w-full" onChange={(e) => selectedFieldChanged('status', e.target.value)} defaultValue={queryParams.status}>
                                                <option value="">Select Status</option>
                                                {Object.keys(PROJECT_STATUS_TEXT_MAP).map((status) => (
                                                    <option key={status} value={status}>{PROJECT_STATUS_TEXT_MAP[status]}</option>
                                                ))}
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3 text-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.data.map((project) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={project.id}>
                                        <td className="px-3 py-3 text-nowrap">{project.id}</td>
                                        <td className="px-3 py-3 text-nowrap">
                                            <img src={project.image_path} alt="" />
                                        </td>
                                        <td className="px-3 py-3 text-nowrap">{project.name}</td>
                                        <td className="px-3 py-3 text-nowrap">
                                            <span
                                                className={
                                                "px-2 py-1 rounded text-white " +
                                                PROJECT_STATUS_CLASS_MAP[project.status]
                                                }
                                            >
                                                {PROJECT_STATUS_TEXT_MAP[project.status]}
                                            </span>
                                        </td>
                                        <td className="px-3 py-3 text-nowrap">{project.created_at}</td>
                                        <td className="px-3 py-3 text-nowrap">{project.due_date}</td>
                                        <td className="px-3 py-3 text-nowrap">{project.createdBy.name}</td>
                                        <td className="px-3 py-3 text-nowrap text-right">
                                            <Link href={route('project.edit', project.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">Edit</Link>
                                            <Link href={route('project.destroy', project.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">Delete</Link>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}