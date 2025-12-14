function ProgramDrive() {
	const stages = [
		{
			id: 1,
			image: '/Program1.png',
			title: 'Вылет из Москвы',
			date: '10 октября',
		},
		{
			id: 2,
			image: '/Program2.png',
			title: 'Мальдивы',
			date: '11 - 20 октября',
		},
		{
			id: 3,
			image: '/Program3.png',
			title: 'Домой',
			date: '21 октября',
		},
	]

	return (
		<section className='container pt-16 pb-12 px-4'>
			<h1 className='text-center text-6xl mb-16'>Программа поездки</h1>

			<div className='relative w-full py-12'>
				{/* Контейнер для карточек */}
				<div className='relative w-full flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 px-4 md:px-8'>
					{/* Карточки */}
					{stages.map(stage => (
						<div
							key={stage.id}
							className='relative z-10 flex flex-col items-center gap-4 flex-1 max-w-[250px] program-card'
						>
							<div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
								<img
									src={stage.image}
									alt={stage.title}
									className='w-32 h-32 object-contain'
								/>
							</div>
							<div className='text-center'>
								<p className='text-xl font-medium mb-1'>{stage.title}</p>
								<p className='text-lg text-gray-600'>{stage.date}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProgramDrive
