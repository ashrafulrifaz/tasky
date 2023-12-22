import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/banner_img.png'
// import bannerBG from '../../../assets/banner_bg.jpg'


const Banner = () => {
    // const bannerStyle = {
    //     background: `url('${bannerBG}')`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat'
    // }

    return (
        <div>
            <div className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-[90%] xl:max-w-[1100px] mx-auto">
                <div className='space-y-4 text-center md:text-left'>
                    <h2 className='text-4xl md:text-5xl font-semibold leading-snug'>Effortless Task Mastery Awaits You!</h2>
                    <p className='text-slate-800 font-medium'>Simplify your day with Tasky. Effortless task management at your fingertips. Sign up for seamless productivity!</p>
                    <Link to='/login'>
                        <button className='rounded-lg py-2.5 px-5 bg-indigo-600 text-white font-medium hover:translate-x-2 transition-all mt-4 text-sm lg:text-base'>Let{"'"}s Explore</button>
                    </Link>
                </div>
                <div>
                    <img src={bannerImage} alt="image" className='w-full mt-5 md:mt-0' />
                </div>
            </div>
        </div>
    );
};

export default Banner;