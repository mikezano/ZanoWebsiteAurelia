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
          console.log("attached");
          var here = this;
          setTimeout(function(){
            here.animator.addClass(here.myDiv, 'animate-in').then((f)=>{
            console.log(f);
                 here.animator.addClass(here.leftTriangle, 'animate-in').then((f)=>{
                     console.log('curtain');
                 });
                 here.animator.addClass(here.rightTriangle, 'animate-in');
                    //this.animator.removeClass(this.myDiv, 'animate-in');
             console.log('done'); 
          });                
          },10);

    }
   
     activated() {
        console.log("activated");
    }
 
    created() {
        console.log("created");
        //console.log(this.myDiv);    
      
    }
 
    activate() {
        console.log("activate");
    }
 
    canActivate() {
        console.log("canActivate");
    }    
}
