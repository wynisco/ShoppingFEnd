import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])



  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product,idx) => {
        // console.log(product.image.substring(0, 8), "/images/")
        // if (product.image.substring(0, 8) !== "/images/") {
        //   product.image = `https://secure-ravine-48894.herokuapp.com/${product.image}`
        //   console.log(product.image, "inside if")
        // }
        // console.log(product.image, product.name)

        //bug: top 3 products displayed in 2,3,1 instead of 1-3
        // console.log(products.length,idx, "prod size");
        // if(idx!== products.length-1)         product = products[idx+1]
        // else product = products[0]
        
        //bug: carousel shows different item's image
        // idx = (idx!== products.length-1) ? idx+1:0;


        //bug: carousel links to different item image
        // idx = (idx!== products.length-1) ? idx+1:0;
        return (
          <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`}>
              <Image src={product.image} alt={product.name} fluid />
              <Carousel.Caption className='carousel-caption'>
                <h2>
                  {product.name} (${product.price})
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default ProductCarousel
