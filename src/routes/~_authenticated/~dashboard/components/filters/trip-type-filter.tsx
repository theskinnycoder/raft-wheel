import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import useFiltersStore from '../../store'

export default function TripTypeFilter() {
	const { tripType, setTripType } = useFiltersStore()

	return (
		<div className='grid gap-2'>
			<Label htmlFor='trip-type-filter'>Trip Type</Label>
			<Select
				value={tripType}
				onValueChange={setTripType}
			>
				<SelectTrigger
					id='trip-type-filter'
					className='w-[180px]'
				>
					<SelectValue placeholder='Trip Type' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='login'>Login Trip</SelectItem>
					<SelectItem value='logout'>Logout Trip</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
