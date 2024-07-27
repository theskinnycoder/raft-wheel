export interface USER {
	email: string
}

export interface EMPLOYEE {
	id: number
	firstName: string
	lastName: string
	gender: string
	pickupLocation: string
	empPhoneNumber: string
	loginTime: string
	logoutTime: string
	dropOffLocation: string | null
}

export interface RIDE_DETAILS {
	loginTime: string | null
	logoutTime: string | null
	driverName: string
	driverId: string
	driverPhoneNumber: string
	tripStartDate: string
	empTripData: EMPLOYEE_RIDE_DETAILS[]
}

export interface EMPLOYEE_RIDE_DETAILS {
	tripId: number
	empName: string
	empId: number
	pickupLocation: string
	dropOffLocation: string
	empPhoneNumber: string
}
