import { Button } from '@/components/ui/button'
import type { RIDE_DETAILS } from '@/lib/types'
import type { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<RIDE_DETAILS>[] = [
	{
		id: 'expandRow',
		header: ({ table }) => (
			<Button
				variant={'ghost'}
				onClick={table.getToggleAllRowsExpandedHandler()}
			>
				{table.getIsAllRowsExpanded() ? '👇' : '👉'}
			</Button>
		),
		cell: ({ row, getValue }) => (
			<div>
				{row.getCanExpand() ? (
					// <button
					// 	{...{
					// 		onClick: row.getToggleExpandedHandler(),
					// 		style: { cursor: 'pointer' },
					// 	}}
					// >
					// 	{row.getIsExpanded() ? '👇' : '👉'}
					// </button>
					<Button
						variant={'ghost'}
						onClick={row.getToggleExpandedHandler()}
						className='cursor-pointer'
					>
						{row.getIsExpanded() ? '👇' : '👉'}
					</Button>
				) : (
					'🔵'
				)}{' '}
				{getValue<boolean>()}
			</div>
		),
	},
	{
		accessorKey: 'driverId',
		header: 'Driver ID',
	},
	{
		accessorKey: 'driverName',
		header: 'Driver Name',
	},
	{
		accessorKey: 'driverPhoneNumber',
		header: 'Driver Contact',
	},
	{
		accessorKey: 'tripStartDate',
		header: 'Trip Start Date',
	},
	{
		accessorKey: 'loginTime',
		header: 'Login Time',
	},
	{
		accessorKey: 'logoutTime',
		header: 'Logout Time',
	},
	// {
	// 	accessorKey: 'gender',
	// 	header: 'Gender',
	// },
	// {
	// 	accessorKey: 'pickupLocation',
	// 	header: 'Pickup Location',
	// },
	// {
	// 	accessorKey: 'dropOffLocation',
	// 	header: 'Dropoff Location',
	// },
]
