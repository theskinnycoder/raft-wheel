import { createFileRoute } from '@tanstack/react-router'
import TripsTable from './components/trips-table'
import { columns } from './components/trips-table/columns'
import useFiltersStore from '../~dashboard/store'
import type { Row } from '@tanstack/react-table'
import type { RIDE_DETAILS } from '@/lib/types'
import ExpandedRowTable from './components/expanded-trip'

export const Route = createFileRoute('/_authenticated/scheduled-trips/')({
	component: () => <ScheuledTrips />,
})

const renderSubComponent = ({ row }: { row: Row<RIDE_DETAILS> }) => {
	return <ExpandedRowTable row={row} />
}

function ScheuledTrips() {
	const { processEmployees } = useFiltersStore()
	return (
		<div className='flex min-h-screen flex-col items-stretch'>
			{/* Heading */}
			<h1 className='text-2xl font-medium'>Scheduled Trips</h1>

			{/* Sub-Heading */}
			<p className='mt-4 text-sm text-muted-foreground'>
				Expand the row to view the employees riding under a particular driver
			</p>

			{/* Scheduled Trips Table */}
			<TripsTable
				columns={columns}
				data={processEmployees}
				renderSubComponent={renderSubComponent}
				getRowCanExpand={() => true}
			/>
		</div>
	)
}

export default ScheuledTrips
