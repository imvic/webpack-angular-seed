import angular from 'angular';
import helloWorld from './hello-world';
import firstCtrl from './first-ctrl';
export default firstModule => {
  var firstModule = angular.module('firstModule',[]);
  helloWorld(firstModule);
  firstCtrl(firstModule);
};
