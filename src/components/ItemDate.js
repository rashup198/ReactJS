import './ItemDate.css';

function ItemDate(){

    const day =20;
    const month ="june"
    const year =1923
    return(
        <div className='mfg-date'>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}

export default ItemDate;