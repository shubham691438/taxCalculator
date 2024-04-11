
//initialize tool tip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


const form=document.getElementById('taxCalculatorForm')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateForm();
})

function validateForm()
{
    const grossAnnualIncomeVal=document.getElementById('grossAnnualIncome').value.trim()
    const extraIncomeVal=document.getElementById('extraIncome').value.trim()
    const ageGroupVal=document.getElementById('ageGroup').value.trim()
    const deductionsVal=document.getElementById('deductions').value.trim()


}

const grossAnnualIncome=document.getElementById('grossAnnualIncome')
grossAnnualIncome.addEventListener('input',(e)=>{
    let val=e.target.value;
    // console.log(val) 
    if(val.length==0)   
    {
        setError(grossAnnualIncome,"Cannot be left Empty")
    }
    else if (isNaN(val) ) {
        console.log("not a number")
        setError(grossAnnualIncome,"Please Enter Number only")
    }
    else
    {
        console.log("it is number")
        setSuccess(grossAnnualIncome);
        
    }
})

const extraIncome=document.getElementById('extraIncome')
extraIncome.addEventListener('input',(e)=>{
    let val=e.target.value;
    // console.log(val) 
    if(val.length==0)   
    {
        setDefault(extraIncome)
    }
    else if (isNaN(val) ) {
        console.log("not a number")
        setError(extraIncome,"Please Enter Number only")
    }
    else
    {
        console.log("it is number")
        setSuccess(extraIncome);
        
    }
})

const ageGroup=document.getElementById('ageGroup')
ageGroup.addEventListener('input',(e)=>{
    val=e.target.value;

    console.log(val);
    if(val=="Select Age Group")
    {
        setError(ageGroup,"Age Group must be selected")
    }
    else
    {
        setSuccess(ageGroup)
    }
})

const deductions=document.getElementById('deductions')
deductions.addEventListener('input',(e)=>{
    let val=e.target.value;
    // console.log(val) 
    if(val.length==0)   
    {
        setDefault(deductions)
    }
    else if (isNaN(val) ) {
        console.log("not a number")
        setError(deductions,"Please Enter Number only")
    }
    else
    {
        console.log("it is number")
        setSuccess(deductions);
        
    }
})



function setError(input,msg){
    console.log(msg)
    input.className="form-control is-invalid"
    const formGroup=input.parentElement;
    console.log(formGroup);
    formGroup.className="form-group error"
}

function setSuccess(input)
{
    const formGroup=input.parentElement;
    input.className="form-control is-valid"
    console.log(formGroup);
    formGroup.className="form-group success"
}


function setDefault(input)
{
    const formGroup=input.parentElement;
    input.className="form-control"
    console.log(formGroup);
    formGroup.className="form-group"
}



