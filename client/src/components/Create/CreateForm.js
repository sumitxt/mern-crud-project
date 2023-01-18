import React, {useRef} from 'react';
import {ErrorToast, isEmpty, SuccessToast} from "../../Helper/ValidationHelper";
import {Create} from "../../APIServices/CRUDServices";

const CreateForm = () => {
    let ProductName, ProductCode, ProductImage, UnitPrice, Quantity, TotalPrice = useRef()

    const SaveData = () => {
        let Product_Name = ProductName.value;
        let Product_Code = ProductCode.value;
        let Product_Image = ProductImage.value;
        let Unit_Price = UnitPrice.value;
        let Product_Quantity = Quantity.value;
        let Total_Price = TotalPrice.value;

        if(!Product_Name){
            alert("Empty")
        }

        // //validation
        // if (isEmpty(Product_Name)) {
        //     ErrorToast("Product Name required")
        // } else if (isEmpty(Product_Code)) {
        //     ErrorToast("Product Code required")
        // } else if (isEmpty(Product_Image)) {
        //     ErrorToast("Product Image is required")
        // } else if (isEmpty(Unit_Price)) {
        //     ErrorToast("Product Unit Price is required")
        // } else if (isEmpty(Product_Quantity)) {
        //     ErrorToast("Product Quantity is required")
        // } else if (isEmpty(Total_Price)) {
        //     ErrorToast("Product Price is required")
        // }else{
            Create(Product_Name, Product_Code, Product_Image, Unit_Price, Product_Quantity, Total_Price)
                .then((Result)=>{
                if(Result===true){
                    // SuccessToast("Data Save Success")
                    alert("Data Saved Successfully")
                }
                else{
                    // ErrorToast("Request failed! Try again")
                    alert("Data failed to save")
                }
            })
        // }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-2">
                    <label>Product Name</label>
                    <input ref={(input) => ProductName = input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Product Code</label>
                    <input ref={(input) => ProductCode = input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Product Image</label>
                    <input ref={(input) => ProductImage = input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Product Unit Price</label>
                    <input ref={(input) => UnitPrice = input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Product Quantity</label>
                    <input ref={(input) => Quantity = input} type="text" className="form-control"/>
                </div>
                <div className="col-md-4 p-2">
                    <label>Product Total Price</label>
                    <input ref={(input) => TotalPrice = input} type="text" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <button onClick={SaveData} className="btn btn-primary w-100">Save</button>
            </div>
        </div>
    );
};

export default CreateForm;