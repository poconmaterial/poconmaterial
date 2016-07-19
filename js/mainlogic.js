angular.module('BlankApp', ['ngMaterial'])
.config(function ($mdIconProvider) {
    $mdIconProvider
    .defaultIconSet('img/icons/sets/core-icons.svg', 24);
})
.filter('keyboardShortcut', function ($window) {
    return function (str) {
        if (!str) return;
        var keys = str.split('-');
        var isOSX = /Mac OS X/.test($window.navigator.userAgent);
        var seperator = (!isOSX || keys.length > 2) ? '+' : '';
        var abbreviations = {
            M: isOSX ? '⌘' : 'Ctrl',
            A: isOSX ? 'Option' : 'Alt',
            S: 'Shift'
        };
        return keys.map(function (key, index) {
            var last = index == keys.length - 1;
            return last ? key : abbreviations[key];
        }).join(seperator);
    };
})
.controller('DemoBasicCtrl', function DemoCtrl($mdDialog, $mdMedia) {
    $scope.$mdMedia = $mdMedia;
    this.settings = {
        printLayout: true,
        showRuler: true,
        showSpellingSuggestions: true,
        presentationMode: 'edit'
    };
    this.sampleAction = function (name, ev) {
        $mdDialog.show($mdDialog.alert()
        .title(name)
        .textContent('You triggered the "' + name + '" action')
        .ok('Great')
        .targetEvent(ev)
        );
    };
})

.controller('BasicDemoCtrl', function DemoCtrl($mdDialog, $scope) {




    var originatorEv;


    this.openMenu = function ($mdOpenMenu, ev) {
        originatorEv = ev;


        $mdOpenMenu(ev);
    };


})

.controller('defaultCtrl', function ($scope, $mdMedia) {

    $scope.$mdMedia = $mdMedia;

})

.controller('viewerController', ['$mdBottomSheet', '$scope', function ($mdBottomSheet, $scope) {
    this.openControlPanel = function () {
        $mdBottomSheet.show({
            templateUrl: 'components/donate.html',
            scope: $scope.$new(true),
            disableParentScroll: false
        });
    };
}])

.controller('contactController', ['$mdBottomSheet', '$scope', function ($mdBottomSheet, $scope) {
    this.openControlPanel = function () {
        $mdBottomSheet.show({
            templateUrl: 'components/contact.html',
            scope: $scope.$new(true),
            disableParentScroll:false
        });
    };
}])

.controller('wishController', ['$mdBottomSheet', '$scope', function ($mdBottomSheet, $scope) {
    this.openControlPanel = function () {
        $mdBottomSheet.show({
            templateUrl: 'components/wishlist.html',
            scope: $scope.$new(true),
            disableParentScroll:false
        });
    };
}])

.controller('linkCTRL', function ($scope, $mdMedia, $location) {

    $scope.$mdMedia = $mdMedia;

    $scope.changeColor = false;


    $scope.getClass = function (path) {
        console.log($location.path());
        return (window.location.pathname === "/" + path) ? '#00b2a9' : '';
    }


    $scope.nt = function (xl) {

        $scope.changeColor = true;

        window.location = xl;

    }
})

.controller('MyController', function ($scope, $mdSidenav) {
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
})

.controller('namesCtrl', function ($scope, $interval, $mdMedia, $sce) {
    $scope.mindex = 1;
    $scope.quotes = [
    { "description": $sce.trustAsHtml("HELP IMPROVE THE HEALTH<br> AND WELL-BEING OF PATIENTS"), "imgfig": "../img/banner-get-involved.jpg", "post": "Suggest a Patient-Centered Research Question" },
    { "description": $sce.trustAsHtml("FEEL BETTER, LIVE LONGER<br> AND CONQUER CANCER TODAY!"), "imgfig": "../img/banner_1.jpg", "post": "99¢ of every dollar received directly funds cancer clinical trials" },
    { "description": $sce.trustAsHtml("FUNDING MEANINGFUL AND BREAKTHROUGH<br> CLINICAL TRIALS WORLDWIDE"), "imgfig": "../img/clinical_trials.jpg", "post": "99¢ of every dollar received directly funds cancer clinical trials" },
    { "description": $sce.trustAsHtml("IT COSTS AN AVERAGE OF<br> $20.75 TO FUND ONE PATIENT<br> FOR ONE DAY IN A GATEWAY-FUNDED<br> CANCER CLINICAL TRIAL"), "imgfig": "../img/fund_one_day_banner.jpg", "post": "FUND ONE DAY" }];
    $scope.len = $scope.quotes.length - 1;
    $scope.nextImage = function () {
        if ($scope.mindex < $scope.len) {
            $scope.mindex += 1;
        }
        else {
            $scope.mindex = 0;
        }
    }
    $scope.previousImage = function () {
        if ($scope.mindex > 0) {
            $scope.mindex -= 1;
        }
        else {
            $scope.mindex = $scope.len;
        }
    }
    $interval(function () {
        $scope.nextImage();
    }, 3000);
})

