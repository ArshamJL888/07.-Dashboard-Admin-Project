import React, { useEffect } from 'react'
import './Products.css'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getProducts, deleteProduct, editProduct } from '../../AllProducts'
export default function Products() {

  let allProducts = [];

  const [productIsChange, setProductIsChange] = useState(false)

  const [productsData, setproductsData] = useState([])

  useEffect(() => {
    allProducts = [];
    getProducts().then(data => {
      data.forEach(info => {
        allProducts.push({ productID: info[0], ...info[1] })
      })
      setproductsData(allProducts)
    })

  }, [productIsChange])

  async function deleteProductHandler(productID) {
    await deleteProduct(productID)
    setProductIsChange(!productIsChange)
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 60,
      editable: true,
    },
    {
      field: 'productID',
      headerName: 'Product-ID',
      width: 300,
      editable: true,
    },
    {
      field: 'product',
      headerName: 'Product',
      width: 300,
      editable: true,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className='link'>
              <div className='products-list-product'>
                <img className='products-list-product-image' src={params.row.img} alt='product image' />
                {params.row.name}
              </div>
            </Link>
          </>
        )
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'price',
      width: 200,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className='link'>
              <button className='products-list-edit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='products-list-delete'
              onClick={() => deleteProductHandler(params.row.productID)}
            />
          </>
        )
      }
    },
  ]

  return (
    <div className='products-list'>
      <DataGrid
        rows={productsData}
        columns={columns}
        disableRowSelectionOnClick
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
      />
    </div>
  )
}
