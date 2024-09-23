const ItemCard = (props) => {
    return (
        <div className="ItemCard">
            <img src={props.image}></img>
            <h2>{props.title}</h2>
            <h4>{props.type}</h4>
            <div className="view-menu-button">
                <a href={props.url}>
                    <button>View Menu</button>
                </a>
            </div>
        </div>
    )
}
export default ItemCard;