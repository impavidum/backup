'use strict';

/**
 * @ngdoc function
 * @name crawlfishApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crawlfishApp
 */
angular.module('crawlfishApp')
    .controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $log, crawlHistory, $mdConstant) {

        // Use common key codes found in $mdConstant.KEY_CODE...
        this.keys = [$mdConstant.KEY_CODE.ENTER];
        this.tags = [];
        this.customKeys = [$mdConstant.KEY_CODE.ENTER];

        $scope.filterPinned = false;
        $scope.toggleLeft = buildToggler('left');
        $scope.isOpenLeft = function () {
            return $mdSidenav('left').isOpen();
        };

        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug('close left is done');
                });
        };

        $scope.closeCards = function () {
            console.log('closing cards');
            $scope.myVals.forEach(function (element) {
                element.inProgress = false;
            });
        };

        $scope.toggleCard = function (crawl) {
            crawl.clicked = !crawl.clicked;
            crawl.found = Object.keys(crawl.words_found).length;
            crawl.max = crawl.words.length;
        }

        function buildToggler(navID) {
            return function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug('toggle ' + navID + ' is done');
                    });
            };
        }


        $scope.crawlHistory = crawlHistory[0];
        console.log($scope.crawlHistory);

        $scope.myVals = [{
                'searchWord': 'Research Associate',
                'url': 'https://buzzfeed.com/enim/sit/amet/nunc/viverra.js?et=in\u0026commodo=quis\u0026vulputate=justo\u0026justo=maecenas\u0026in=rhoncus\u0026blandit=aliquam\u0026ultrices=lacus\u0026enim=morbi\u0026lorem=quis\u0026ipsum=tortor\u0026dolor=id\u0026sit=nulla\u0026amet=ultrices\u0026consectetuer=aliquet\u0026adipiscing=maecenas\u0026elit=leo\u0026proin=odio\u0026interdum=condimentum\u0026mauris=id\u0026non=luctus\u0026ligula=nec\u0026pellentesque=molestie\u0026ultrices=sed\u0026phasellus=justo\u0026id=pellentesque\u0026sapien=viverra\u0026in=pede\u0026sapien=ac\u0026iaculis=diam\u0026congue=cras\u0026vivamus=pellentesque\u0026metus=volutpat\u0026arcu=dui\u0026adipiscing=maecenas\u0026molestie=tristique\u0026hendrerit=est\u0026at=et\u0026vulputate=tempus\u0026vitae=semper\u0026nisl=est\u0026aenean=quam\u0026lectus=pharetra\u0026pellentesque=magna\u0026eget=ac\u0026nunc=consequat\u0026donec=metus\u0026quis=sapien\u0026orci=ut\u0026eget=nunc\u0026orci=vestibulum\u0026vehicula=ante\u0026condimentum=ipsum\u0026curabitur=primis\u0026in=in\u0026libero=faucibus\u0026ut=orci\u0026massa=luctus\u0026volutpat=et\u0026convallis=ultrices\u0026morbi=posuere\u0026odio=cubilia\u0026odio=curae\u0026elementum=mauris\u0026eu=viverra\u0026interdum=diam\u0026eu=vitae\u0026tincidunt=quam\u0026in=suspendisse\u0026leo=potenti\u0026maecenas=nullam\u0026pulvinar=porttitor\u0026lobortis=lacus',
                'searchDate': '6/17/2015',
                'inProgress': false
            },
            {
                'searchWord': 'Software Consultant',
                'url': 'https://uiuc.edu/pellentesque/ultrices/phasellus/id/sapien/in/sapien.jpg?cubilia=nulla\u0026curae=nunc\u0026duis=purus\u0026faucibus=phasellus\u0026accumsan=in\u0026odio=felis\u0026curabitur=donec\u0026convallis=semper\u0026duis=sapien\u0026consequat=a\u0026dui=libero\u0026nec=nam\u0026nisi=dui\u0026volutpat=proin\u0026eleifend=leo\u0026donec=odio\u0026ut=porttitor\u0026dolor=id\u0026morbi=consequat\u0026vel=in\u0026lectus=consequat\u0026in=ut\u0026quam=nulla\u0026fringilla=sed\u0026rhoncus=accumsan\u0026mauris=felis\u0026enim=ut\u0026leo=at\u0026rhoncus=dolor\u0026sed=quis\u0026vestibulum=odio\u0026sit=consequat\u0026amet=varius\u0026cursus=integer\u0026id=ac\u0026turpis=leo\u0026integer=pellentesque\u0026aliquet=ultrices\u0026massa=mattis\u0026id=odio\u0026lobortis=donec\u0026convallis=vitae\u0026tortor=nisi\u0026risus=nam\u0026dapibus=ultrices\u0026augue=libero\u0026vel=non\u0026accumsan=mattis\u0026tellus=pulvinar\u0026nisi=nulla\u0026eu=pede\u0026orci=ullamcorper\u0026mauris=augue\u0026lacinia=a\u0026sapien=suscipit\u0026quis=nulla\u0026libero=elit\u0026nullam=ac\u0026sit=nulla\u0026amet=sed\u0026turpis=vel\u0026elementum=enim',
                'searchDate': '1/28/2016',
                'inProgress': false
            },
            {
                'searchWord': 'Senior Cost Accountant',
                'url': 'https://fema.gov/condimentum/neque/sapien/placerat/ante/nulla.aspx?nulla=sodales\u0026mollis=scelerisque\u0026molestie=mauris\u0026lorem=sit\u0026quisque=amet\u0026ut=eros\u0026erat=suspendisse\u0026curabitur=accumsan\u0026gravida=tortor\u0026nisi=quis\u0026at=turpis\u0026nibh=sed\u0026in=ante\u0026hac=vivamus\u0026habitasse=tortor\u0026platea=duis\u0026dictumst=mattis\u0026aliquam=egestas\u0026augue=metus\u0026quam=aenean\u0026sollicitudin=fermentum\u0026vitae=donec\u0026consectetuer=ut\u0026eget=mauris\u0026rutrum=eget\u0026at=massa\u0026lorem=tempor\u0026integer=convallis\u0026tincidunt=nulla\u0026ante=neque\u0026vel=libero\u0026ipsum=convallis\u0026praesent=eget\u0026blandit=eleifend\u0026lacinia=luctus\u0026erat=ultricies\u0026vestibulum=eu\u0026sed=nibh\u0026magna=quisque\u0026at=id\u0026nunc=justo\u0026commodo=sit\u0026placerat=amet\u0026praesent=sapien\u0026blandit=dignissim\u0026nam=vestibulum\u0026nulla=vestibulum\u0026integer=ante\u0026pede=ipsum\u0026justo=primis\u0026lacinia=in\u0026eget=faucibus\u0026tincidunt=orci\u0026eget=luctus\u0026tempus=et',
                'searchDate': '9/29/2015',
                'inProgress': false
            },
            {
                'searchWord': 'Structural Analysis Engineer',
                'url': 'https://upenn.edu/praesent/lectus.html?faucibus=vel\u0026orci=lectus\u0026luctus=in\u0026et=quam\u0026ultrices=fringilla\u0026posuere=rhoncus',
                'searchDate': '9/29/2015',
                'inProgress': false
            },
            {
                'searchWord': 'Nurse Practicioner',
                'url': 'http://fastcompany.com/pede/morbi/porttitor.png?congue=viverra\u0026etiam=diam\u0026justo=vitae\u0026etiam=quam\u0026pretium=suspendisse\u0026iaculis=potenti\u0026justo=nullam\u0026in=porttitor\u0026hac=lacus\u0026habitasse=at\u0026platea=turpis\u0026dictumst=donec\u0026etiam=posuere\u0026faucibus=metus\u0026cursus=vitae\u0026urna=ipsum\u0026ut=aliquam\u0026tellus=non\u0026nulla=mauris\u0026ut=morbi\u0026erat=non\u0026id=lectus\u0026mauris=aliquam\u0026vulputate=sit\u0026elementum=amet\u0026nullam=diam\u0026varius=in\u0026nulla=magna\u0026facilisi=bibendum\u0026cras=imperdiet\u0026non=nullam\u0026velit=orci\u0026nec=pede\u0026nisi=venenatis\u0026vulputate=non\u0026nonummy=sodales\u0026maecenas=sed\u0026tincidunt=tincidunt\u0026lacus=eu\u0026at=felis\u0026velit=fusce\u0026vivamus=posuere\u0026vel=felis\u0026nulla=sed\u0026eget=lacus\u0026eros=morbi\u0026elementum=sem\u0026pellentesque=mauris\u0026quisque=laoreet\u0026porta=ut\u0026volutpat=rhoncus',
                'searchDate': '11/22/2015',
                'inProgress': false
            },
            {
                'searchWord': 'Senior Developer',
                'url': 'http://dmoz.org/donec/quis/orci/eget/orci/vehicula.js?id=leo\u0026ornare=pellentesque',
                'searchDate': '3/5/2016',
                'inProgress': false
            },
            {
                'searchWord': 'Nurse',
                'url': 'http://sciencedirect.com/sapien/sapien/non/mi/integer/ac.json?posuere=ultrices\u0026cubilia=enim\u0026curae=lorem\u0026duis=ipsum\u0026faucibus=dolor\u0026accumsan=sit\u0026odio=amet\u0026curabitur=consectetuer\u0026convallis=adipiscing\u0026duis=elit\u0026consequat=proin\u0026dui=interdum\u0026nec=mauris\u0026nisi=non\u0026volutpat=ligula\u0026eleifend=pellentesque\u0026donec=ultrices\u0026ut=phasellus\u0026dolor=id\u0026morbi=sapien\u0026vel=in\u0026lectus=sapien\u0026in=iaculis\u0026quam=congue\u0026fringilla=vivamus\u0026rhoncus=metus\u0026mauris=arcu\u0026enim=adipiscing\u0026leo=molestie\u0026rhoncus=hendrerit\u0026sed=at\u0026vestibulum=vulputate\u0026sit=vitae\u0026amet=nisl\u0026cursus=aenean\u0026id=lectus\u0026turpis=pellentesque\u0026integer=eget\u0026aliquet=nunc\u0026massa=donec\u0026id=quis\u0026lobortis=orci\u0026convallis=eget\u0026tortor=orci\u0026risus=vehicula\u0026dapibus=condimentum\u0026augue=curabitur\u0026vel=in\u0026accumsan=libero\u0026tellus=ut\u0026nisi=massa\u0026eu=volutpat\u0026orci=convallis\u0026mauris=morbi\u0026lacinia=odio\u0026sapien=odio\u0026quis=elementum\u0026libero=eu\u0026nullam=interdum\u0026sit=eu\u0026amet=tincidunt\u0026turpis=in\u0026elementum=leo\u0026ligula=maecenas\u0026vehicula=pulvinar\u0026consequat=lobortis\u0026morbi=est\u0026a=phasellus\u0026ipsum=sit\u0026integer=amet\u0026a=erat\u0026nibh=nulla\u0026in=tempus\u0026quis=vivamus',
                'searchDate': '6/2/2015',
                'inProgress': false
            },
            {
                'searchWord': 'Senior Quality Engineer',
                'url': 'https://answers.com/vel/est/donec/odio/justo/sollicitudin.xml?dapibus=placerat\u0026augue=ante\u0026vel=nulla\u0026accumsan=justo\u0026tellus=aliquam\u0026nisi=quis\u0026eu=turpis\u0026orci=eget\u0026mauris=elit\u0026lacinia=sodales\u0026sapien=scelerisque\u0026quis=mauris\u0026libero=sit\u0026nullam=amet\u0026sit=eros\u0026amet=suspendisse\u0026turpis=accumsan\u0026elementum=tortor\u0026ligula=quis\u0026vehicula=turpis\u0026consequat=sed\u0026morbi=ante\u0026a=vivamus\u0026ipsum=tortor\u0026integer=duis\u0026a=mattis\u0026nibh=egestas\u0026in=metus\u0026quis=aenean\u0026justo=fermentum\u0026maecenas=donec\u0026rhoncus=ut\u0026aliquam=mauris\u0026lacus=eget\u0026morbi=massa\u0026quis=tempor\u0026tortor=convallis\u0026id=nulla\u0026nulla=neque\u0026ultrices=libero\u0026aliquet=convallis\u0026maecenas=eget\u0026leo=eleifend\u0026odio=luctus\u0026condimentum=ultricies\u0026id=eu\u0026luctus=nibh\u0026nec=quisque\u0026molestie=id\u0026sed=justo\u0026justo=sit\u0026pellentesque=amet\u0026viverra=sapien\u0026pede=dignissim\u0026ac=vestibulum\u0026diam=vestibulum\u0026cras=ante\u0026pellentesque=ipsum\u0026volutpat=primis\u0026dui=in\u0026maecenas=faucibus\u0026tristique=orci\u0026est=luctus\u0026et=et\u0026tempus=ultrices\u0026semper=posuere\u0026est=cubilia\u0026quam=curae\u0026pharetra=nulla\u0026magna=dapibus\u0026ac=dolor',
                'searchDate': '3/7/2016',
                'inProgress': false
            },
            {
                'searchWord': 'Analyst Programmer',
                'url': 'https://imageshack.us/convallis/nulla/neque/libero/convallis/eget/eleifend.png?vestibulum=placerat\u0026ante=ante\u0026ipsum=nulla\u0026primis=justo\u0026in=aliquam',
                'searchDate': '4/15/2015',
                'inProgress': false
            },
            {
                'searchWord': 'Safety Technician II',
                'url': 'https://mit.edu/nulla/mollis/molestie/lorem/quisque/ut.js?elementum=nulla\u0026pellentesque=ac\u0026quisque=enim\u0026porta=in\u0026volutpat=tempor',
                'searchDate': '2/19/2016',
                'inProgress': false
            }];

    });



var words_found = [{
        name: diffuser,
        time_elapsed: 0.00010293984983983,
        url: 'http://naturallycurly.com/learn',
        word_count: 2
}, {
        name: diffuser,
        time_elapsed: 0.00010293984983983,
        url: 'http://naturallycurly.com/learn',
        word_count: 2
}, {
        name: diffuser,
        time_elapsed: 0.00010293984983983,
        url: 'http://naturallycurly.com/learn',
        word_count: 2
}
];


