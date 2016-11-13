(function(){
    var app = angular.module('charlotteIoTstore', []);
app.controller('StoreController', function(){
    this.products = things;
});
app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
        this.tab = setTab;
    };
    this.isSelected = function(checkTab){
        return this.tab === checkTab;
    }
});

app.controller('ReviewController', function(){
    this.review={};
    this.addReview=function(product){
        product.reviews.push(this.review);
        this.review={};
    };
});

var things=[
{
    name: 'Espressif ESP',
    Quantity: 1,
    sponsor: 'Hackster.io',
    recipients: 2,
    canPurchase: true,
    soldOut: false,
    image: 'sparkfun_board_sample.jpg',
    reviews: []
},
{
    name: 'Particle Photon',
    Quantity: 5,
    sponsor: 'Sparkfun',
    recipients: 0,
    canPurchase: true,
    soldOut: false,
    image :'photon_Sample_dev_kit.jpg',
    reviews:[]
}
]
})();
