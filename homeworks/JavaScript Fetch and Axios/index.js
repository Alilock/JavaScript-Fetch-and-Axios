//#region customers cruds

var baseUrlCustomer='https://northwind.vercel.app/api/customers/'

var instanceCustomer = axios.create({
    baseURL: baseUrlCustomer
})
let data =  {
    "id":'',
    "companyName": "salambaki",
    "contactName": "Christina Ronaldo",
    "contactTitle": "Order Administrator",
    "address": {
        "street": "Berguvsvägen  8",
        "city": "Luleå",
        "region": "NULL",
        "postalCode": "S-958 22",
        "country": "Sweden",
        "phone": "0921-12 34 65"
    }
};
const axiosFuncs = (method, id) => {
    switch (method) {
        case "POST":
            instance.post('',data).then(response => console.log(response))
            break;
        case "DELETE":
            instance.delete(`${id}`).then(response => console.log(response))
            break;
        case "PUT":
            instance.put(id, data).then(response => console.log(response))
            break;
        default:
            break;
    }
}

const fetchFuncs=(method,id)=>{
    switch (method) {
        case "POST":
            fetch(baseUrl,{method:method,headers:{'Content-Type': 'application/json'},body:JSON.stringify(data)}).then(response=>response.json()).then(response=>console.log(response))
            break;
        case "PUT":
            fetch(baseUrl+id,{method:method,headers:{'Content-Type': 'application/json'},body:JSON.stringify(data)}).then(response=>response.json()).then(response=>console.log(response))
        case "DELETE":
            fetch(baseUrl+id,{method:method}).then(response=>response.json()).then(response=>console.log(response))
        default:    
            break;
    }
}
//#endregion


//#region products funcs
let baseUrlProduct='https://northwind.vercel.app/api/products/'
let instanceProduct = axios.create({
    baseURL: baseUrlProduct
})

const getExpensiveProduct=()=>{
    instanceProduct.get().then(response=>{
      let prices=  response.data.map(element=>element.unitPrice)
      let maxPrice=Math.max(...prices)
      console.log(maxPrice);
    });
}

const getAvarageStockCount=()=>{

    instanceProduct.get().then(response=>{
        let totalStockCount=0;
        response.data.map(element=>totalStockCount+=element.unitsInStock)
        console.log(totalStockCount/response.data.length);
    })
}

const getStartWith=()=>{
    instanceProduct.get().then(response=>{
        let products=  response.data.filter(element=>element.name[0]==="C")
        console.log(products);
    })
}

//#endregion 

//#region customers funcs

const getStayLondon=()=>{
    instanceCustomer.get().then(response=>{
      let stayLondonCustomers=  response.data.filter(element=>element.address.city==='London')
        console.log(stayLondonCustomers);
    })
}

const getCountNullRegions=()=>{
    instanceCustomer.get().then(response=>{
     let nullRegionCustomers =   response.data.filter(element=>element.address.region==="NULL")
     console.log(nullRegionCustomers.length);
    })
}
//#endregion

//#region API 2 
let baseURLPost='https://jsonplaceholder.typicode.com/posts';
let instancePost=axios.create({
    baseURL:baseURLPost
})

const getUserPostCount=()=>{
    instancePost.get().then(response=>{
        let userPostCount= response.data.filter(element=>element.userId=='1').length
        console.log(userPostCount);
    })
}

let baseURLAlbum='https://jsonplaceholder.typicode.com/albums';
let instanceAlbum=axios.create({
    baseURL:baseURLPost
})

const getPhotosCount=()=>{
    instanceAlbum.get().then(response=>{
        let photosCount= response.data.filter(element=>element.userId=='1').length
        console.log(photosCount);
    })
}

//#endregion