function TripPrice() {
	return(
		<section className='flex gap-5 container'>
			<div className='px-16 py-15 flex flex-col justify-between bg-white w-full rounded-4xl'>
				<h3 className='text-3xl font-medium'>Стоимость</h3>
				<div className='flex flex-col gap-4 '>
					<h2 className='text-6xl font-medium'>1499 $</h2>
					<p className='text-2xl opacity-[.54] '>1399 $ до 1 сентября</p>
				</div>
			</div>
			
			<div className='flex gap-5 p-8 bg-white rounded-4xl w-full'>
				<div className='flex flex-col p-8 gap-6 w-full price-card rounded-4xl'>
					<h4 className='text-2xl text-[#4CAF50]'>Что входит</h4>
					<div className='text-xl flex flex-col gap-4'>
						<p>Проживание в отеле у океана</p>
						<p>Завтраки</p>
						<p>Все трансферы</p>
						<p>Страховка</p>
						<p>Сопровождение организатора</p>
					</div>
				</div>
				<div className='flex flex-col p-8 gap-6 w-full price-card rounded-4xl '>
					<h4 className='text-2xl text-[#F44336]'>Что не входит</h4>
					<div className='text-xl flex flex-col gap-4'>
						<p className='flex gap-4'>Перелет
						<span className='opacity-[.4]'>~ 900 €</span></p>
						<p className='flex gap-4'>Доп. экскурсии
						<span className='opacity-[.4]'>400 - 700 $</span></p>
						<p className='flex gap-4'>Питание
						<span className='opacity-[.4]'>200 - 250 $</span></p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TripPrice