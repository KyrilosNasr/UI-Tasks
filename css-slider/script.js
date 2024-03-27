const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['pervious', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel{
    constructor(container, items,controls){
        this.carouselContainer = container;
        this.carouselControls = controls
        this.carouselArray = [...items]
    }   
    updateGallery (){
        this.carouselArray.forEach(el =>{
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        })

        this.carouselArray.slice(0,5).forEach((el,i) =>{
            el.classList.add(`gallery-item-${i +1 }`)
        })
    }
    setCurrentState(direction){
        if(direction.className == 'gallery-controls-pervious'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.updateGallery()
    }

    setControls(){
        this.carouselControls.forEach(control => {
            const newButton = document.createElement('button');
            newButton.className = `gallery-controls-${control}`;
            galleryControlsContainer.appendChild(newButton);
            newButton.innerText = '';
          });
          
    }

    useControls(){
        const triggers = [ ...galleryControlsContainer.childNodes];
        triggers.forEach(control =>{
            control.addEventListener('click', e=>{
                e.preventDefault
                this.setCurrentState(control)
            })
        })
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls()
exampleCarousel.useControls()