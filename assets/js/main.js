var loadScene;
(function (window, document, $) {

  $(function () {

    // init controller
    var controller = new ScrollMagic.Controller({ refreshInterval: 0 });
    loadScene = {
      main: {
        reference: [],
        scene1: function () {

          var animationLength = $("section:nth-child(1) div.inner").width() / 2 - $("section:nth-child(1) div.letter-one").width() + 7;
          var tween = new TimelineMax()
            .to("section:nth-child(1) div.text", 0.5, { opacity: 0 }, 0)
            .to("section:nth-child(1) div.letter-one", 1, { left: animationLength }, 0)
            .to("section:nth-child(1) div.letter-two", 1, { right: animationLength }, 0)
            .to("section:nth-child(1) svg", 1, { scale: 5, opacity: 1, rotation: 90 }, .6)

          var scene = new ScrollMagic.Scene({ triggerElement: "section:nth-child(1)", triggerHook: 0, duration: "100%" })
            .setTween(tween)
            .setPin("section:nth-child(1)")
            .addIndicators({ name: "Section 1" })
            .addTo(controller);

          var text = [
            "Wir gestalten, konzipieren, programmieren und visualisieren Medien.",
            "Wir sind JOTT.MEDIA - eine Digital- & Print-Agentur aus Schaumburg.",
            "Was? Noch am lesen? Bitte scrollen."
          ];
          startTextAnimation(0, text, "section:nth-child(1) div.text");

          loadScene.main.reference.push(scene);
        },
        init: function () {
          loadScene.main.scene1();
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


  });

})(window, document, jQuery);