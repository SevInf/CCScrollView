require("jsb_constants.js");
require("jsb_constants_ccscrollview.js");

var MainLayer = cc.Layer.extend({
                                ctor: function() {
                                cc.associateWithNative(this, cc.Layer);
                                this.init();
                                var winSize = cc.Director.getInstance().getWinSize();
                                var container = cc.LayerGradient.create(cc.c4b(255, 255, 255, 255, 255),
                                                                        cc.c4b(0, 0, 0, 255));
                                container.setContentSize(cc.size(winSize.width, 1000));
                                var scrollView = cc.ScrollView.create(winSize, container);
                                scrollView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
                                this.addChild(scrollView);
                                }
                                });


function run()
{
    var scene = cc.Scene.create();
    var layer = new MainLayer();
    scene.addChild( layer );
    
    cc.Director.getInstance().runWithScene( scene );
}

run();
