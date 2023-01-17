import axios from "axios";

export function Create(ProductName,ProductCode,ProductImage,UnitPrice,Quantity,TotalPrice){
    let URL="/api/v1/CreateProduct"
    let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        ProductImage:ProductImage,
        UnitPrice:UnitPrice,
        Quantity:Quantity,
        TotalPrice:TotalPrice
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    });
}

export function Read(){
    let URL="/api/v1/ReadProduct"
    return axios.post(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }else{
            return false;
        }

    }).catch((err)=>{
        console.log(err)
        return false;
    });
}

export function Update(id){
    let URL="/api/v1/UpdateProduct/"+id;
    let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        ProductImage:ProductImage,
        UnitPrice:UnitPrice,
        Quantity:Quantity,
        TotalPrice:TotalPrice
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    });
}

export function Delete(id){
    let URL="/api/v1/DeleteProduct/"+id;
    return axios.post(URL).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    });
}