import Logo from '../../../assets/logo/Logo.png'
import hero_bg from '../../../assets/hero_bg.png'
import outline from '../../../assets/outline.png'
const Hero_Banner = () => {
    return (
        <section className='mt-20 space-y-16'>
            <div>
                <img src={Logo} alt="Our Blooms"
                    width={100}
                    height={100}
                    loading='eager'
                    fetchPriority='high'
                    className='w-full h-auto object-contain px-12 '
                />
            </div>
            <div className='relative'>
                <img src={hero_bg} alt="red flower"
                    loading='eager'
                    fetchPriority='high'
                    className='w-full h-140 object-cover rounded-4xl'
                />
                <div className='absolute bottom-10 left-10'>
                    <img src={outline} alt="outline"
                        loading='eager'
                        className='w-full h-auto object-cover rounded-4xl'
                    />
                    <div className='absolute top-1/2 left-1/2 -translate-1/2 px-6 w-full font-bold'>
                        <span className='block text-center text-sm'>New</span>
                        <h4 className='text-center text-2xl my-2'>10% off your First Order</h4>
                        <span className='block text-center text-sm '>Special</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero_Banner;