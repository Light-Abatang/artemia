 "use client"
import { db } from "@/config/firebase.config";
import { Alert, AlertTitle, Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik} from "formik";
import { useSession } from "next-auth/react";
import * as yup from "yup";

const schema = yup.object().shape({
    productname: yup.string().required("product name is required").min(8),
    description: yup.string().required("descrition is required").min(10),
    price: yup.number().required("price is required").positive("price must be positive")
})

export default function AddProduct ({userId}) {

    const {data : session} = useSession();
    console.log(session)
    const userIdentifier = userId || (session?.user?.id)

    const {handleSubmit, handleChange, touched, values, errors} = useFormik({
      initialValues: {
        productname:"",
        description:"",
        price:""
      },
      onSubmit: async () => {
        await addDoc(collection(db,"products"),{
            user: userIdentifier,
            productname : values.productname,
            description : values.description,
            price : values.price,
            timecreated: new Date().getTime(),
        }).then(() =>{
            alert("you have added a product");
        }).catch(e=> {
            console.error(e)
            alert("You encountered an unknown error")
        })
      },
      validationSchema: schema,
    })

    return (
        <Card sx={{maxWidth:500, margin:"auto", mt:5, p:2}}>
            <CardHeader title="Add products"/>
            <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <TextField 
                        fullWidth 
                        label="product name" 
                        id="productname" 
                        value={values.productname} 
                        type="text" 
                        placeholder="Enter product name"
                        onChange={handleChange}
                        />
                        {touched.productname && errors.productname ? <span className="text-red-600">{errors.productname}</span>:null}
                    </div>
                    <div>
                        <TextField 
                        fullWidth
                        multiline
                        rows={3}
                        label="Description" 
                        id="description" 
                        value={values.description} 
                        type="text" 
                        placeholder="Enter product description"
                        onChange={handleChange}
                    />
                    {touched.productname && errors.description ? <span className="text-red-600">{errors.description}</span>:null}
                    </div>
                    <div>
                        <TextField
                        fullWidth
                        type="number"
                        label="price"
                        id="price"
                        value={values.price}
                        placeholder="Enter Price"
                        onChange={handleChange}
                    />
                    {touched.productname && errors.price ? <span className="text-red-600">{errors.price}</span>:null}
                    </div>
                    
                    <Button type="submit" variant="contained" color="primary" fullWidth>Add Product</Button>
                </form>
            </CardContent>
            <Alert severity="success" onClose={() => {}} className="h-[75px] none"  >
                <AlertTitle>Added a product</AlertTitle>
                You have successfully added a product.
            </Alert>
        </Card>
    )
}