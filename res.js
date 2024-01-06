const searchicon2 =document.querySelector('#searchicon2');
const searchicon= document.querySelector('#searchicon');
const search1 = document.querySelector('#searchinput2');


searchicon2.addEventListener('click',function(){
    search1.style.display ='flex';
    searchicon2.style.display ='none';

})

const searchicon1 =document.querySelector('#searchicon1');
const srchicon= document.querySelector('#srchicon');
const search2 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click',function(){
    search2.style.display ='flex';
    srchicon.style.display ='none';

})

const bar=docuent.querySelector('.fa-bars');
const cross= document.querySelector('#hdcross');
const headerb = document.querySelector('headerb');

bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display ="block";

    },200);
    headerb.style.right ="0%";
})
cross.addEventListener('click',function(){
    cross.style.display ='none';
    headerb.style.right ='-100%';
})