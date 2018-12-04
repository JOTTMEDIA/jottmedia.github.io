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
          //   .to("div#about section#one div.fade div:nth-child(1)", 1, { opacity: 1 }).to("div#about section#one div.fade div:nth-child(1)", 1, { opacity: 0 })
          //   .to("div#about section#one div.fade div:nth-child(2)", 1, { opacity: 1 }).to("div#about section#one div.fade div:nth-child(2)", 1, { opacity: 0 })
          //   .to("div#about section#one div.fade div:nth-child(3)", 1, { opacity: 1 });
          // var scene = new ScrollMagic.Scene({ triggerElement: "div#about section#one", triggerHook: 0, duration: "750px" })
          //   .setTween(tween)
          //   .setPin("div#about section#one")
          //   // .addIndicators({name: "Section ABOUT 1"})
          //   .addTo(controller);

          loadScene.about.reference.push(scene);
        },
        init: function () {
          // console.log("INIT ABOUT");
          loadScene.about.scene1();
        },
        destroy: function () {
          // console.log(loadScene.about.reference);
          loadScene.about.reference.forEach(function (scene) {
            scene.destroy(true);
          });
          loadScene.about.reference = [];
        }
      }
    };

    loadScene.main.init();

  });

})(window, document, jQuery);