import './card.css'



const Card = (options) => {
    const toLink = () => {
        window.open(
            options.link,
            '_blank' // <- This is what makes it open in a new window.
        )
    }

    return <div style={{backgroundImage: options.image}}>
        <div className={"card-header"}>
            <h1> {options.game} </h1>
            <p> {options.description} </p>
            <button onClick={toLink}> Посмотреть текущий проект </button>
        </div>
        <img className={"card-image"} src={options.image}/>
    </div>
}



export default Card