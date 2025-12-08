import logo from '../../assets/logo.svg'
function Header() {
	return (
		<header className='container max-h-25 py-5 flex items-center justify-between'>
			<a href='/' className='w-fit rounded-4xl px-8 py-5 bg-white'>
				<img src={logo} alt='logo' />
			</a>
			<nav className='flex items-center gap-12 px-8 py-5 bg-white rounded-4xl navigation-links'>
				<a href=''>Что ждет в поездке?</a>
				<a href=''>Формат пушествия</a>
				<a href=''>Программа</a>
				<a href=''>Стоимость</a>
				<a href=''>Галерея</a>
				<a href=''>Отзывы</a>
			</nav>
			<button className='px-8 py-5 bg-white text-[#3da5d9] font-bold rounded-4xl cursor-pointer hover:bg-gray-200 transition-all duration-300'>Связаться</button>
		</header>
	)
}

export default Header
