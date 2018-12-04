var loadScene;
(function (window, document, $) {

  $(function () {

    // init controller
    var controller = new ScrollMagic.Controller({ refreshInterval: 0 });
    loadScene = {
      main: {
        reference: [],
        scene1: function () {
          // var tween = new TimelineMax()
          //   .to("div#main section#one div.fade div:nth-child(1)", 1, { opacity: 1 }).to("div#main section#one div.fade div:nth-child(1)", 1, { opacity: 0 })
          //   .to("div#main section#one div.fade div:nth-child(2)", 1, { opacity: 1 }).to("div#main section#one div.fade div:nth-child(2)", 1, { opacity: 0 })
          //   .to("div#main section#one div.fade div:nth-child(3)", 1, { opacity: 1 });

          // var scene = new ScrollMagic.Scene({ triggerElement: "div#main section#one", triggerHook: 0, duration: "750px" })
          //   .setTween(tween)
          //   .setPin("div#main section#one")
          //   // .addIndicators({name: "Section main 1"})
          //   .addTo(controller);

          var text = [
            "Wir gestalten, konzipieren, programmieren und visualisieren Medien.",
            "Wir sind JOTT.MEDIA – Eine Digital- & Print-Agentur aus Schaumburg.",
            "Was? Noch am lesen? Bitte scrollen."
          ];
          startTextAnimation(0, text, "section:nth-child(1) div.text");

          // loadScene.main.reference.push(scene1);
        },
        init: function () {
          loadScene.main.scene1();
        },
        destroy: function () {
          // loadScene.main.reference.forEach(function (scene) {
          //   scene.destroy(true);
          // });
          // loadScene.main.reference = [];
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