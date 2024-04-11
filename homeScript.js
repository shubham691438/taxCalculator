
//initialize tool tip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

 

const form=document.getElementById('taxCalculatorForm')
const grossAnnualIncome=document.getElementById('grossAnnualIncome')
const extraIncome=document.getElementById('extraIncome')
const ageGroup=document.getElementById('ageGroup')
const deductions=document.getElementById('deductions')



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const grossAnnualIncomeVal=Number(grossAnnualIncome.value.trim())
    const extraIncomeVal=Number(extraIncome.value.trim())
    const ageGroupVal=ageGroup.value.trim()
    const deductionsVal=Number(deductions.value.trim())

    
    if(grossAnnualIncomeVal===0 )
    {
        setError(grossAnnualIncome,"Cannot be left Empty")
        return
    }

    if(ageGroupVal=="Select Age Group")
    {
        setError(ageGroup,"Age group must be selected")
        return
    }
    

    if(deductionsVal.length==0)
    {
        deductions.value=0;
    }

    if(extraIncomeVal.length==0)
    {
        extraIncome.value=0;
    }

    


    
    const totalIncome = grossAnnualIncomeVal + extraIncomeVal - deductionsVal;
    console.log(totalIncome);
    
    let taxAmount,taxableIncome,inHand
    if (totalIncome <= 800000) {
        taxAmount=0;
        taxableIncome=0;
        inHand=totalIncome;
    } else {
        let taxRate=0;
        if (ageGroupVal === "LessThan40") {
            taxRate = 0.3; 
        } else if (ageGroupVal === "40to60") {
            taxRate = 0.4; 
        } else {
            taxRate = 0.1; 
        }

        
        taxableIncome = totalIncome - 800000; 

        
        taxAmount = taxRate * taxableIncome;
        inHand=totalIncome-taxAmount

        console.log("Tax amount:", taxAmount);
        console.log("Overall Income After Tax Deductions",inHand)

        
    }

    if(totalIncome<0)
    {

        const warningBox=document.querySelector('#warningMsg')
        warningBox.textContent="deductions cannot be more than sum of gross annual income and extra Income from other sources"
        warningBox.style.display="block"
        return;
    }
    document.querySelector('.modal-body h3 b').textContent=inHand;
    document.querySelector('.modal-body p b').textContent=taxAmount;
    
    const submitButton=document.getElementById('submitButton')
    submitButton.setAttribute('data-target', '#taxCalculatorModal')
    submitButton.click()

})




//add event listeners
grossAnnualIncome.addEventListener('input',(e)=>{ validateGrossAnnualIncome(e) })
extraIncome.addEventListener('input',(e)=>{ validateExtraIncome(e) })
ageGroup.addEventListener('input',(e)=>{ validateAgeGroup(e) })
deductions.addEventListener('input',(e)=>{ validateDeductions(e) })


function validateGrossAnnualIncome(e)
{
    let val=e.target.value;
    // console.log(val) 
    if(val.length==0)   
    {
        setError(grossAnnualIncome,"Cannot be left Empty")
        error=true;
    }
    else if(Number(val.trim())<0)
    {
        setError(grossAnnualIncome,"Income cannot be negative")
    }
    else if (isNaN(val) ) {
     
        setError(grossAnnualIncome,"Please Enter Number only")
    }
    else
    {
        
        setSuccess(grossAnnualIncome);
        
    }
}

function validateExtraIncome(e)
{
    let val=e.target.value;
    // console.log(val) 
    if(val.length==0)   
    {
        setDefault(extraIncome)
    }
    else if(Number(val.trim())<0)
    {
        setError(extraIncome,"Income cannot be negative")
    }
    else if (isNaN(val) ) {
     
        setError(extraIncome,"Please Enter Number only")
    }
    else
    {
       
        setSuccess(extraIncome);
        
    }
}

function validateAgeGroup(e)
{
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
}

function validateDeductions(e)
{
    let val=e.target.value;
    // console.log(val) 
    if(val.length==0)   
    {
        setDefault(deductions)
    }
    else if(Number(val.trim())<0)
    {
        setError(deductions,"Deductions cannot be negative")
    }
    else if (isNaN(val) ) {
        
        setError(deductions,"Please Enter Number only")
    }
    else
    {
        
        setSuccess(deductions);
        
    }
}
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



