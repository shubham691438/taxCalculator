
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
     
        setError(grossAnnualIncome,"Please Enter Number only")
    }
    else
    {
        
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
     
        setError(extraIncome,"Please Enter Number only")
    }
    else
    {
       
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
        
        setError(deductions,"Please Enter Number only")
    }
    else
    {
        
        setSuccess(deductions);
        
    }
})



function setError(input,msg){
    const formGroup = input.parentElement;
    const exclamationIcon = formGroup.querySelector('.fa-exclamation-circle');
    exclamationIcon.setAttribute('data-original-title', msg); // Set the title attribute with the error message
    formGroup.className="form-group error"
}

function setSuccess(input)
{
    const formGroup=input.parentElement;
    // input.className="form-control is-valid"
   
    formGroup.className="form-group success"
    
}


function setDefault(input)
{
    const formGroup=input.parentElement;

    formGroup.className="form-group"
}



