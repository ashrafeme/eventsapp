'use strict';
eventsApp.filter('durations',function(){
    return function(input){
        switch (input) {
            case 1:
                return "Half Hour"
               
            case 2:
                return "1 Hour"
               
                case 3:
                return "Half Day"
              
                case 4:
                return "Full Day"
               
        }
    }
})