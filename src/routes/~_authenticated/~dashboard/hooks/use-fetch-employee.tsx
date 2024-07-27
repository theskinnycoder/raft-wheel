import api from '@/lib/api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import useFiltersStore from '../store'
import type { EMPLOYEE } from '@/lib/types'

export function useFetchEmployee() {
	const { setEmployeeList, setProcessEmployees } = useFiltersStore()

	const dummyTripData = [
		{
			loginTime: '18:30:00',
			logoutTime: null,
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
	]

	const useFetchEmployeeByLogin = () =>
		useMutation({
			mutationFn: async () => {
				const { data } = await api.get(
					'/api/fetchEmpByLoginTime?loginTime=18:30:00&page=0&size=10&sort=id,asc',
				)
				console.log(data)
				setEmployeeList(data._embedded.employeeList)
			},
			mutationKey: ['getEmployeeListByLogin'],
			onSuccess: () => {
				toast.success('Employees fetched successfully')
			},
			onError: () => {
				toast.error('Failed to fetch employees')
			},
		})

	const useProcessEmployees = () =>
		useMutation({
			mutationFn: async (payload: EMPLOYEE[]) => {
				const { data } = await api.post('/api/processEmployees', payload)
				setProcessEmployees(data)
			},
			mutationKey: ['getProcessEmployees'],
			onSuccess: () => {
				toast.success('Trips fetched successfully')
			},
			onError: () => {
				setProcessEmployees(dummyTripData)
			},
		})

	return {
		useFetchEmployeeByLogin,
		useProcessEmployees,
	}
}
