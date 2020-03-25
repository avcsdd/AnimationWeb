 var ani = new MyAnimation();
 class AnimationPage28 {
     ///////////////////////////////////////////toleft delay///////////////////////////////////////
     scaleInOut(obj) {
         objects = anime({
             targets: obj,
             scale: [
                 { value: 1.1, duration: 1000, easing: 'easeOutCubic' },
                 { value: 1, duration: 1000, easing: 'easeInCubic' }
             ],
             loop: true
         })
         objects.play();
     }

     delayMove(obj, time, value) {
         return anime({
             targets: obj,
             delay: time,
             opacity: [{ value: 1, duration: time }],
             translateX: value,
         })
     }

     fadeAppear(obj, time) {
         return anime({
             targets: obj,
             opacity: [{ value: 1, duration: time }],
             easing: 'easeInOutQuad',
         });
     }

     fadeUpAppear(obj, time, value) {
         return anime({
             targets: obj,
             translateY: [{ value: value, duration: time }],
             opacity: [{ value: 1, duration: time }],
             easing: 'easeInOutQuad',
         });

     }

     appearWithDelay(obj, duration, delay) {
         return anime({
             targets: obj,
             opacity: [{ value: 1, duration: duration }],
             easing: 'easeInOutQuad',
             delay: delay
         });
     }


     hand01Page28 = this.delayMove("#hand01Page28", 500, 40);
     hand02Page28 = this.delayMove("#hand02Page28", 1300, 40);
     hand03Page28 = this.delayMove("#hand03Page28", 2200, 40);
     hand04Page28 = this.delayMove("#hand04Page28", 3000, 40);
     peopleGroupPage28 = this.fadeAppear("#peopleGroupPage28", 1000);
     smallObjPage28 = ani.appearDelay(".smallObjPage28", 2000, 1000);
     ipLessionPage28 = this.fadeUpAppear(["#ipLessionPage28", "#lessionsTitlePage28"], 1000, -30)
     lession01ContentPage28 = this.appearWithDelay("#lession01ContentPage28", 1000, 800);
     lession02ContentPage28 = this.appearWithDelay("#lession02ContentPage28", 1000, 1600);
     lession03ContentPage28 = this.appearWithDelay("#lession03ContentPage28", 1000, 2400);
     lession04ContentPage28 = this.appearWithDelay("#lession04ContentPage28", 1000, 3200);
     smallObjPage28UD = ani.moveEasingUD(".smallObjPage28", 3000, 20);
     back01 = ani.off(["#peopleGroupPage28", "#lession01ContentPage28", "#lession02ContentPage28", "#lession03ContentPage28", "#lession04ContentPage28"]);
     back02 = ani.returnY(["#ipLessionPage28", "#lessionsTitlePage28", ".smallObjPage28"], 30)
     back03 = ani.returnX(["#hand01Page28", "#hand02Page28", "#hand03Page28", "#hand04Page28"], -40)
     run() {
         this.peopleGroupPage28.restart();
         this.smallObjPage28.restart();
         this.smallObjPage28UD.restart();
         this.ipLessionPage28.restart();
         // scaleInOut(".smallObjPage28");
         this.hand01Page28.restart();
         this.lession01ContentPage28.restart()
         this.hand02Page28.restart();
         this.lession02ContentPage28.restart()
         this.hand03Page28.restart();
         this.lession03ContentPage28.restart()
         this.hand04Page28.restart();
         this.lession04ContentPage28.restart()
             //  this.handsHeaving.restart();
     }

     reverse() {
         //  this.hand01Page28.pause();
         //  this.hand02Page28.pause();
         //  this.hand03Page28.pause();
         //  this.hand04Page28.pause();
         //  this.peopleGroupPage28.pause();
         //  this.smallObjPage28.pause();
         //  this.ipLessionPage28.pause();
         //  this.lession01ContentPage28.pause();
         //  this.lession02ContentPage28.pause();
         //  this.lession03ContentPage28.pause();
         //  this.lession04ContentPage28.pause();
         //  this.back01.restart();
         //  this.back02.restart();
         //  this.back03.restart();
     }
 }
 var animationPage28 = new AnimationPage28();
 export default animationPage28

 //  $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
 //      var ele = $('#carouselExampleControls .carousel-indicators li.active');
 //      var pageIndex = ele.data('value');
 //      if (pageIndex == 27) {
 //          peopleGroupPage28.restart();
 //          smallObjPage28.restart();
 //          ipLessionPage28.restart();
 //          // scaleInOut(".smallObjPage28");
 //          hand01Page28.restart();
 //          lession01ContentPage28.restart()
 //          hand02Page28.restart();
 //          lession02ContentPage28.restart()
 //          hand03Page28.restart();
 //          lession03ContentPage28.restart()
 //          hand04Page28.restart();
 //          lession04ContentPage28.restart()
 //      } else {
 //          hand01Page28.pause();
 //          hand02Page28.pause();
 //          hand03Page28.pause();
 //          hand04Page28.pause();
 //          peopleGroupPage28.pause();
 //          smallObjPage28.pause();
 //          ipLessionPage28.pause();
 //          lession01ContentPage28.pause();
 //          lession02ContentPage28.pause();
 //          lession03ContentPage28.pause();
 //          lession04ContentPage28.pause();
 //          off(["#peopleGroupPage28", "#lession01ContentPage28", "#lession02ContentPage28", "#lession03ContentPage28", "#lession04ContentPage28"])
 //          returnY(["#ipLessionPage28", "#lessionsTitlePage28", ".smallObjPage28"], 30)
 //          returnX(["#hand01Page28", "#hand02Page28", "#hand03Page28", "#hand04Page28"], -40)
 //      }
 //  });