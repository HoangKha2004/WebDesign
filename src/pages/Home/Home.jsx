import Slide from './Slide/Slide';
import BuyTicket from './Slide/BuyTicket/BuyTicket';
import Content from './Content/Content';
import Advertisement from './Advertisement/Advertisement';
const Home = () => {
    return (
        <>
            <div className="relative">
                <Slide></Slide>
                <BuyTicket></BuyTicket>
            </div>
            <Content></Content>
            <Advertisement></Advertisement>
        </>
    );
};

export default Home;
