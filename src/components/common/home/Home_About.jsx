import { one, two, three, four, five, six } from '../../../assets/gallery/Index'
import Slider from '../../ui/Slider'


const item = [
    one,
    two,
    three,
    four,
    five,
    six
]


const Home_About = () => {
    return (
        <section className='layout my-20'>
            <header className='text-center'>
                <h3 className='text-sm font-bold text-text mb-4'>Who We Are</h3>
                <h2 className='text-4xl font-bold md:max-w-[80%] lg:max-w-[60%] mx-auto mb-10'>We're Our Blooms® and we're here to help you find your floral story.

                </h2>

                <button className='px-6 py-2 bg-yellow text-sm font-bold text-black rounded'>
                    About
                </button>
            </header>

            <Slider items={item} />
        </section>
    )
}

export default Home_About