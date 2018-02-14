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

        // if(number.valueAsNumber < 19){
        //     block2.style.borderBottom = '2px solid red';
        // }else if(number.valueAsNumber > 20 && number.valueAsNumber < 20){
        //     block2.style.borderBottom = '4px solid red';
        // }
        // if(number.valueAsNumber === 0){
        //     block.style.borderBottom = slider.valueAsNumber + 1 + 'px solid black';
        // }
slide.addEventListener('mousemove', function(event){
        number.valueAsNumber = slide.valueAsNumber;  
        block.style.borderBottom = slide.valueAsNumber + 'px solid black';
        
        });
// if(slide.valueAsNumber < 20){
//             block2.style.borderBottom = '2px solid red';
//         }else if(slide.valueAsNumber > 20 && slide.valueAsNumber < 20){
//             block2.style.borderBottom = '4px solid red';
//         }

// if(slider.valueAsNumber === 0){
        //     block.style.borderBottom = slider.valueAsNumber + 1 + 'px solid black';
        // } 

    


    // block.addEventListener('mousedown', function(event){
    //     console.log('1', event.type, event);
    // });

    // block.addEventListener('mousemove', function(event){
    //     console.log(event.type, event);
    // });

    // block.addEventListener('mouseup', function(event){
    //     console.log('1', event.type, event);
    // });

    // block.addEventListener('click', function(event){
    //     console.log('1', event.type, event);
    // });

    // block2.addEventListener('mousedown', function (event){
    //     console.log('2', event.type, event);
    // });


    // block2.addEventListener('mouseup', function(event){
    //     console.log('2', event.type, event);
    // });

    // block2.addEventListener('click', onClickBl2);

    // setTimeout(function(){
    //     block2.removeEventListener('click', onClickBl2);
    // }, 3000);

    // setTimeout(function(){
    //     block2.addEventListener('click', onClickBl2);
    // }, 5000);


    // function onClickBl2(event){
    //     console.log('2', event.type, event);
    // }
    // window.dragDrop = {
    //     startX: null,
    //     startY: null,
    //     mouseStartX: null,
    //     mouseStartY: null
    // };

    // window.block = block;

    // block.addEventListener('mousedown', onMouseDown);
    // block.addEventListener('mouseup', onMouseUp);
    // document.addEventListener('mouseup', onMouseUp);

    // var btn = document.querySelector('.btn'),
    //     flag = true,
    //     interval;

    // btn.onclick = function() {
    //     if (flag){
    //         clearInterval(interval);
    //         flag = false;
    //     } else{
    //         setAnimation();
    //     }
    // }
    
//     setAnimation();

//     function setAnimation() {   
//         block.addEventListener('mousedown', function(){
//             flag = true;
//             btn.click();
//         });

//         block.addEventListener('mouseup', function(){
//             flag = false;
//             btn.click();
//         });

//         interval = setInterval(function(){
//             block.style.left = Math.floor(Math.random()*window.innerWidth) + 'px';
//             block.style.top = Math.floor(Math.random()*window.innerHeight) + 'px';
//         }, 1000);
//     }
// }


// function onMouseDown(event) {
//     dragDrop.startX = event.target.offsetLeft;
//     dragDrop.startY = event.target.offsetTop;
//     dragDrop.mouseStartX = event.clientX;
//     dragDrop.mouseStartY = event.clientY; 

//     document.addEventListener('mousemove', onMove);
// }

// function onMouseUp(event) {
//     document.removeEventListener('mousemove', onMove);
// }

// function onMove(event){
//     var  x = event.clientX,
//          y = event.clientY; 

//     block.style.left = dragDrop.startX + (x - dragDrop.mouseStartX) + 'px';
//     block.style.top = dragDrop.startY + (y - dragDrop.mouseStartY) + 'px';
// }

}