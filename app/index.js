import firstModule from './first-module';
import secondModule from './second-module';
import angular from 'angular';
if(ON_TEST){
  require('angular-mocks/angular-mocks');
}
const ngModule = angular.module('my-app',['firstModule','secondModule']);
firstModule(ngModule)
secondModule(ngModule)
