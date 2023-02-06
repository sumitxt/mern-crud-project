import React, {Fragment, useEffect, useRef} from 'react';
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, isEmpty, SuccessToast} from "../../Helper/ValidationHelper";
import {ReadByID, Update} from "../../APIServices/CRUDServices";
import {withRouter} from "react-router";

const UpdateForm = (props) => {
    let ProductName, ProductCode, ProductImage, UnitPrice, Quantity, Loader = useRef()

    const UpdateData = () => {
        let Product_Name = ProductName.value;
        let Product_Code = ProductCode.value;
        let Product_Image = ProductImage.value;
        let Unit_Price = UnitPrice.value;
        let Product_Quantity = Quantity.value;
        // let Total_Price = TotalPrice.value;
        let Total_Price=Unit_Price*Product_Quantity;

        //validation
        if (isEmpty(Product_Name)) {
            ErrorToast("Product Name required")
        } else if (isEmpty(Product_Code)) {
            ErrorToast("Product Code required")
        } else if (isEmpty(Product_Image)) {
            ErrorToast("Product Image is required")
        } else if (isEmpty(Unit_Price)) {
            ErrorToast("Product Unit Price is required")
        } else if (isEmpty(Product_Quantity)) {
            ErrorToast("Product Quantity is required")
        // } else if (isEmpty(Total_Price)) {
        //     ErrorToast("Product Price is required")
        } else {
            Loader.classList.remove("d-none")
            Update(props.id,Product_Name, Product_Code, Product_Image, Unit_Price, Product_Quantity, Total_Price)
                .then((Result) => {
                    if (Result === true) {
                        SuccessToast("Data Update Success")
                        props.history.push("/")
                    } else {
                        ErrorToast("Request failed! Try again")
                    }
                })
        }

    }

    useEffect(()=>{
        ReadByID(props.id).then((Result)=>{
            ProductName.value=Result[0]['ProductName']
            ProductCode.value=Result[0]['ProductCode']
            ProductImage.value=Result[0]['ProductImage']
            UnitPrice.value=Result[0]['UnitPrice']
            Quantity.value=Result[0]['Quantity']
            // TotalPrice.value=Result[0]['TotalPrice']
        })
    })

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <label>Product Name</label>
                        <input ref={(input) => ProductName = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-12">
                        <label>Product Code</label>
                        <input ref={(input) => ProductCode = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-12">
                        <label>Product Image</label>
                        <input ref={(input) => ProductImage = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-12">
                        <label>Product Unit Price</label>
                        <input ref={(input) => UnitPrice = input} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-12">
                        <label>Product Quantity</label>
                        <input ref={(input) => Quantity = input} type="text" className="form-control"/>
                    </div>
                    {/* <div className="col-md-12">
                        <label>Product Total Price</label>
                        <input ref={(input) => TotalPrice = input} type="text" className="form-control"/>
                    </div> */}
                </div>
                <div className="row p-5">
                    <button onClick={UpdateData} className="btn btn-primary w-100">Save</button>
                </div>
            </div>
            <div className="d-none" ref={(div) => Loader = div}>
                <FullScreenLoader/>
            </div>
        </Fragment>
    );
};

export default withRouter(UpdateForm);