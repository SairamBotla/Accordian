const faqs = document.querySelectorAll('.faq')

faqs.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})


let changeIcon = function(icon) {
    icon.classList.toggle('bi-dash-lg')
}  
// changeIcon = (icon) => icon.classList.toggle('bi-dash-lg')