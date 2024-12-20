import GamesHeader from "./games-header/games-header";
import Game from "./game/game";
import "./games.css"
import zdk from '../images/new_bg_1.png'
import er from '../images/3.png'

const Games = () => {
    return <div className={"games"}>
        <GamesHeader/>
        <Game name={"ETERNAL RIFTS"}
              description={"Пошаговая стратегия с элементами коллекционной карточной игры в сеттинге научной фантастики. Этот проект создается знатоками жанров, наполняющих ее душой, вниманием к деталям и высоким качеством функционирования\n"}
              image={er}
              link={"https://vk.com/eternalrifts"}
        />
        <Game name={"ZOMBIE DASH KILL"}
              description={"Легендарная первая игра от нашей команды. Увлекательный и сложный платформер-бродилка в постапокалиптическом мире. Сражайтесь против зомби в городах, лесах, подземных научных лабораториях и победите нулевого пациента!"}
              image={zdk}
              link={"https://montece-gaming.itch.io/zombie-dash-kill"}
        />
    </div>
}

export default Games