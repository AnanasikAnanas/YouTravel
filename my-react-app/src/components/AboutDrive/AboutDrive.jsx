import { useEffect, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import AboutDriveCard from './AboutDriveCard'

const cards = [
	{
		id: 1,
		title: 'Сотни островов',
		image: '/Card1.png',
	},
	{
		id: 2,
		title: 'День на водном резорте',
		image: '/Card2.png',
	},
	{
		id: 3,
		title: 'Плавание со скатами и акулами',
		image: '/Card3.png',
	},
	{
		id: 4,
		title: 'Ужин из улова на рыбалке',
		image: '/Card4.png',
	},
]

function AboutDrive() {
	const swiperRef = useRef(null)
	const prevButtonRef = useRef(null)
	const nextButtonRef = useRef(null)

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.navigation.init()
			swiperRef.current.navigation.update()
		}
	}, [])

	return (
		<section className='container pt-16 pb-12'>
			<h1 className='text-center text-6xl mb-12'>Что ждет в поездке?</h1>

			{/* Десктоп: все карточки в ряд */}
			<div className='hidden lg:grid grid-cols-4 gap-4 px-4'>
				{cards.map(card => (
					<AboutDriveCard key={card.id} title={card.title} image={card.image} />
				))}
			</div>

			{/* Мобильный/планшет: слайдер */}
			<div className='relative lg:hidden'>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={16}
					slidesPerView={1}
					pagination={{
						clickable: true,
					}}
					onSwiper={swiper => {
						swiperRef.current = swiper
					}}
					onBeforeInit={swiper => {
						swiper.navigation.prevEl = prevButtonRef.current
						swiper.navigation.nextEl = nextButtonRef.current
					}}
					className='about-drive-swiper'
				>
					{cards.map(card => (
						<SwiperSlide key={card.id}>
							<div className='flex justify-center px-4'>
								<AboutDriveCard title={card.title} image={card.image} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Кнопки навигации */}
				<button
					ref={prevButtonRef}
					onClick={() => swiperRef.current?.slidePrev()}
					className='absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10'
					aria-label='Предыдущий слайд'
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15 18L9 12L15 6'
							stroke='#1C7C7C'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>

				<button
					ref={nextButtonRef}
					onClick={() => swiperRef.current?.slideNext()}
					className='absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10'
					aria-label='Следующий слайд'
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9 18L15 12L9 6'
							stroke='#1C7C7C'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</div>
		</section>
	)
}

export default AboutDrive
