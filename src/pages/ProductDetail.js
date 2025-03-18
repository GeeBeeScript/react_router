import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams()
    return (
        <div>
            {console.log(params)}
            <h1>Product Detail</h1>
            <p>{ params.productId }</p>
        </div>
    )
}

export default ProductDetail