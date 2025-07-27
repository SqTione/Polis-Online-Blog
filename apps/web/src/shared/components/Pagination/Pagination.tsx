import { MoveLeft, MoveRight } from 'lucide-react'

type PaginationProps = {
	currentPage: number
	lastPage: number
	onPageChange: (pageNumber: number) => void
}

export const Pagination = ({
	currentPage,
	lastPage,
	onPageChange,
}: PaginationProps) => {
	const canPrev = currentPage > 1
	const canNext = currentPage < lastPage

	const handleNextPage = () => {
		onPageChange(currentPage + 1)
	}

	const handlePrevPage = () => {
		onPageChange(currentPage - 1)
	}

	return (
		<div className='flex justify-between items-center my-8 w-full'>
			<button
				onClick={handlePrevPage}
				disabled={!canPrev}
				className='btn disabled:opacity-20'
			>
				<MoveLeft color='#3d3d3b'></MoveLeft>
			</button>

			<span>{currentPage}</span>

			<button
				onClick={handleNextPage}
				disabled={!canNext}
				className='btn disabled:opacity-20'
			>
				<MoveRight color='#3d3d3b' />
			</button>
		</div>
	)
}
