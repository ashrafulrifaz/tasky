import { Link } from 'react-router-dom';
import errorImage from '../../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className='max-w-[90%] mx-auto xl:max-w-[1100px] text-center'>
            <img src={errorImage} alt="404" className='w-full md:w-1/2 lg:w-2/5 mx-auto' />
            <Link to='/'>
                <button className='rounded-lg py-2.5 px-5 bg-[#007CFF] text-white font-medium hover:translate-x-2 transition-all mt-4 text-sm lg:text-base'>Back To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;