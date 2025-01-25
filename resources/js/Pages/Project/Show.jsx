import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Show({auth, project}) {
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">'{`Project "${project.data.name}"`}'</h2>}
        >
            <Head title={`Project "${project.data.name}"`} />
            <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                Show
                            </div>
                        </div>
                    </div>
            </div>

        </AuthenticatedLayout>
    );
}