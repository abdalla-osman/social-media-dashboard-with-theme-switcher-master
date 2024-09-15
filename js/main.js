function darkmode(){
    const wasDarkmode=localStorage.getItem('darkmode')==='true';
    localStorage.setItem('darkmode',!wasDarkmode);
    const ele=document.body;
    ele.classList.toggle('lite-mode',!wasDarkmode);
    const toggle=document.getElementById('toggle');
    if(ele.className.includes('lite-mode')){
        toggle.checked=true
    }
    else{
        toggle.checked=false
    }
}

function onload(){
    document.body.classList.toggle('lite-mode',localStorage.getItem('darkmode')==="true");
}