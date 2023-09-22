function returnFirstTwoDrivers(driversArray) {
    return driversArray.slice(0, 2);
  }

  function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2);
  }

  let selectingDrivers = [
     returnFirstTwoDrivers, returnLastTwoDrivers  
  ]
   function createFareMultiplier(multiplier)  {
     return function(fare) {
    return fare * multiplier
   }
}
    
    function fareDoubler(fare) {
          return fare * 2;
        };
      
    function fareTripler(fare) {
        return fare * 3
    };
  
    function selectDifferentDrivers(arrayOfDrivers, Function) {
        return Function(arrayOfDrivers);
      }



  // Code your solution in this file!