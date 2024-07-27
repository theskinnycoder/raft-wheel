import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import type { EMPLOYEE_RIDE_DETAILS, RIDE_DETAILS } from '@/lib/types'
import type { Row } from '@tanstack/react-table'

const ExpandedRowTable = ({ row }: { row: Row<RIDE_DETAILS> }) => {
	const data = row.original.empTripData

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Trip ID</TableHead>
					<TableHead>Employee Name</TableHead>
					<TableHead>Employee ID</TableHead>
					<TableHead>Employee Phone Number</TableHead>
					<TableHead>Pickup Location</TableHead>
					<TableHead>Drop Off Location</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((trip: EMPLOYEE_RIDE_DETAILS) => (
					<TableRow key={trip.tripId}>
						<TableCell>{trip.tripId}</TableCell>
						<TableCell>{trip.empName}</TableCell>
						<TableCell>{trip.empId}</TableCell>
						<TableCell>{trip.empPhoneNumber}</TableCell>
						<TableCell>{trip.pickupLocation}</TableCell>
						<TableCell>{trip.dropOffLocation}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default ExpandedRowTable
