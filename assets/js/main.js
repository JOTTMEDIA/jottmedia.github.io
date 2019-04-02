var loadScene;
(function (window, document, $) {

  $(function () {

    /**
     * Check old Browser
     */

    outdatedBrowser({
      bgColor: "#fdec4f",
      color: "#1d1d1b",
      lowerThan: "transform",
      languagePath: ""
    })


    // init controller
    var controller = new ScrollMagic.Controller({
      refreshInterval: 0
    });
    loadScene = {
      main: {
        reference: [],
        scene1: function () {

          var animationLength = $("section.section-1 div.inner").width() / 2 - $("section.section-1 div.letter-one").width() + 7;
          var tween = new TimelineMax()
            .to("section.section-1 div.text", 0.5, {
              opacity: 0
            }, 0)
            .to("section.section-1 div.letter-one", 1, {
              left: animationLength
            }, 0)
            .to("section.section-1 div.letter-two", 1, {
              right: animationLength
            }, 0)
            .to("div.light-wrapper svg", 1, {
              opacity: 1
            }, 0.5)
            .to("div.light-wrapper svg", 1, {
              top: $("div.light-wrapper svg").height()
            }, 1)

          var scene = new ScrollMagic.Scene({
              triggerElement: "section.section-1",
              triggerHook: 0,
              duration: "100%"
            })
            .setTween(tween)
            .setPin("section.section-1")
            .addIndicators({
              name: "Section 1"
            })
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
            .to("div.light-wrapper svg #circle", 1, {
              opacity: 1
            }, 0)
            .to("div.light-wrapper svg text", 1, {
              opacity: 0
            }, 0)
            .to("div.light-wrapper svg", 1, {
              width: "2%",
              left: "55%",
              top: "20px"
            }, 0)
            .to("section.section-2 img", 1, {
              width: "50%",
              xPercent: -50,
              yPercent: -50
            }, 0)
            .to("div.light-wrapper svg", 1, {
              top: "50%",
              ease: Bounce.easeOut
            }, 1)
            .to("div.light-wrapper svg", 1, {
              left: "50%",
              ease: Expo.easeIn
            }, 1)
            .to("section.section-2 img", 0.5, {
              rotation: 180
            }, 2)
            .to("div.light-wrapper svg", 1, {
              left: "44%",
              ease: Bounce.easeOut
            }, 2)
            .to("div.light-wrapper svg", 1, {
              top: "95%",
              ease: Power1.easeIn
            }, 2)

          var scene = new ScrollMagic.Scene({
              triggerElement: "section.section-2",
              triggerHook: 0,
              duration: "200%"
            })
            .setTween(tween)
            .setPin("section.section-2")
            .addIndicators({
              name: "Section 2"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        ballreset1: function () {
          var tween = new TimelineMax()
            .to("div.light-wrapper svg", 1, {
              top: "20px",
              left: "20px"
            }, 0)

          var scene = new ScrollMagic.Scene({
              triggerElement: "div.ball-reset-1",
              triggerHook: 1,
              duration: "100%"
            })
            .setTween(tween)
            .addIndicators({
              name: "Ball Reset"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        scene3: function () {
          var tween = new TimelineMax()
            .to("div.light-wrapper svg", 1, {
              top: "50%",
              ease: Bounce.easeOut
            }, 0)
            .to("div.light-wrapper svg", 1, {
              left: $("section.section-3 div.text-2").position().left + $("section.section-3 div.text-2").width() + 10 + "px",
              ease: Power1.easeOut
            }, 0)
            .to("section.section-3 div.text-1", 0.2, {
              opacity: 0
            }, 0.35)
            .to("section.section-3 div.text-2", 0.2, {
              opacity: 1
            }, 0.35)

          var scene = new ScrollMagic.Scene({
              triggerElement: "section.section-3",
              triggerHook: 0,
              duration: "100%"
            })
            .setTween(tween)
            .setPin("section.section-3")
            .addIndicators({
              name: "Section 3"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        scene4: function () {
          var tween = new TimelineMax()
            .to("div.light-wrapper svg", 1, {
              top: "40%",
              left: "0%",
              ease: Bounce.easeOut
            }, 0)
            .to("div.light-wrapper svg", 1, {
              top: "60%",
              left: "100%",
              ease: Bounce.easeOut
            }, 1)
            .to("div.light-wrapper svg", 1, {
              top: "60%",
              left: "0%",
              ease: Bounce.easeOut
            }, 2)
            .to("div.light-wrapper svg", 1, {
              top: "40%",
              left: "100%",
              ease: Bounce.easeOut
            }, 3)
            .to("div.light-wrapper svg", 1, {
              top: "50%",
              left: "50%",
              ease: Power1.easeOut
            }, 4);

          var scene = new ScrollMagic.Scene({
              triggerElement: "section.section-4",
              triggerHook: 0,
              duration: "200%"
            })
            .setTween(tween)
            .setPin("section.section-4")
            .addIndicators({
              name: "Section 4"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        ballreset2: function () {
          var tween = new TimelineMax()
            .to("div.light-wrapper svg", 1, {
              top: "20px",
              left: "50%"
            }, 0)

          var scene = new ScrollMagic.Scene({
              triggerElement: "div.ball-reset-2",
              triggerHook: 1,
              duration: "100%"
            })
            .setTween(tween)
            .addIndicators({
              name: "Ball Reset"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        scene5: function () {
          var rule2 = CSSRulePlugin.getRule("section.section-5 div.text-2 span:before"),
            rule3 = CSSRulePlugin.getRule("section.section-5 div.text-3 span:before"),
            rule4 = CSSRulePlugin.getRule("section.section-5 div.text-4 span:before"),
            rule5 = CSSRulePlugin.getRule("section.section-5 div.text-5 span:before"),
            rule6 = CSSRulePlugin.getRule("section.section-5 div.text-6 span:before");

          var tween = new TimelineMax()
            .to("div.light-wrapper svg", 10, {
              top: "95%",
              ease: Bounce.easeOut
            }, 0)
            .to(rule2, 1, {
              cssRule: {
                backgroundColor: "#fdec4f",
                height: "100%",
                ease: Bounce.easeOut
              }
            }, 0)
            .to(rule3, 1, {
              cssRule: {
                backgroundColor: "#fdec4f",
                height: "100%",
                ease: Bounce.easeOut
              }
            }, 1)
            .to(rule4, 1, {
              cssRule: {
                backgroundColor: "#fdec4f",
                height: "100%",
                ease: Bounce.easeOut
              }
            }, 2)
            .to(rule5, 1, {
              cssRule: {
                backgroundColor: "#fdec4f",
                height: "100%",
                ease: Bounce.easeOut
              }
            }, 3)
            .to(rule6, 1, {
              cssRule: {
                backgroundColor: "#fdec4f",
                height: "100%",
                ease: Bounce.easeOut
              }
            }, 4);

          var scene = new ScrollMagic.Scene({
              triggerElement: "section.section-5",
              triggerHook: 0,
              duration: "100%"
            })
            .setTween(tween)
            .setPin("section.section-5")
            .addIndicators({
              name: "Section 5"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        scene6: function () {

          var tween = new TimelineMax()
            .to("div.light-wrapper svg", 1, {
              top: "50%",
              ease: Power1.easeOut
            }, 0)
            .to("section.section-6 div.bild img.image-1", 1, {
              opacity: 0,
              ease: Power1.easeOut
            }, 1)
            .to("section.section-6 div.text div.image-1", 1, {
              opacity: 0,
              ease: Power1.easeOut
            }, 1)
            .to("section.section-6 div.bild img.image-2", 1, {
              opacity: 1,
              ease: Power1.easeOut
            }, 1)
            .to("section.section-6 div.text div.image-2", 1, {
              opacity: 1,
              ease: Power1.easeOut
            }, 1)
            .to("section.section-6 div.bild img.image-2", 1, {
              opacity: 0,
              ease: Power1.easeOut
            }, 2)
            .to("section.section-6 div.text div.image-2", 1, {
              opacity: 0,
              ease: Power1.easeOut
            }, 2)
            .to("section.section-6 div.bild img.image-3", 1, {
              opacity: 1,
              ease: Power1.easeOut
            }, 2)
            .to("section.section-6 div.text div.image-3", 1, {
              opacity: 1,
              ease: Power1.easeOut
            }, 2);

          var scene = new ScrollMagic.Scene({
              triggerElement: "section.section-6",
              triggerHook: 0,
              duration: "150%"
            })
            .setTween(tween)
            .setPin("section.section-6")
            .addIndicators({
              name: "Section 6"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        scene7: function () {

          // var tween = new TimelineMax()

          var scene = new ScrollMagic.Scene({
              triggerElement: "section.section-7",
              triggerHook: 0,
              duration: "100%"
            })
            //.setTween(tween)
            .setPin("section.section-7")
            .addIndicators({
              name: "Section 7"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        scene8: function () {

          var tween = new TimelineMax()
            .to("div.light-wrapper svg", 1, {
              top: "50%",
              ease: Power1.easeOut
            }, 0)
            .to("div.light-wrapper svg", 2, {
              scale: 100,
              opacity: 0,
              ease: Power1.easeOut
            }, 1)
            .to("section.section-8 h2", 1, {
              opacity: 0,
              ease: Power1.easeOut
            }, 2)
            .to("section.section-8 div.jan div.overlay", 1, {
              left: "100%",
              ease: Power1.easeOut
            }, 3)
            .to("section.section-8 div.jonathan div.overlay", 1, {
              right: "100%",
              ease: Power1.easeOut
            }, 3)
            .to("section.section-8 b", 1, {
              opacity: 1,
              ease: Power1.easeOut
            }, 4)

          var scene = new ScrollMagic.Scene({
              triggerElement: "section.section-8",
              triggerHook: 0,
              duration: "200%"
            })
            .setTween(tween)
            .setPin("section.section-8")
            .addIndicators({
              name: "Section 8"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        scene9: function () {

          var tween = new TimelineMax()
            .to("div.light-wrapper svg", 1, {
              scale: 1,
              opacity: 1
            }, 0)
            .to("div.light-wrapper svg", 1, {
              rotation: 360,
              ease: Power1.easeOut
            }, 1)
            .to("div.light-wrapper svg", 1, {
              top: "auto",
              bottom: $("footer nav").height() - $("footer nav").height() / 2 + "px",
              ease: Bounce.easeOut
            }, 1)
            .to("div.light-wrapper svg", 1, {
              backgroundColor: "#fdec4f",
              ease: Power1.easeOut
            }, 1)

          var scene = new ScrollMagic.Scene({
              triggerElement: "footer",
              triggerHook: 0,
              duration: "100%"
            })
            .setTween(tween)
            .setPin("footer")
            .addIndicators({
              name: "Footer"
            })
            .addTo(controller);

          loadScene.main.reference.push(scene);
        },
        init: function () {
          loadScene.main.scene1(); // J&J
          loadScene.main.scene2(); // Logo rotation
          loadScene.main.ballreset1(); // Ball Reset
          loadScene.main.scene3(); // Text jumping
          loadScene.main.scene4(); // PING PONG
          loadScene.main.ballreset2(); // Ball Reset
          loadScene.main.scene5(); // Leistungen
          loadScene.main.scene6(); // Skills
          loadScene.main.scene7(); // Corporation
          loadScene.main.scene8(); // Wir
          loadScene.main.scene9(); // Ende
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

    /**
     * Window Resize
     */

    $(window).resize(function () {
      window.location.reload();
    });

    /**
     * Open Burger
     */

    $("button").on("click", function () {
      $("body").toggleClass("open");
    });

    /**
     * Open Legal
     */

    if ($("body").find("div" + window.location.hash).length && window.location.hash != "") {
      $("div.legal div" + window.location.hash).fadeIn();
      $("html, body").animate({
        scrollTop: $("div.legal").offset().top
      }, 2000);
    }

    $("footer nav a").on("click", function () {
      $("html, body").animate({
        scrollTop: $("div.legal").offset().top
      }, 2000);

      $("div.legal > div").fadeOut();
      $("div.legal " + $(this).attr("href")).fadeIn();
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
      } else if (typeof fnCallback == "function") {
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

    screenH = $(window).height();
    screenW = $(window).width();

    canvas = $("#space");
    canvas.attr("height", screenH);
    canvas.attr("width", screenW);
    context = canvas[0].getContext("2d");

    for (var i = 0; i < numStars; i++) {
      var x = Math.round(Math.random() * screenW);
      var y = Math.round(Math.random() * screenH);
      var length = 1 + Math.random() * 6;
      var opacity = Math.random();
      var star = new Star(x, y, length, opacity);
      stars.push(star);
    }

    setInterval(animate, 1000 / fps);

    function animate() {
      context.clearRect(0, 0, screenW, screenH);
      $.each(stars, function () {
        this.draw(context);
      })
    }

    function Star(x, y, length, opacity) {
      this.x = parseInt(x);
      this.y = parseInt(y);
      this.length = parseInt(length);
      this.opacity = opacity;
      this.factor = 1;
      this.increment = Math.random() * .03;
    }

    Star.prototype.draw = function () {
      context.rotate((Math.PI * 1 / 10));

      context.save();
      context.translate(this.x, this.y);

      if (this.opacity > 1) {
        this.factor = -1;
      } else if (this.opacity <= 0) {
        this.factor = 1;

        this.x = Math.round(Math.random() * screenW);
        this.y = Math.round(Math.random() * screenH);
      }

      this.opacity += this.increment * this.factor;

      context.beginPath()
      context.arc(this.x, this.y, this.length, 0, 2 * Math.PI);
      // for (var i = 5; i--;) {
      //   context.lineTo(0, this.length);
      //   context.translate(0, this.length);
      //   context.rotate((Math.PI * 2 / 10));
      //   context.lineTo(0, -this.length);
      //   context.translate(0, -this.length);
      //   context.rotate(-(Math.PI * 6 / 10));
      // }
      // context.lineTo(0, this.length);
      context.closePath();
      context.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")";
      context.shadowBlur = 5;
      context.shadowColor = "#ffffff";
      context.fill();

      context.restore();
    }

  });

})(window, document, jQuery);