/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
    ['knockout', 'jquery', 'ojL10n!./resources/nls/epsilon-picto-chart-strings',  'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'text!/js/resources/pictoChartdata.json', 'ojs/ojpictochart'],
         function (ko, $, componentStrings, Bootstrap, ArrayDataProvider, chartData) {
    function ExampleComponentModel(context) {
        var self = this;
        var data = JSON.parse(chartData);
        self.dataProvider9= new ArrayDataProvider(data, {keyAttributes: 'name'});
        self.getColor = function(index){
          return index === 0? '#ed6647' : '';
      }
        //At the start of your viewModel constructor
        var busyContext = oj.Context.getContext(context.element).getBusyContext();
        var options = {"description": "CCA Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

        //Example observable
        self.messageText = ko.observable('Picto Chart Component');
        self.properties = context.properties;
        self.res = componentStrings['epsilon-picto-chart'];
        
        
        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnect = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ExampleComponentModel;
});