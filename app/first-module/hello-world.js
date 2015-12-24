import helloWorldTest from './hello-world.test';
export default firstModule => {
  if(ON_TEST){
    helloWorldTest(firstModule);
  };
  firstModule.directive('firstModuledir',() => {

    return {
      restrict: 'E',
      scope: {},
      template: require('./hello-world.html'),
      controllerAs: 'vm',
      controller: function(){
        var vm = this;
        vm.greating = "Hello first module";
      }
    };
  });
};
