const slide_1 = document.querySelector('.slide_1');
const slide_2 = document.querySelector('.slide_2');
const slide_3 = document.querySelector('.slide_3');



const slide_event_1 = document.querySelector('.slide_event_1');
const slide_event_2 = document.querySelector('.slide_event_2');
const slide_event_3 = document.querySelector('.slide_event_3');

const event_1= document.querySelector('#event_1');
const event_2= document.querySelector('#event_2');
const event_3= document.querySelector('#event_3');


clearActiveClasses();

function clearActiveClasses() {
           slide_1.classList.remove('active_1');
           slide_2.classList.remove('active_2');
           slide_1.classList.remove('deactive_1');
           slide_2.classList.remove('deactive_2');
         }

slide_event_1.addEventListener('click',()=>{
    if(screen.width>480)
    {
    clearActiveClasses();
    clearActiveClasses_mobile();
    slide_1.classList.add('deactive_1');
    slide_2.classList.add('deactive_2');
    }
})

slide_event_2.addEventListener('click',()=>{
    if(screen.width>480)
    {
    clearActiveClasses();
    clearActiveClasses_mobile();
    slide_1.classList.add('active_1');
    slide_2.classList.add('deactive_2');
    }
})

slide_event_3.addEventListener('click',()=>{
    if(screen.width>480)
    {
    clearActiveClasses();
    clearActiveClasses_mobile();
    slide_1.classList.add('active_1');
    slide_2.classList.add('active_2');
    }
})


/////////////////////////
///MOBILE INTERFACE/////
////////////////////////

    
clearActiveClasses_mobile();

function clearActiveClasses_mobile() {
    slide_1.classList.remove('vertical_1');
    slide_2.classList.remove('vertical_2');
    slide_1.classList.remove('devertical_1');
    slide_2.classList.remove('devertical_2')
  }

  event_2.addEventListener('click', ()=>{
    if(screen.width<=480) {
    clearActiveClasses();      
    clearActiveClasses_mobile();
    slide_2.classList.add('devertical_2');
    slide_1.classList.add('vertical_1');
    }
  })

  event_3.addEventListener('click',()=>{
    if(screen.width<=480)
    {
    clearActiveClasses();      
    clearActiveClasses_mobile();
    slide_2.classList.add('vertical_2');
    slide_1.classList.add('vertical_1');
    }
  })

  event_1.addEventListener('click',()=>{
    if(screen.width<=480)
    {
    clearActiveClasses();      
    clearActiveClasses_mobile();
    slide_1.classList.add('devertical_1');
    }
 })
