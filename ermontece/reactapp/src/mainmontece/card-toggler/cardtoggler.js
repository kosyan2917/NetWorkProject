import {Carousel} from "react-responsive-carousel";
import {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./card/card";
import erbg from "../../images/1.png"
class CardToggler extends Component {
    render() {
        return <Carousel showThumbs={false} showStatus={false}>
        <Card game={"ETERNAL RIFTS"}
              description={"Пошаговая стратегия с элементами коллекционной карточной игры в сеттинге научной фантастики. Этот проект создается знатоками жанров, наполняющих ее душой, вниманием к деталям и высоким качеством функционирования\n"}
              image={erbg}
              link={"https://vk.com/eternalrifts"}/>
        </Carousel>
    }
}

export default CardToggler