function beforeSubmit(){
    let inputDate=document.querySelector(".inputdate");
    let outputDate=document.querySelector(".outputdate");
    let formatteddate=new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value=formatteddate;

}