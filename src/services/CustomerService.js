var service ={};
var customerData=[
    {id:1,name:'Parvati',email:'parvati@in.ibm.com',contactNo:"9972",address:'BNG'},
    {id:2,name:'Jerry',email:'jerry@in.ibm.com',contactNo:"9886",address:'HYD'}
]
localStorage.setItem('app_data',JSON.stringify(customerData));



service.getCustomers = function(){
    let data=localStorage.getItem('app_data');
    return data;
}

service.addCustomers = function(data){
    customerData.push(data);
    localStorage.setItem('app_data',JSON.stringify(customerData));
}

service.updateCustomerData = function(data){
    customerData=customerData.map((item)=>{
        if(item.id==data.id){
            item=data;
        }
        return item;
    });
    localStorage.setItem('app_data',JSON.stringify(customerData));

}

service.deleteCustomerbyId = function(id){
    customerData = customerData.filter((item)=>{
        return item.id!==id
    })
    localStorage.setItem('app_data',JSON.stringify(customerData));
    return customerData;
}

export default service;