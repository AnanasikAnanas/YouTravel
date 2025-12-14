function HeroBlock() {
	return (
		<section className='container hero-block'>
			<div className='flex flex-col px-12 py-16 border rounded-4xl card-hero text-white max-w-[744px] gap-12'>
				<div className='flex flex-col gap-6'>
					<h2 className='text-[84px]'>Мы летим на Мальдивы!</h2>
					<p className='text-3xl'>10 дней приключений, солнца и кайфа</p>
				</div>
				<button className='px-6 py-8 rounded-full bg-[#3DA5D9] text-2xl font-medium cursor-pointer'>Хочу поехать!</button>
			</div>
		</section>
	)
}

export default HeroBlock
