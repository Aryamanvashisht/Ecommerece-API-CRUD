import express from 'express'
import {userinfo,productlisting,addproducts,deleteproducts,updateproducts} from '../controller/info.js'


const router = express.Router()

router.get('/users',userinfo)

router.get('/products',productlisting)

router.post('/addproducts',addproducts)

router.delete('/deleteproducts/:id',deleteproducts)

router.patch('/updateproducts/:id',updateproducts)

export default router
