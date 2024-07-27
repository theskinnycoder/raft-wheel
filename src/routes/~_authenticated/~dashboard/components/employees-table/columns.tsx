import { Checkbox } from '@/components/ui/checkbox'
import type { EMPLOYEE } from '@/lib/types'
import type { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<EMPLOYEE>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={value => row.toggleSelected(!!value)}
				aria-label='Select row'
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'id',
		header: 'Employee ID',
	},
	{
		accessorKey: 'firstName',
		header: 'First Name',
	},
	{
		accessorKey: 'lastName',
		header: 'Last Name',
	},
	{
		accessorKey: 'gender',
		header: 'Gender',
	},
	{
		accessorKey: 'pickupLocation',
		header: 'Pickup Location',
	},
	{
		accessorKey: 'empPhoneNumber',
		header: 'Phone Number',
	},
	{
		accessorKey: 'loginTime',
		header: 'Login Time',
	},
	{
		accessorKey: 'logoutTime',
		header: 'Logout Time',
	},
	{
		accessorKey: 'dropOffLocation',
		header: 'Dropoff Location',
	},
]
