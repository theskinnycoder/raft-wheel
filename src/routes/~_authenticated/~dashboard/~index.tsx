import type { EMPLOYEE } from '@/lib/types'
import { createFileRoute } from '@tanstack/react-router'
import EmployeesTable from './components/employees-table'
import { columns } from './components/employees-table/columns'
import Filters from './components/filters'

export const Route = createFileRoute('/_authenticated/dashboard/')({
	component: () => <DashboardPage />,
})

function DashboardPage() {
	const data = [] as EMPLOYEE[]

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

			{/* Employees Table */}
			<EmployeesTable
				columns={columns}
				data={data}
			/>
		</div>
	)
}
