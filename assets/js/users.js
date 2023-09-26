
document.addEventListener('DOMContentLoaded',function(){
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems,{});


    const adduserbutton = document.getElementById('add_user_button');
    adduserbutton.addEventListener('click', ()=>{
        document.querySelector('.add_user_modal_back').classList.remove('dis-none');
        document.querySelector('.add_user_modal').classList.add('show');
    });

    const btnCancle = document.getElementById('btn_cancle');
    btnCancle.addEventListener('click',function(){
        clearAddPanel();
    });

    document.querySelector('.add_user_modal_back').addEventListener('click', ()=>{
        clearAddPanel();
    });

});


function clearAddPanel(){
    document.querySelector('.add_user_modal_back').classList.add('dis-none');
    document.querySelector('.add_user_modal').classList.remove('show');
}
