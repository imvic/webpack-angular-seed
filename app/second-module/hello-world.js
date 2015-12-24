import helloWorldTest from './hello-world.test';
export default secondModule => {
  if(ON_TEST){
    helloWorldTest(secondModule);
  };
  secondModule.directive('secondModuledir',function(){
    require('./hello-world.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./hello-world.html'),
      controllerAs: 'vm',
      controller: function(){
        var vm = this;
        vm.greating = "Hello second module!";
      }
    };
  });
};
