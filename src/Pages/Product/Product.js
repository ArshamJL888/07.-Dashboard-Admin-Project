import React, { useEffect, useState } from 'react'
import './Product.css'
import Chart from '../../Components/Chart/Chart'
import { getProduct } from '../../GetProduct'
import { useParams } from 'react-router-dom';
import { editProduct, deleteProduct } from '../../AllProducts'

export default function Product() {
    let params = useParams();

    const [productData, setproductData] = useState([])
    const [productIsChange, setProductIsChange] = useState(false)
    useEffect(() => {
        getProduct(+params.productID).then(data => {
            setproductData({ productID: data[0], ...data[1] })
        })
    }, [productIsChange])


    const [productName, setProductName] = useState(productData.name)
    const [productPrice, setProductPrice] = useState(productData.price)
    const [productStatus, setProductStatus] = useState(productData.status)
    const [sumOfAll, setSumOfAll] = useState(0)

    async function changeNameHandler(event) {
        await setProductName(event.nativeEvent.target.value)
    }
    async function changePriceHandler(event) {
        await setProductPrice(event.nativeEvent.target.value)
    }
    async function changeStatusHandler(event) {
        await setProductStatus(event.nativeEvent.target.value)

    }

    useEffect(() => {
        let salsesArray = productData.report ?? []
        let sum = salsesArray.reduce((sum, curr) => {
            return sum + curr.sale;
        }, 0).toFixed(2)
        setSumOfAll(sum)
    }, [productData.report])

    // console.log(clacPrice(productData.report));


    async function editProductHandler(event, id) {
        event.preventDefault();
        let newProduct = {
            name: productName,
            price: productPrice,
            status: productStatus
        }
        await editProduct(id, newProduct)
        setProductIsChange(!productIsChange)
    }

    return (
        <div className='product'>
            <div className='product-title-container'>
                <h2 className='product-title'>Product</h2>
                <button className='product-create-btn'>Create</button>
            </div>

            <div className='product-top'>
                <div className='product-top-left'>
                    <Chart title="Sale In Last Three Months" data={productData.report} dataKey="sale" />
                </div>
                <div className='product-top-right'>
                    <div className='product-info-top'>
                        <img className='product-info-top-image' src={'.' + productData.img} alt={productData.name} />
                        <span className='product-info-top-name'>{productData.name}</span>
                    </div>
                    <div className='product-info-bottom'>
                        <div className='product-info-item'>
                            <div className='product-info-item-key'>ID: </div>
                            <div className='product-info-item-key-value'>{productData.id}</div>
                        </div>
                        <div className='product-info-item'>
                            <div className='product-info-item-key'>Name: </div>
                            <div className='product-info-item-key-value'>{productData.name}</div>
                        </div>
                        <div className='product-info-item'>
                            <div className='product-info-item-key'>Price: </div>
                            <div className='product-info-item-key-value'>${productData.price}</div>
                        </div>
                        <div className='product-info-item'>
                            <div className='product-info-item-key'>Status: </div>
                            <div className='product-info-item-key-value'>{productData.status}</div>
                        </div>
                        <div className='product-info-item'>
                            <div className='product-info-item-key'>Sales: </div>
                            <div className='product-info-item-key-value'>${sumOfAll}</div>
                            {/* <div className='product-info-item-key-value'>${10000}</div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='product-bottom'>
                <form className='product-form'>
                    <div className='product-form-left'>
                        <div className='product-form-left-input-box'>
                            <label>Product Name: </label>
                            <input onChange={(event) => changeNameHandler(event)} type="text" placeholder={productData.name} />
                        </div>

                        <div className='product-form-left-input-box'>
                            <label>Product Price: </label>
                            <input onChange={(event) => changePriceHandler(event)} type="number" placeholder={productData.price} />
                        </div>

                        <div className='product-form-left-input-box'>
                            <label >Product Status: </label>
                            <select onChange={(event) => changeStatusHandler(event)}>
                                <option value="available">Available</option>
                                <option value="not-available">Not-Available</option>
                            </select>
                        </div>

                    </div>
                    <div className='product-form-right'>
                        <button className='product-form-edit-btn' onClick={(event) => editProductHandler(event, productData.productID)}>Upload (Edit)</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
