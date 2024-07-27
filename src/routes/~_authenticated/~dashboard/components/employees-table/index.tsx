import { Card } from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import useFiltersStore from '../../store'
import type { EMPLOYEE } from '@/lib/types'

interface EmployeesTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	// setRowSelectionData: Dispatch<SetStateAction<EMPLOYEE[]>>
}

export default function EmployeesTable<TData, TValue>({
	columns,
	data,
	// setRowSelectionData,
}: EmployeesTableProps<TData, TValue>) {
	const [rowSelection, setRowSelection] = useState({})
	const { employeeList, setEmployeeTableSelectedRow } = useFiltersStore()

	useEffect(() => {
		const selectedRow: EMPLOYEE[] = Object.values(rowSelection)
			.map((value, index) => (value ? employeeList[index] : undefined))
			.filter((item): item is EMPLOYEE => item !== undefined)

		// setRowSelectionData(selectedRow)

		setEmployeeTableSelectedRow(selectedRow)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rowSelection])

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			rowSelection,
		},
	})

	return (
		<Card className='mt-8 rounded-md border border-secondary shadow-sm'>
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return (
									<TableHead key={header.id}>
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
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && 'selected'}
							>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
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
