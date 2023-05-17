
import Product from './Product'
export default function ProductList(props) {

  return (
   
       props.productList.map((product)=>{
        return <product product={product}/>
       }
    
  )
    )}
