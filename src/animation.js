
import {inject} from 'aurelia-framework';
import {CssAnimator} from 'aurelia-animator-css';
import {VelocityAnimator} from 'aurelia-animator-velocity';
import 'fetch';

@inject(Element, CssAnimator, VelocityAnimator)
export class Animation {
    constructor(element, animator, velocity){
        this.element = element;
        console.log(element);
        this.animator = animator;
        console.log(animator);
        this.velocity = velocity;
      
    }
    
    attached(){
          console.log(this.myDiv);    
          console.log("attached");
          var here = this;
          setTimeout(function(){here.intro()},10);

    }
    
    intro(){
        this.animator.addClass(this.myDiv, 'animate-in').then((f)=>{
            this.animator.addClass(this.leftTriangle, 'animate-in');
            return this.animator.addClass(this.rightTriangle, 'animate-in');

        }).then((f)=>{
            this.animator.addClass(this.leftCurtain, 'animate-out');
            //  this.animator.addClass(this.leftCurtain, 'animate-out').then((f)=>{
            //      this.animator.addClass(this.rightCurtain, 'animate-out');
            //  }      
            //  );
             
             
        });

        this.velocity.runSequence([
            { e: this.whiteSquare, p: { translateX: 100 }, o: { duration: 500 } },
            { e: this.whiteSquare, p: { translateX: 200 }, o: { duration: 500 } },
            { e: this.whiteSquare, p: { translateX: 300 }, o: { duration: 500 } }
        ]);
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