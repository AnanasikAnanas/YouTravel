import './App.css'
import AboutDrive from './components/AboutDrive/AboutDrive'
import FormatDrive from './components/FormatDrive/FormatDrive'
import GalleryTrip from './components/GalleryTrip/GalleryTrip'
import Header from './components/Header/Header'
import HeroBlock from './components/Hero/HeroBlock'
import ProgramDrive from './components/ProgramDrive/ProgramDrive'
import TripPrice from './components/TripPrice/TripPrice'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<>
			<section className='hero'>
				<Header />
				<HeroBlock />
				<AboutDrive />
				<FormatDrive />
				<ProgramDrive />
				<TripPrice />
        <GalleryTrip/>
        <Footer />
			</section>
		</>
	)
}

export default App
