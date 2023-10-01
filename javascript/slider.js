let widthWindow = document.documentElement.scrollWidth;
if(widthWindow <= 1180){
    let widthBlock = 0;
    let vsegoMuvieNew = document.getElementsByClassName('muvie-new').length-2;
    const sliderBlock = document.querySelector('.slider-block');
    const widthMuvieNew = document.querySelector('.muvie-new');
    const widthSliderNew = document.querySelector('.muvie-new');
    const predNew = document.querySelector('.strelka-pred-new');
    const eweNew = document.querySelector('.strelka-ewe-new');
    const pageWidth = document.documentElement.scrollWidth;
    if(pageWidth <= 970){
        vsegoMuvieNew = document.getElementsByClassName('muvie-new').length-1;     
    }

    eweNew.style.visibility = 'visible';

    document.querySelector('.strelka-ewe-new').addEventListener('click', function(){
        widthBlock = widthBlock + widthMuvieNew.offsetWidth + 30;
        sliderBlock.style.left = -widthBlock + 'px';
        
        if (widthBlock > widthSliderNew.offsetWidth * vsegoMuvieNew) {
            eweNew.style.visibility = 'hidden';
        }
        
        if(widthBlock !== 0){
            predNew.style.visibility = 'visible';
        }
    });

    document.querySelector('.strelka-pred-new').addEventListener('click', function () {
        widthBlock = widthBlock - widthMuvieNew.offsetWidth - 30;
        sliderBlock.style.left = -widthBlock + 'px';

        if(widthBlock === 0){
            predNew.style.visibility = 'hidden';
        }

        if (widthSliderNew.offsetWidth*(vsegoMuvieNew) > widthSliderNew.offsetWidth*(vsegoMuvieNew-1)) {
            eweNew.style.visibility = 'visible';
        }
    });

    let widthBlockReq = 0;
    let vsegoMuvieReq = document.getElementsByClassName('muvie-req').length-2;
    const sliderBlockReq = document.querySelector('.slider-block-req');
    const widthMuvieReq = document.querySelector('.muvie-req');
    const widthSliderReq = document.querySelector('.muvie-req');
    const predReq = document.querySelector('.strelka-pred-req');
    const eweReq = document.querySelector('.strelka-ewe-req');
    const pageWidthReq = document.documentElement.scrollWidth;
    
    if(pageWidth <= 970){
        vsegoMuvieReq = document.getElementsByClassName('muvie-req').length-1;     
    }

    eweReq.style.visibility = 'visible';

    document.querySelector('.strelka-ewe-req').addEventListener('click', function(){
        widthBlockReq = widthBlockReq + widthMuvieReq.offsetWidth + 30;
        sliderBlockReq.style.left = -widthBlockReq + 'px';

        if (widthBlockReq > widthSliderReq.offsetWidth * vsegoMuvieReq) {
            eweReq.style.visibility = 'hidden';
        }
        
        if(widthBlockReq !== 0){
            predReq.style.visibility = 'visible';
        }
    });

    document.querySelector('.strelka-pred-req').addEventListener('click', function () {
        widthBlockReq = widthBlockReq - widthMuvieReq.offsetWidth - 30;
        sliderBlockReq.style.left = -widthBlockReq + 'px';

        if(widthBlockReq === 0){
            predReq.style.visibility = 'hidden';
        }

        if (widthSliderReq.offsetWidth*(vsegoMuvieReq) > widthSliderReq.offsetWidth*(vsegoMuvieReq-1)) {
            eweReq.style.visibility = 'visible';
        }
    });
}

