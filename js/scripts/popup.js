function popup() {
    const clickLink = document.getElementById('clickLink');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    
    clickLink.addEventListener('click', ()=>{
        popup.style.display = 'block';
    });
    closePopup.addEventListener('click', ()=>{
        popup.style.display = 'none';
    });
}

export {
    popup
}