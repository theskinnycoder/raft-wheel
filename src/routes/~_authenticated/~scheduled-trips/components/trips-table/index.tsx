import { Card } from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import type { RIDE_DETAILS } from '@/lib/types'
import {
	flexRender,
	getCoreRowModel,
	getExpandedRowModel,
	useReactTable,
	type ColumnDef,
	type Row,
	type VisibilityState,
} from '@tanstack/react-table'
import { useState } from 'react'

interface TripsTableProps {
	columns: ColumnDef<RIDE_DETAILS>[]
	data: RIDE_DETAILS[]
	renderSubComponent: (props: { row: Row<RIDE_DETAILS> }) => React.ReactElement
	getRowCanExpand: (row: Row<RIDE_DETAILS>) => boolean
}

function TripsTable({
	columns,
	data,
	renderSubComponent,
	getRowCanExpand,
}: TripsTableProps) {
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

	const table = useReactTable({
		data,
		columns,
		state: {
			columnVisibility,
		},
		getRowCanExpand,
		// onExpandedChange: setExpanded,
		onColumnVisibilityChange: setColumnVisibility,
		getExpandedRowModel: getExpandedRowModel(),
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<Card className='mt-8 rounded-md border border-secondary shadow-sm'>
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return (
									<TableHead
										key={header.id}
										colSpan={header.colSpan}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map(row => (
							<>
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>

								{row.getIsExpanded() && (
									<TableRow>
										{/* 2nd row is a custom 1 cell row */}
										<TableCell colSpan={row.getVisibleCells().length}>
											{renderSubComponent({ row })}
										</TableCell>
									</TableRow>
								)}
							</>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className='h-24 text-center'
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</Card>
	)
}

export default TripsTable
