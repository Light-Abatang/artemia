  "use client"
import { db } from "@/config/firebase.config";
import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import * as yup from "yup";


const schema = yup.object().shape({
    title: yup.string().required("Title is required").min(2),
    description: yup.string().required("description is required").min(10)
})

export default function CreateTask ({userId}) {

    const {data : session} = useSession();
    console.log(session);
    const userIdentifier = userId || (session?.user?.id);

    const {handleSubmit,handleChange,touched,values,errors} = useFormik({
        initialValues: {
            title: "",
            description: ""
        },
        onSubmit: async ()=>{
            await addDoc(collection(db,"tasks"),{
                user: userIdentifier,
                title : values.title,
                description : values.description,
                timeCreated: new Date().getTime(),
            }).then(() => {
                alert("you have added a product");
            }).catch(e=> {
                console.warn(e);
                alert("you encountered a syntax error")
            })
        },
        validationSchema: schema
    })
    return (
        <Card sx={{maxWidth:500, margin:"auto", mt: 5, p:3}}>
            <CardHeader title="Add Task"/>
            <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <TextField
                    label="Title"
                    type="text"
                    id="title"
                    placeholder="Enter Task Title"
                    value={values.title}
                    onChange={handleChange}
                    />
                    {touched.title && errors.title ? <span className="text-red-600 text-md">{errors.title}</span>:null}
                    <TextField
                    multiline
                    rows={4}
                    label="Description"
                    type="text"
                    id="description"
                    placeholder="Enter Description"
                    value={values.description}
                    onChange={handleChange}
                    />
                    <Button fullWidth variant="contained" type="submit" color="primary">Submit Task</Button>
                </form>
            </CardContent>
        </Card>
    )
}