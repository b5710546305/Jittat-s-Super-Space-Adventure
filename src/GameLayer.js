var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.ship = new Ship();
        this.ship.setPosition( new cc.Point( 700, 300 ) );
        this.addChild( this.ship );

        this.addKeyboardHandlers();
        
        return true;
    },

    onKeyDown: function( keyCode, event ) {
        if ( keyCode == cc.KEY.up ) {
            var y = this.ship.getPositionY();
            if ( y < screenHeight - 10 ) {
                y += 10;
                this.ship.setPositionY( y );
            }
        } else if ( keyCode == cc.KEY.down ) {
            var y = this.ship.getPositionY();
            if ( y > 10 ) {
                y -= 10;
                this.ship.setPositionY( y );
            }
        }
    },
    
    onKeyUp: function( keyCode, event ) {
    },
    
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    }
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});
