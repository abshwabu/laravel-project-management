import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
  pendingTasks,
  myPendingTasks,
  completedTasks,
  myCompletedTasks,
  inProgressTasks,
  myInProgressTasks,
  myActiveTasks,
}) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
          <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-bold">
                Pending Task
              </h3>
              <p className="mt-4 text-xl pl-3">
                <span>{myPendingTasks}</span> / <span>{pendingTasks}</span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-blue-500 text-2xl font-bold">
                In progress Tasks
              </h3>
              <p className="mt-4 text-xl pl-3">
                <span>{myInProgressTasks}</span> /{" "}
                <span>{inProgressTasks}</span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-500 text-2xl font-bold">
                Completed Tasks
              </h3>
              <p className="mt-4 text-xl pl-3">
                <span>{myCompletedTasks}</span> / <span>{completedTasks}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
          <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-500 text-2xl font-bold">My tasks</h3>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Project Name</th>
                    <th className="px-3 py-3">Task Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Due Date</th>
                  </tr>
                </thead>
                <tbody></tbody>
                {myActiveTasks.data.map((task) => (
                  <tr key={task.id}>
                    <td className="px-3 py-3">{task.id}</td>
                    <th className="px-3 py-2 text-gray-300 hover:underline">
                      <Link href={route("project.show", task.project.id)}>
                        {task.project.name}
                      </Link>
                    </th>
                    <th className="px-3 py-2 text-gray-100 hover:underline">
                      <Link href={route("task.show", task.id)}>
                        {task.name}
                      </Link>
                    </th>
                    <td className="px-3 py-3">
                      <span
                        className={
                          "px-2 py-1 rounded text-nowrap text-white " +
                          TASK_STATUS_CLASS_MAP[task.status]
                        }
                      >
                        {TASK_STATUS_TEXT_MAP[task.status]}
                      </span>
                    </td>
                    <td className="px-3 py-3">{task.due_date}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
