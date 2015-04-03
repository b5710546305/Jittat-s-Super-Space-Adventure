var FastBullet = Bullet.extend({
    ctor: function() {
        this._super();
    },

    update: function( dt ) {
        var x = this.getPositionX();
        x += (Math.random()*5)+5;
        this.setPositionX( x );
    }
});
