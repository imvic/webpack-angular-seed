"use strict";
export default firstModule => {
  firstModule.controller('firstCtrl', ($scope)=>{

    $scope.sayHello = () =>{
      alert('hi');
    };
    $scope.sayHello();
  });
};
