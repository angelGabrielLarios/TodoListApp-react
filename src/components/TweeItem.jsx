const TweeItem = ({tweet}) => {
    return (
        <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
            {tweet} <i className="fa-solid fa-minus text-danger fw-bold"></i>
        </li>
    )
}

export default TweeItem