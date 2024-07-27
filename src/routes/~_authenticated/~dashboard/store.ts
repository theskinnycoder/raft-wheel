import type { EMPLOYEE, RIDE_DETAILS } from '@/lib/types'
import { create } from 'zustand'

type TRIP_TYPE = 'login' | 'logout'

type Store = {
	tripType: TRIP_TYPE
	setTripType: (value: TRIP_TYPE) => void

	office: string
	setOffice: (value: string) => void

	date: string
	setDate: (value: Date) => void

	employeeList: EMPLOYEE[]
	setEmployeeList: (value: EMPLOYEE[]) => void

	processEmployees: RIDE_DETAILS[]
	setProcessEmployees: (value: RIDE_DETAILS[]) => void

	employeeTableSelectedRow: EMPLOYEE[]
	setEmployeeTableSelectedRow: (value: EMPLOYEE[]) => void
}

const useFiltersStore = create<Store>(set => ({
	tripType: 'login',
	setTripType: (value: TRIP_TYPE) => set({ tripType: value }),

	office: 'Durgam Cheruvu',
	setOffice: (value: string) => set({ office: value }),

	date: new Date().toISOString(),
	setDate: (value: Date) => set({ date: value.toISOString() }),

	employeeList: [],
	setEmployeeList: (value: EMPLOYEE[]) => set({ employeeList: value }),

	// processEmployees: [],
	processEmployees: [
		{
			loginTime: '18:30:00',
			logoutTime: '',
			driverName: 'chandra',
			driverId: 'TS07HD0017',
			driverPhoneNumber: '9160940017',
			tripStartDate: '2024-07-21T11:26:49.275+00:00',
			empTripData: [
				{
					tripId: 102,
					empName: 'MaskMama Prakash',
					empId: 7,
					empPhoneNumber: '8555834878',
					pickupLocation: 'L.B.Nager',
					dropOffLocation: 'durgam cheruvu',
				},
				{
					tripId: 103,
					empName: 'MaskMama Prakash',
					empId: 7,
					empPhoneNumber: '8555834878',
					pickupLocation: 'L.B.Nager',
					dropOffLocation: 'durgam cheruvu',
				},
			],
		},
		{
			loginTime: '18:30:00',
			logoutTime: null,
			driverName: 'chandra',
			driverId: 'TS07HD0017',
			driverPhoneNumber: '9160940017',
			tripStartDate: '2024-07-21T11:26:49.275+00:00',
			empTripData: [
				{
					tripId: 104,
					empName: 'MaskMama Prakash',
					empId: 7,
					empPhoneNumber: '8555834878',
					pickupLocation: 'L.B.Nager',
					dropOffLocation: 'durgam cheruvu',
				},
				{
					tripId: 105,
					empName: 'MaskMama Prakash',
					empId: 7,
					empPhoneNumber: '8555834878',
					pickupLocation: 'L.B.Nager',
					dropOffLocation: 'durgam cheruvu',
				},
			],
		},
	],
	setProcessEmployees: (value: RIDE_DETAILS[]) =>
		set({ processEmployees: value }),

	employeeTableSelectedRow: [],
	setEmployeeTableSelectedRow: (value: EMPLOYEE[]) =>
		set({ employeeTableSelectedRow: value }),
}))

export default useFiltersStore
