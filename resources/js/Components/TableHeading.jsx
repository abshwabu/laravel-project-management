import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export default function TableHeading({
  name,
  sortable = true,
  sort_field = null,
  sort_direction = null,
  sortChanged = () => { },
  children,
}) {
  return (
    <th onClick={(e) => sortChanged(name)}>
      <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
        {children}
        {sortable && (
          <div>
            <ChevronUpIcon className={
              sort_field === name && sort_direction === 'asc' ? 'w-4' : 'w-0'
            } />
            <ChevronDownIcon className={
              sort_field == name && sort_direction === 'desc' ? 'w-4' : "w-0"
            } />
          </div>
        )}
      </div>
    </th>
  );
}