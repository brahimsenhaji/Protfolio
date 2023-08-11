
//-------------------------------------------------------------
let MoveNext = document.querySelector('.fa-solid');
//Handler to move to the next page about 
MoveNext.addEventListener('click',()=>{
    window.location.href = '#about';

    
    let Nav = document.querySelector('.Nav');
    Nav.classList.add('removeNav');
});

//Handler to go back to the home page
let GoBack = document.querySelector('#GoBack');
GoBack.addEventListener('click',()=>{
    window.location.href = '#home';

    
    let Nav = document.querySelector('.Nav');
    Nav.classList.remove('removeNav');
});

//Handler to go to the Skills page
let GoDown = document.querySelector('#GoDown');
GoDown.addEventListener('click',()=>{
    window.location.href = '#skills';
});

//Handler to go back to the  About page
let GoUp = document.querySelector('#GoUp');
GoUp.addEventListener('click',()=>{
    window.location.href = '#about';
});

//Handler to go to the Works page
let GoLeft = document.querySelector('#GoLeft');
GoLeft.addEventListener('click',()=>{
    window.location.href = '#works';
});

//Handler to go back to the Skills page
let GoRight = document.querySelector('#GoRight');
GoRight.addEventListener('click',()=>{
    window.location.href = '#skills';
});

//Handler to go to the Contact  page
let GoDown2 = document.querySelector('#GoDown2');
GoDown2.addEventListener('click',()=>{
    window.location.href = '#contact';
});

//Handler to go back to the  Work page
let GoUp2 = document.querySelector('#GoUp2');
GoUp2.addEventListener('click',()=>{
    window.location.href = '#works';
});

window.onload = ()=>{
   setTimeout(()=>{
    let loadingPage =document.querySelector('.loadingPage');
    loadingPage.classList.add('loadingPageD');

   },2000);

   setTimeout(()=>{
    let H = document.querySelector('.H');
    H.classList.add('MoveH');

    let E = document.querySelector('.E');
    E.classList.add('MoveE');

    let L = document.querySelector('.L');
    L.classList.add('MoveL');

    let O = document.querySelector('.O');
    O.classList.add('MoveO');

   },2100);
}
//--------------------------------------------------------------------------------------


const Aboutobserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            let TAbout = document.querySelector('.TAbout');
            TAbout.classList.add('TAboutMove');

            let AboutTex =document.querySelector('.AboutText');
            AboutTex.classList.add('AboutTextMove');

        }
    })
});
Aboutobserver.observe(GoBack);

const Skillsobserver = new IntersectionObserver((entries)=>{
                entries.forEach(entry =>{
                    if(entry.isIntersecting){
                        let Tskills = document.querySelector('.Tskills');
                        Tskills.classList.add('MoveTskills');

                        let tit = document.querySelector('.tit');
                        tit.classList.add('Movetit');

                        let SkillsContent = document.querySelector('.SkillsContent');
                        SkillsContent.classList.add('MoveSkillsContent');
                    }
                })
});
Skillsobserver.observe(GoUp);


const Worksobserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            let Tworks = document.querySelector('.Tworks');
            Tworks.classList.add('MoveTworks');

            let thumbnail_slider = document.querySelector('.thumbnail-slider');
            thumbnail_slider.classList.add('Movethumbnail-slider');
        }
    })
});
Worksobserver.observe(GoRight);

const Contactobserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
           let Tcontact = document.querySelector('.Tcontact');
           Tcontact.classList.add('MoveTcontact');

           let form = document.querySelector('#form');
           form.classList.add('Moveform');
        }
    })
});
Contactobserver.observe(GoUp2);

//----------------------------------------------------
//Slide nav bar
let ShowNav = ()=>{
    let Nav = document.querySelector('.Nav');
    Nav.classList.toggle('SlidNav');
}

//Hide Ul 
const Nav = document.querySelector('.Nav');
let hid =()=>{
    Nav.classList.remove('SlidNav');
}

//-----------------------------------------------------------------
//function to see mor info of my works 
let card = document.querySelectorAll('.card');
let MoreInfo = document.querySelector('.MoreInfo');

