function AboutDriveCard({ title, image }) {
	return (
		<div className='relative p-10 rounded-2xl  about-card'>
			<h3 className='text-3xl font-medium'>{title}</h3>
			<div className='absolute bottom-0 right-0 flex items-center justify-center'>
				<img
					src={image}
					alt={title}
					className='object-contain max-w-[300px] max-h-[300px]'
				/>
			</div>
		</div>
	)
}

export default AboutDriveCard
