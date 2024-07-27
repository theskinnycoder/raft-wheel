import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TbSearch } from 'react-icons/tb'
import useFiltersStore from '../../store'
import DateFilter from './date-filter'
import OfficeFilter from './office-filter'
import TripTypeFilter from './trip-type-filter'
import { useFetchEmployee } from '../../hooks/use-fetch-employee'

export default function Filters() {
	const { date, office, tripType } = useFiltersStore()
	const { useFetchEmployeeByLogin } = useFetchEmployee()
	const { mutateAsync: fetchEmployees } = useFetchEmployeeByLogin()

	const isDisabled = !date || !office || !tripType

	return (
		<Card className='mt-8 flex flex-wrap items-center justify-between gap-4 border-secondary px-12 py-6 shadow-sm'>
			{/* Filters */}
			<div className='flex flex-wrap gap-6 xl:items-center'>
				{/* Date Filter */}
				<DateFilter />

				{/* Trip Type Filter */}
				<TripTypeFilter />

				{/* Office Filter */}
				<OfficeFilter />
			</div>

			{/* Search Button */}
			<Button
				size='lg'
				className='inline-flex items-center gap-1.5'
				disabled={isDisabled}
				onClick={() => fetchEmployees()}
			>
				<TbSearch className='size-4' />
				<span>Search</span>
			</Button>
		</Card>
	)
}
