import "./team.css"
import MonteceFrame from "../montece-frame/montece-frame";
import TeammateFrame from "../teammate_frame/teammate-frame";
import teammate from "../../images/Evgeniy.png"
import montece from "../../images/Yuriy.png"
import artem from "../../images/Artem.png"
import egor from "../../images/Egor.png"
import elisey from "../../images/Elisey.png"
import ivan from "../../images/Ivan.png"
import valera from "../../images/Valeriy.png"
import nikita from "../../images/Nikita.png"
import savva from "../../images/Savva.png"
import ivan2 from "../../images/Ivan2.png"

const Team = () => {
    return <div className={"team"} id={'team'}>
        <div className={"team-header-grid"}>
        <h1> НАША ДРУЖНАЯ КОМАНДА </h1>
        <div className={"team-dots"}>
            <div></div>
            <div className={"team-dot"}>
            </div>
            <div></div>
            <div className={"team-dot"}></div>
            <div></div>
            <div className={"team-dot"}></div>
            <div></div>
            <div className={"team-grid-line"}>
                <div></div>
                <div className={"team-line"}></div>
                <div></div>
            </div>
            <div className={"team-vertical-line"}></div>
        </div>
        </div>
        <div className={"team-grid"}>
            <MonteceFrame teammate={montece}/>
            <div className={"team-grid-row1"}>
                <div className={"vl1"}></div>
                <TeammateFrame name={"Евгений"} surname={""} role={"Игровой сценарист"} photo={teammate}
                               area={"g"}/>
                <div className={"hl1"}></div>
                <TeammateFrame name={"Елисей"} surname={""} role={"2D-художник"} photo={elisey} area={"e"}/>
                <div className={"hl2"}></div>
                <TeammateFrame name={"Иван"} surname={""} role={"2D-художник"} photo={ivan} area={"c"}/>
                <div className={"vl2"}></div>
            </div>
            <div className={"team-grid-row2"}>
                <TeammateFrame name={"Егор"} surname={""} role={"Геймдизайнер"} photo={egor} area={"j"}/>
                <div className={"hl3"}></div>
                <TeammateFrame name={"Валерий"} surname={""} role={"Геймдизайнер, программист"} photo={valera} area={"k"}/>
                <div className={"hl4"}></div>
                <TeammateFrame name={"Дмитрий"} surname={""} role={"Программист"} photo={teammate} area={"p"}/>
                <div className={"hl5"}></div>
                <TeammateFrame name={"Иван"} surname={""} role={"2D-художник"} photo={ivan2} area={"i"}/>
            </div>
            <div className={"team-grid-row1"}>
                <div className={"vl1"}></div>
                <TeammateFrame name={"Никита"} surname={""} role={"Программист"} photo={nikita}
                               area={"g"}/>
                <div className={"hl1"}></div>
                <TeammateFrame name={"Артемий"} surname={""} role={"2D-художник"} photo={artem} area={"e"}/>
                <div className={"hl2"}></div>
                <TeammateFrame name={"Савва"} surname={""} role={"Комьюнити-менеджер"} photo={savva} area={"c"}/>
            </div>

        </div>
    </div>

}

export default Team