import type { EMPLOYEE } from '@/lib/types'
import type { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<EMPLOYEE>[] = [
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
		accessorKey: 'officeLocation',
		header: 'Office Location',
	},
]
