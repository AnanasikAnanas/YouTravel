function FormatDrive() {
	const cards = [
		{
			id: 1,
			image: '/Format1.png',
			text: 'Живём на острове с уютными пляжами, кафе, магазинами и водными развлечениями',
		},
		{
			id: 2,
			image: '/Format2.png',
			text: 'Каждый день — новые острова, снорклинг, катание, приключения',
		},
		{
			id: 3,
			image: '/Format3.png',
			text: 'А вечерами — банька, посиделки и атмосфера YouTravel',
		},
	]

	return (
		<section className='container pt-16 pb-12 px-4'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{cards.map(card => (
					<div
						key={card.id}
						className='relative rounded-4xl overflow-hidden format-card aspect-[3/4]'
					>
						<img
							src={card.image}
							alt={card.text}
							className='w-full h-full object-cover'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent' />
						<p className='absolute bottom-6 left-6 right-6 text-2xl text-white font-medium leading-tight'>
							{card.text}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default FormatDrive
