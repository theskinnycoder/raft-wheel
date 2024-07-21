import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import Header from './~_authenticated/components/header'

export const Route = createFileRoute('/_authenticated')({
	beforeLoad({
		context: {
			authentication: { isAuthenticated },
		},
	}) {
		if (!isAuthenticated) {
			throw redirect({ to: '/login' })
		}
	},
	component: () => <AuthenticatedLayout />,
})

function AuthenticatedLayout() {
	return (
		<div className='bg-dot-black/10 relative overflow-hidden'>
			<Header />

			<div
				className='h-full overflow-y-auto px-4 pb-12 pt-6 xl:px-12'
				style={{
					maxHeight: 'calc(100vh - var(--header-height))',
				}}
			>
				<Outlet />
			</div>
		</div>
	)
}
