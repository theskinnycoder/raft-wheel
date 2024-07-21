import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticated')({
	beforeLoad({
		context: {
			authentication: { isAuthenticated },
		},
	}) {
		if (isAuthenticated) {
			throw redirect({ to: '/dashboard' })
		}
	},
	component: UnAuthenticatedLayout,
})

function UnAuthenticatedLayout() {
	return (
		<div className='flex min-h-screen flex-col'>
			<Outlet />
		</div>
	)
}