let MoreData =  [
    {img:'./Images/CarsWeb.png' , title:'WAGAN' , description:'WAGEN is an online platform to sell or buy cars in perfect shape' , link:'https://wagen.netlify.app/'},
    {img:'./Images/rorestaurantWeb.JPG' , title:'Rosa' , description:'Rosa is a restaurant, bar and coffee roastery' , link:'https://rorestaurant.netlify.app/'},
    {img:'./Images/UtopiaWeb.JPG' , title:'Utopia' , description:'Utopia is an online platform where you can sell or rent your property' , link:'https://github.com/brahimsenhaji/Utopia'}

]
let  pop = (props)=>{
    card.forEach((card,index)=>{
      if(props == index){
        //Active more info section
        MoreInfo.classList.add('ActivMoreInfo');
        // create element inside More info 
        MoreData.map((Data,i)=>{
            if(index == i){
                //Create h1 element with Title in text content 
                let Title = document.createElement('h1');
                Title.classList.add('TitleMore');
                Title.textContent = Data.title;
                MoreInfo.appendChild(Title);
                
                //Create img element 
                let Image = document.createElement('img');
                Image.classList.add('ImageMore');
                Image.setAttribute('src',Data.img);
                MoreInfo.appendChild(Image);

                //Create p element with description in the text content
                let description = document.createElement('p');
                description.classList.add('descriptionMore');
                description.textContent = Data.description;
                MoreInfo.appendChild(description);

                //Create a with link 
                let link = document.createElement('a');
                link.classList.add('linkMore');
                link.setAttribute('href',Data.link);
                link.setAttribute('target',"_blank");
                link.textContent = 'VISIT SITE'
                MoreInfo.appendChild(link);

            }
        })

      }
    })
}
//btn to hide the more info section and clear it
let Remove = document.querySelector('.Remove');

Remove.addEventListener('click',()=>{
    //Hide More info
    MoreInfo.classList.remove('ActivMoreInfo');

    //Clear More info
    let TitleMore = document.querySelectorAll('.TitleMore');
    let ImageMore = document.querySelectorAll('.ImageMore');
    let descriptionMore = document.querySelectorAll('.descriptionMore');
    let linkMore = document.querySelectorAll('.linkMore');
    //Remove Title Childe from More info 
    TitleMore.forEach(Title =>{
    MoreInfo.removeChild(Title);
    });

    //Remove Image Childe from More info 
    ImageMore.forEach(Image=>{
        MoreInfo.removeChild(Image);
    });

    //Remove description Childe from More info 
    descriptionMore.forEach(description=>{
        MoreInfo.removeChild(description);
    });

    //Remove Link Childe from More info 
    linkMore.forEach(link=>{
        MoreInfo.removeChild(link);
    });
})



//------------------------------------------------------------------------------------------------------------------------------
//Slider
const controls=document.querySelector(".controls");
const container=document.querySelector(".thumbnail-container");
const allBox=container.children;
const containerWidth=container.offsetWidth;
const margin=30;
 var items=0;
 var totalItems=0;
 var jumpSlideWidth=0;


// item setup per slide

responsive=[
{breakPoint:{width:0,item:1}}, //if width greater than 0 (1 item will show) 
{breakPoint:{width:800,item:2}}, //if width greater than 600 (2  item will show) 
{breakPoint:{width:1200,item:3}} //if width greater than 1000 (4 item will show) 
]

function load(){
   for(let i=0; i<responsive.length;i++){
       if(window.innerWidth>responsive[i].breakPoint.width){
           items=responsive[i].breakPoint.item
       }
   }
   start();
}

function start(){
    var totalItemsWidth=0;
   for(let i=0;i<allBox.length;i++){
        // width and margin setup of items
       allBox[i].style.width=(containerWidth/items)-margin + "px";
       allBox[i].style.margin=(margin/2)+ "px";
      totalItemsWidth+=containerWidth/items;
      totalItems++;
   }

   // thumbnail-container width set up
   container.style.width=totalItemsWidth + "px";

   // slides controls number set up
   const allSlides=Math.ceil(totalItems/items);
   const ul=document.createElement("ul");
      for(let i=1;i<=allSlides;i++){
        const li=document.createElement("li");
             li.id=i;
             li.setAttribute("onclick","controlSlides(this)");
             ul.appendChild(li);
             if(i==1){
                 li.className="active";
             }
      }
      controls.appendChild(ul);
}

  // when click on numbers slide to next slide
function controlSlides(ele){
     // select controls children  'ul' element 
     const ul=controls.children;

     // select ul children 'li' elements;
    const li=ul[0].children
      
     
     var active;

     for(let i=0;i<li.length;i++){
         if(li[i].className=="active"){
             // find who is now active
             active=i;
             // remove active class from all 'li' elements
             li[i].className="";
         }
     }
     // add active class to current slide
     ele.className="active";

     var numb=(ele.id-1)-active;
        jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
     container.style.marginLeft=-jumpSlideWidth + "px";
}

load();


//------------------------------------------------------------------------------------------

//function to send a message

const btn = document.getElementById('button');


document.getElementById('form')
.addEventListener('submit', function (event) {
event.preventDefault();

   btn.textContent = 'SENDING...';

   const serviceID = 'default_service';
   const templateID = 'template_fijonbb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'SEND MESSAGE';
      //if u want to alert a messag
       
      //Delet the input filde after sending the message
        let from_name = document.querySelector('#from_name');
        let email_id = document.querySelector('#email_id');
        let message = document.querySelector('#message');
            from_name.value = '';
            email_id.value = '';
            message.value = '';

    }, (err) => {
      btn.textContent = 'SEND MESSAGE';
      alert(JSON.stringify(err));
    });


});