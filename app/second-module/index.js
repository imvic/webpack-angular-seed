import angular from 'angular';
import helloWorld from './hello-world';
export default ngModule => {
  if(ON_TEST){
    require('angular-mocks/angular-mocks');
  }
  const secondModule = angular.module('secondModule',[]);
  helloWorld(secondModule);
};
