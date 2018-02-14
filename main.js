window.onload = function() {
    var slide = document.querySelector('.range');
        number = document.querySelector('.number');
        block = document.querySelector('.block');
        block2 = document.querySelector('.block2');

        window.slide = slide;
        window.block = block;
        window.number = number;
        window.block2 = block2;

number.addEventListener('input', function(event){            
        slide.valueAsNumber = number.valueAsNumber; 
        block.style.borderBottom = number.valueAsNumber + 'px solid black';
        

        });

        if(number.valueAsNumber < 19){
            block2.style.borderBottom = '2px solid red';
        }else if(number.valueAsNumber > 20 && number.valueAsNumber < 20){
            block2.style.borderBottom = '4px solid red';
        }
        if(number.valueAsNumber === 0){
            block.style.borderBottom = slider.valueAsNumber + 1 + 'px solid black';
        }
slide.addEventListener('mousemove', function(event){
        number.valueAsNumber = slide.valueAsNumber;  
        block.style.borderBottom = slide.valueAsNumber + 'px solid black';
        
        });
if(slide.valueAsNumber < 20){
            block2.style.borderBottom = '2px solid red';
        }else if(slide.valueAsNumber > 20 && slide.valueAsNumber < 20){
            block2.style.borderBottom = '4px solid red';
        }

if(slider.valueAsNumber === 0){
            block.style.borderBottom = slider.valueAsNumber + 1 + 'px solid black';
        } 

    


   
}