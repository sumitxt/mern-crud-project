import React, {useEffect, useState} from 'react';
import {Delete, Read} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, SuccessToast} from "../../Helper/ValidationHelper";
import {withRouter} from "react-router";

const ListTable = (props) => {
    let [DataList, SetDataList] = useState([])
    useEffect(() => {
        Read().then((Result) => {
            SetDataList(Result)
        })
    }, [])

  const DeleteItem=(id)=>{
        Delete(id).then((result)=>{
            if(result===true){
                SuccessToast("Delete Success")
                props.history.push("/")
            }else{
                ErrorToast("Delete Failed")
            }
        })
  }
    const UpdateItem=(id)=>{
        props.history.push("/update/"+id)
    }

    if(DataList.length>0){
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Image</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        DataList.map((item,i)=>{
                            return(
                                <tr>
                                    <td>{item.ProductName}</td>
                                    <td>{item.ProductCode}</td>
                                    <td><img className="list-img" src={item.ProductImage} alt=""/></td>
                                    <td>{item.UnitPrice}</td>
                                    <td>{item.Quantity}</td>
                                    <td>{item.TotalPrice}</td>
                                    <td>
                                        <button onClick={DeleteItem.bind(this,item._id)} className="btn btn-danger mx-1" >Delete</button>
                                        <button onClick={UpdateItem.bind(this,item._id)} className="btn btn-primary mx-1">Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
    else {
        return (
            <div>
                <FullScreenLoader/>
            </div>
        )
    }


};

export default withRouter(ListTable);