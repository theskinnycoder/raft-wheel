import { Link } from '@tanstack/react-router'
import { AccountDropdown } from './account-dropdown'

export default function Header() {
	return (
		<header
			className='sticky inset-x-0 top-0 z-50 px-4 py-4 shadow-md shadow-primary/10 backdrop-blur-sm backdrop-filter xl:px-12'
			style={{
				height: 'var(--header-height)',
			}}
		>
			<div className='flex items-center justify-between'>
				<Link to='/dashboard'>
					<div className='mt-1.5 inline-flex items-center gap-2'>
						<img
							src='/logo.png'
							alt='Logo'
							className='aspect-square w-8'
						/>
						<span className='font-medium'>Raft Wheel</span>
					</div>
				</Link>

				{/* Account Dropdown */}
				<AccountDropdown />
			</div>
		</header>
	)
}
