const header = document.querySelector(".main")

const hearderSearch = document.querySelector('.header-search-search')
const headerDay = document.querySelector('.header-search-day')
const headerQuantity = document.querySelector(".header-search-quantity")

const headDaySelection = document.querySelector('.js-header-click-day')
const headQuantitySelection = document.querySelector('.header-click-quantity')

//click vào ô input
hearderSearch.onclick = function(){
    hearderSearch.classList.add('hearder-input-focus-active')
    if(headerDay.classList.contains('hearder-input-focus-active')){
        headerDay.classList.remove('hearder-input-focus-active')
        headDaySelection.style.display = 'none'
    }
    else if(headerQuantity.classList.contains('hearder-input-focus-active')){
        headerQuantity.classList.remove('hearder-input-focus-active')
        headQuantitySelection.style.display = 'none'
    }
}
hearderSearch.addEventListener('click', function(e){
    e.stopPropagation();
})

//click vào ô day
headerDay.onclick = function(){
    headerDay.classList.add('hearder-input-focus-active')
    headDaySelection.style.display = 'block'
    if(hearderSearch.classList.contains('hearder-input-focus-active')){
        hearderSearch.classList.remove('hearder-input-focus-active')
    }
    else if(headerQuantity.classList.contains('hearder-input-focus-active')){
        headerQuantity.classList.remove('hearder-input-focus-active')
        headQuantitySelection.style.display = 'none'
    }
}
headerDay.addEventListener('click', function(e){
    e.stopPropagation();
})

//click vào ô số khách
headerQuantity.onclick = function(){
    headerQuantity.classList.add('hearder-input-focus-active')
    headQuantitySelection.style.display = 'block'
    if(hearderSearch.classList.contains('hearder-input-focus-active')){
        hearderSearch.classList.remove('hearder-input-focus-active')
    }
    else if(headerDay.classList.contains('hearder-input-focus-active')){
        headerDay.classList.remove('hearder-input-focus-active')
        headDaySelection.style.display = 'none'
    }
}
headerQuantity.addEventListener('click', function(e){
    e.stopPropagation();
})


header.onclick = function(){
    if(hearderSearch.classList.contains('hearder-input-focus-active')){
        hearderSearch.classList.remove('hearder-input-focus-active')
    }
    else if(headerDay.classList.contains('hearder-input-focus-active')){
        headerDay.classList.remove('hearder-input-focus-active')
        headDaySelection.style.display = 'none'
    }
    else if(headerQuantity.classList.contains('hearder-input-focus-active')){
        headerQuantity.classList.remove('hearder-input-focus-active')
        headQuantitySelection.style.display = 'none'
    }
}

