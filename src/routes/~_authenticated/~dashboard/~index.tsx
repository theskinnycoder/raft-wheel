import { useEffect, useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

import type { EMPLOYEE } from '@/lib/types'
import { columns } from './components/employees-table/columns'
import { useFetchEmployee } from './hooks/use-fetch-employee'
import Filters from './components/filters'
import EmployeesTable from './components/employees-table'
import useFiltersStore from './store'

export const Route = createFileRoute('/_authenticated/dashboard/')({
	component: () => <DashboardPage />,
})

function DashboardPage() {
	const { employeeList, employeeTableSelectedRow } = useFiltersStore()
	const { useProcessEmployees } = useFetchEmployee()
	const { mutateAsync: getProcessEmployees } = useProcessEmployees()
	const navigate = useNavigate()

	const onScheduledTripsClick = async () => {
		await navigate({ to: '/scheduled-trips' })
		await getProcessEmployees(employeeTableSelectedRow)
	}

	return (
		<div className='flex min-h-screen flex-col items-stretch'>
			{/* Heading */}
			<h1 className='text-2xl font-medium'>Dashboard</h1>

			{/* Sub-Heading */}
			<p className='mt-4 text-sm text-muted-foreground'>
				Apply the following filters and press{' '}
				<span className='font-medium text-black'>Search</span> to fetch users
			</p>

			{/* Filters & Search Section */}
			<Filters />

			{/* Scheduled Trips Button */}
			<Button
				size='lg'
				className='mt-8 flex self-end'
				disabled={!employeeTableSelectedRow.length}
				onClick={onScheduledTripsClick}
			>
				<span>Scheduled Trips</span>
			</Button>

			{/* Employees Table */}
			<EmployeesTable
				columns={columns}
				data={employeeList}
			/>
		</div>
	)
}
