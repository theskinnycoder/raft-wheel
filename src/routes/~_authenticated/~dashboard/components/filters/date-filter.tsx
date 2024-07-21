import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import useFiltersStore from '../../store'

export default function DateFilter() {
	const { date, setDate } = useFiltersStore()

	return (
		<div className='grid gap-2'>
			<Label htmlFor='date-filter'>Date</Label>

			<Popover>
				<PopoverTrigger asChild>
					<Button
						id='date-filter'
						variant='outline'
						className={cn(
							'w-[240px] justify-start text-left font-normal',
							!date && 'text-muted-foreground',
						)}
					>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{date ? format(date, 'PPP') : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className='w-auto p-0'
					align='start'
				>
					<Calendar
						mode='single'
						selected={new Date(date)}
						onSelect={value => {
							if (value) {
								setDate(value)
							}
						}}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}
