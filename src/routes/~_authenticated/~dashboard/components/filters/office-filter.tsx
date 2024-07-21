import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import useFiltersStore from '../../store'

export default function OfficeFilter() {
	const { office, setOffice } = useFiltersStore()

	return (
		<div className='grid gap-2'>
			<Label htmlFor='office-filter'>Office</Label>
			<Select
				value={office}
				onValueChange={setOffice}
			>
				<SelectTrigger
					id='office-filter'
					className='w-[180px]'
				>
					<SelectValue placeholder='Office' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='Durgam Cheruvu'>Durgam Cheruvu</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
