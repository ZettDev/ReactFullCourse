import PropTypes from "prop-types";

function List(props) {

    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map(item =>
        <li key = {item.id}>{item.name.charAt(0).toUpperCase() +
            item.name.slice(1)}:&nbsp;
            <b>{item.calories} calories</b></li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}
List.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,name: PropTypes.string,
    calories: PropTypes.number})),
    category: PropTypes.string,
}
List.defaultProps = {
    items: [],
    category: "Category",
}

export default List;