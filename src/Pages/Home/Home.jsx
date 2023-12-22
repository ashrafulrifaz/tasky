import Banner from "../../Components/HomeComp/Banner/Banner";
import UsefulFor from "../../Components/HomeComp/UsefulFor/UsefulFor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[90%] xl:max-w-[1100px] mx-auto">
                <UsefulFor></UsefulFor>
            </div>
        </div>
    );
};

export default Home;