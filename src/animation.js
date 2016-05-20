import {inject} from 'aurelia-framework';
import {CssAnimator} from 'aurelia-animator-css';
import 'fetch';

@inject(Element, CssAnimator)
export class Animation {
    constructor(element, animator){
        this.element = element;
        console.log(element);
        this.animator = animator;
        console.log(animator);
      
    }
    
    attached(){
          console.log(this.myDiv);
          
          this.animator.addClass(this.myDiv, 'animate-in').then(()=>{
             // this.animator.removeClass(this.myDiv, 'animate-in');
             console.log('done'); 
          });
    }
    

     activated() {
        console.log("activated");
    }
 
    created() {
        console.log("created");
    }
 
    activate() {
        console.log("activate");
    }
 
    canActivate() {
        console.log("canActivate");
    }    
}
