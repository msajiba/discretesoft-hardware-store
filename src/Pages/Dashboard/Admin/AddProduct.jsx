import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';

const AddProduct = () => {


    
    const { register, handleSubmit, reset  } = useForm();
    
    const imgSecretKey = '931be98200fb6688c12e4a85604170e0';

    const onSubmit = async(data) => {
        const image = data.image[0];
        const name = data.name;
        const minimum = data.minimum;
        const available = data.available;
        const price = data.price;
        const description = data.description;

        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgSecretKey}`
        const res = await axios.post(url, formData);
        
        if(res?.data?.success){
            const img = res?.data?.data?.url;

            const productInfo = {
                img, name, minimum, available, price, description
            };

            const url = 'https://discretesoft-hardware.herokuapp.com/product'
            const response = await axiosPrivate.post(url, productInfo);

            if(response?.data?.acknowledged){
                toast.success('Product add successfully');
            };
        };
        reset();

    };

    return (
        

       <>
       
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className="form-control w-64 mx-auto mt-20">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input {...register("image", { required: true})} type="file" placeholder="Enter Product Name" className="input shadow-2xl rounded-lg " />
                </div>      

                <div className="grid md:grid-cols-2 grid-cols-1 px-20 gap-5">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input {...register("name", { required: true})} type="text" placeholder="Enter Product Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Quantity</span>
                        </label>
                        <input {...register("minimum", { required: true})} type="number" placeholder="Enter Minimum Quantity" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input {...register("available", { required: true})} type="number" placeholder="Enter Available Quantity" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Quantity Price </span>
                        </label>
                        <input {...register("price", { required: true})} type="number" placeholder="Product Price " className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Description </span>
                        </label>
                        <textarea {...register("description", { required: true})} type="text" placeholder=" Description " className="input input-bordered" />
                    </div>

                </div>

                <div className="form-control mt-6 px-20">
                    <button type='submit' className="btn btn-secondary"> Add Product </button>
                </div>

            </form>

       </>
    );
};

export default AddProduct;