.controller('DateCtrl', function ($scope$mdMedia) {
    $scope.$mdMedia = $mdMedia;
    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function (date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
})

.controller('radioCtrl', function ($scope, $mdMedia) {
    $scope.$mdMedia = $mdMedia;
    $scope.data = {
        group1: '?',
        group2: '2',
        group3: 'avatar-1'
    };
    $scope.avatarData = [{
        id: "avatars:svg-1",
        title: 'avatar 1',
        value: 'avatar-1'
    }, {
        id: "avatars:svg-2",
        title: 'avatar 2',
        value: 'avatar-2'
    }, {
        id: "avatars:svg-3",
        title: 'avatar 3',
        value: 'avatar-3'
    }];
    $scope.radioData = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: '3', isDisabled: true },
      { label: '4', value: '4' }
    ];
    $scope.submit = function () {
        alert('submit');
    };
    $scope.addItem = function () {
        var r = Math.ceil(Math.random() * 1000);
        $scope.radioData.push({ label: r, value: r });
    };
    $scope.removeItem = function () {
        $scope.radioData.pop();
    };
})

.controller('DialogCtrl', function ($scope, $mdDialog, $mdMedia) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.showAlert = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .ok('Congratulations Suscriber!')
            .targetEvent(ev)
        );
    };

    $scope.showAdvanced = function (ev) {
        var useFullScreen = ($mdMedia('gt-xs')) && $scope.customFullscreen;

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'form.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

    };
    $scope.showContact = function (ev) {
        var useFullScreen = ($mdMedia('gt-xs')) && $scope.customFullscreen;

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'contactmob.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

    };
    $scope.showDonate = function (ev) {
        var useFullScreen = ($mdMedia('gt-xs')) && $scope.customFullscreen;

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'donatemob.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

    };

})

.controller('AppCtrl', function ($scope, $mdSidenav, $mdMedia) {
    $scope.$mdMedia = $mdMedia;

    $scope.showMobileMainHeader = true;
    $scope.sh = false;


    $scope.openSideNavPanel = function () {
        $mdSidenav('left').open();
    };



    $scope.isOpenLeft = function () {
        $scope.sh = $mdSidenav('left').isOpen();
        return $mdSidenav('left').isOpen();
    };


    $scope.closeSideNavPanel = function () {
        $mdSidenav('left').close();
    };
})

.controller('listCtrl', function ($scope, $mdMedia) {
    $scope.about = [
        { "name": 'Board of Directors' },
        { "name": 'Board of Scientific Counselors' },
        { "name": 'Associates Board' },
        { "name": 'Gateway Leadership' },
        { "name": 'Financials' },
        { "name": 'Media' },
        { "name": 'Mission Partners' }];
    $scope.way = [
        { "name": 'Why Give to Gateway' },
        { "name": 'Make a Gift' },
        { "name": 'Tribute Gift' },
        { "name": 'Fund One Day' }];
    $scope.research = [
        { "name": 'Gateway Model of Support' },
        { "name": 'Funded Clinical Trials' },
        { "name": 'Gateway Impact' },
        { "name": 'Apply for a Grant' },
        { "name": 'FAQs' },
        { "name": 'Get Involved' },
        { "name": 'Share Your Story' }];
    $scope.gateway = [
        { "name": 'DIY Fundraisers' },
        { "name": 'Create a DIY Fundraiser' },
        { "name": 'Search for DIY Fundraisers' },
        { "name": 'Team Demand Events' },
        { "name": 'Cause Partners' }];
    $scope.signature = [
        { "name": 'Signature Events' }];
    $scope.blog = [
        { "name": 'e-Newsletters' },
        { "name": 'Sign up for Newsletter' },
        { "name": 'Video Gallery' }];
    $scope.categories = [
        { "name": 'Cancer News' },
        { "name": 'Cancer Prevention' },
        { "name": 'Living Better with Cancer' },
        { "name": 'Gateway Updates' }];
    $scope.archive = [
        { "name": 'Archive' },
        { "name": 'September' },
        { "name": 'October' },
        { "name": 'November' },
        { "name": 'December' },
        { "name": 'January' },
        { "name": 'February' },
        { "name": 'March' },
        { "name": 'April' }];
});

function DemoCtrl($timeout, $q, $log, $mdMedia) {
    var self = this;
    self.simulateQuery = false;
    self.isDisabled = false;
    // list of `state` value/display objects
    self.states = loadAll();
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;
    self.newState = newState;
    function newState(state) {
        alert("Sorry! You'll need to create a Constituion for " + state + " first!");
    }

    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : self.states,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }
    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    function loadAll() {
        var allStates = { states: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"] }

        return allStates.states.map(function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };

        });
    }

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }
}

function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}





