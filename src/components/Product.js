import react from "react"

export default function Product(props) {
    console.log(props);
    return(
        <div className='row'>
            <div className='col-6'>
            <h2>{props.name}</h2>
            </div>
        </div>
    )
    }