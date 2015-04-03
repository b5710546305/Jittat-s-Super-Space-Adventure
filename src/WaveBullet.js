var WaveBullet = Bullet.extend({
    ctor: function() {
        this._super();
        this.step = 0;
        this.period = 30.0 + Math.random() * 20;
    },

    update: function( dt ) {
        var pos = this.getPosition();

        this.step += 1;
        this.setPosition( cc.p( pos.x + (Math.random()*5)+5, pos.y + 4 * Math.sin( Math.PI * this.step / this.period ) ) );
    }
});
