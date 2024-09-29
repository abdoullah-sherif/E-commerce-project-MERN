import productModel from "../models/productModel";



export const getAllProduct = async () => {
    return await productModel.find();
}

export const seedInitialProducts = async () => {
    const products = [
        {
            title: "product 1",
            image: "image1.jpg",
            price: "50",
            stock: "3"
        }
        , {
            title: "product 2",
            image: "image2.jpg",
            price: "50",
            stock: "3"
        }
        , {
            title: "product 3",
            image: "image3.jpg",
            price: "50",
            stock: "3"
        }
        ,{
            title: "product 4",
            image: "image4.jpg",
            price: "50",
            stock: "3"
        },
        {
            title: "product 5",
            image: "image5.jpg",
            price: "50",
            stock: "3"
        }



    ]
    const initialData = await productModel.find();
    if (initialData.length===0)
    {
        await productModel.insertMany(products);
    }
}

