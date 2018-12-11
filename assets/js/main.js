var loadScene;
(function (window, document, $) {

  $(function () {

    // init controller
    var controller = new ScrollMagic.Controller({ refreshInterval: 0 });
    loadScene = {
      main: {
        reference: [],
        scene1: function () {

          var animationLength = $("section.section-1 div.inner").width() / 2 - $("section.section-1 div.letter-one").width() + 7;
          var tween = new TimelineMax()
            .to("section.section-1 div.text", 0.5, { opacity: 0 }, 0)
            .to("section.section-1 div.letter-one", 1, { left: animationLength }, 0)
            .to("section.section-1 div.letter-two", 1, { right: animationLength }, 0)
            .to("div.light", 1, { opacity: 1, top: "20px" })

          var scene = new ScrollMagic.Scene({ triggerElement: "section.section-1", triggerHook: 0, duration: "100%" })
            .setTween(tween)
            .setPin("section.section-1")
            .addIndicators({ name: "Section 1" })
            .addTo(controller);

          var text = [
            "Wir gestalten, konzipieren, programmieren und visualisieren Medien.",
            "Wir sind JOTT.MEDIA - eine Digital- & Print-Agentur aus Schaumburg.",
            "Was? Noch am lesen? Bitte scrollen."
          ];
          startTextAnimation(0, text, "section.section-1 div.text");

          loadScene.main.reference.push(scene);
        },
        scene2: function () {

          var animationLength = $("section.section-2 img").height() / 2 - $("section.section-1 div.letter-one").width() + 7;
          var tween = new TimelineMax()
            .to("div.light", 1, { left: "54%" }, 0)
            .to("section.section-2 img", 1, { width: "50%", xPercent: -50, yPercent: -50 }, 0)
            .to("div.light", 1, { top: "50%", ease: Bounce.easeOut }, 2)
            .to("div.light", 1, { left: "50%", ease: Expo.easeIn }, 2)
            .to("section.section-2 img", 0.5, { rotation: 180 }, 3)
            .to("div.light", 1, { left: "44%", ease: Bounce.easeOut }, 3)
            .to("div.light", 1, { top: "80%", ease: Power1.easeIn }, 3)

          var scene = new ScrollMagic.Scene({ triggerElement: "section.section-2", triggerHook: 0, duration: "200%" })
            .setTween(tween)
            .setPin("section.section-2")
            .addIndicators({ name: "Section 2" })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        scene3: function () {
          var tween = new TimelineMax()
            .to("div.light", 1, { top: "50%", xPercent: -50, ease: Bounce.easeOut }, 1)
            .to("div.light", 1, { left: "50%", yPercent: -50, ease: Expo.easeIn }, 1)
            .to("div.light", 1, { width: "50%", ease: Expo.easeIn }, 1)

          var scene = new ScrollMagic.Scene({ triggerElement: "section.section-3", triggerHook: 0, duration: "100%" })
            .setTween(tween)
            .setPin("section.section-3")
            .addIndicators({ name: "Section 3" })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        init: function () {
          loadScene.main.scene1();
          loadScene.main.scene2();
          loadScene.main.scene3();
        },
        destroy: function () {
          loadScene.main.reference.forEach(function (scene) {
            scene.destroy(true);
          });
          loadScene.main.reference = [];
        }
      }
    };

    loadScene.main.init();


    $(window).resize(function () {
      window.location.reload();
    });

    /**
     * Helper
     */

    function typeWriter(text, i, selector, fnCallback) {
      if (i < (text.length)) {
        $(selector).html(text.substring(0, i + 1) + '<span class="cursor"></span>');

        setTimeout(function () {
          typeWriter(text, i + 1, selector, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == "function") {
        setTimeout(fnCallback, 700);
      }
    }

    function startTextAnimation(i, dataText, selector) {
      if (typeof dataText[i] == "undefined") {
        setTimeout(function () {
          startTextAnimation(0, dataText, selector);
        }, 20000);
      } else {
        typeWriter(dataText[i], 0, selector, function () {
          startTextAnimation(i + 1, dataText, selector);
        });
      }
    }

    /**
     * Stars
     */

    var canvas;
    var context;
    var screenH;
    var screenW;
    var stars = [];
    var fps = 30;
    var numStars = 500;

    $('document').ready(function () {

      // Calculate the screen size
      screenH = $(window).height();
      screenW = $(window).width();

      // Get the canvas
      canvas = $('#space');

      // Fill out the canvas
      canvas.attr('height', screenH);
      canvas.attr('width', screenW);
      context = canvas[0].getContext('2d');

      // Create all the stars
      for (var i = 0; i < numStars; i++) {
        var x = Math.round(Math.random() * screenW);
        var y = Math.round(Math.random() * screenH);
        var length = 1 + Math.random() * 6;
        var opacity = Math.random();

        // Create a new star and draw
        var star = new Star(x, y, length, opacity);

        // Add the the stars array
        stars.push(star);
      }

      setInterval(animate, 1000 / fps);
    });

    /**
     * Animate the canvas
     */
    function animate() {
      context.clearRect(0, 0, screenW, screenH);
      $.each(stars, function () {
        this.draw(context);
      })
    }

    /**
     * Star
     * 
     * @param int x
     * @param int y
     * @param int length
     * @param opacity
     */
    function Star(x, y, length, opacity) {
      this.x = parseInt(x);
      this.y = parseInt(y);
      this.length = parseInt(length);
      this.opacity = opacity;
      this.factor = 1;
      this.increment = Math.random() * .03;
    }

    /**
     * Draw a star
     * 
     * This function draws a start.
     * You need to give the contaxt as a parameter 
     * 
     * @param context
     */
    Star.prototype.draw = function () {
      context.rotate((Math.PI * 1 / 10));

      // Save the context
      context.save();

      // move into the middle of the canvas, just to make room
      context.translate(this.x, this.y);

      // Change the opacity
      if (this.opacity > 1) {
        this.factor = -1;
      }
      else if (this.opacity <= 0) {
        this.factor = 1;

        this.x = Math.round(Math.random() * screenW);
        this.y = Math.round(Math.random() * screenH);
      }

      this.opacity += this.increment * this.factor;

      context.beginPath()
      for (var i = 5; i--;) {
        context.lineTo(0, this.length);
        context.translate(0, this.length);
        context.rotate((Math.PI * 2 / 10));
        context.lineTo(0, - this.length);
        context.translate(0, - this.length);
        context.rotate(-(Math.PI * 6 / 10));
      }
      context.lineTo(0, this.length);
      context.closePath();
      context.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")";
      context.shadowBlur = 5;
      context.shadowColor = '#ffffff';
      context.fill();

      context.restore();
    }




  });

})(window, document, jQuery);