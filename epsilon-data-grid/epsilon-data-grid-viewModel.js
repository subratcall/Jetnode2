/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
    ['knockout', 'jquery', 'ojL10n!./resources/nls/epsilon-data-grid-strings','ojs/ojcore', 'ojs/ojbootstrap', 'ojs/ojmodel', 'ojs/ojknockouttemplateutils', 'ojs/ojcollectiondatagriddatasource',
  'ojs/ojvalidation-base', 'ojs/ojknockout', 'ojs/ojdatagrid','ojs/ojvalidation-datetime',
  'ojs/ojvalidation-number'], function (ko, $, componentStrings, oj, Bootstrap, Model, KnockoutTemplateUtils, collectionModule, ValidationBase) {
    
    function ExampleComponentModel(context) {
        var self = this;
        
        //At the start of your viewModel constructor
        var busyContext = oj.Context.getContext(context.element).getBusyContext();
        var options = {"description": "CCA Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);
        
          this.KnockoutTemplateUtils = KnockoutTemplateUtils;
          var dateOptions = {formatType: 'date', dateFormat: 'medium'};
          var dateConverterFactory = ValidationBase.Validation.converterFactory("datetime");
          this.dateConverter = dateConverterFactory.createConverter(dateOptions);
  
          var salaryOptions = 
          {   
              style: "currency", 
              currency: "USD", 
              currencyDisplay:"symbol"
          };
          var salaryConverterFactory = ValidationBase.Validation.converterFactory("number");
          this.salaryConverter = salaryConverterFactory.createConverter(
              salaryOptions);	
          
          var collection = new Model.Collection(null, {
              url: 'js/resources/employeeData.json'
          });
          
          this.dataSource8 = new collectionModule.CollectionDataGridDataSource(collection, 
              {rowHeader: 'EMPLOYEE_ID'}
          );
          
          this.getCellClassName8 = function(cellContext)
          {
              var key = cellContext['keys']['column'];
              if (key === 'SALARY')
              {
                  return 'oj-helper-justify-content-right';
              }
              else if (key === 'FIRST_NAME' || 
                  key === 'LAST_NAME' || 
                  key === 'EMAIL'|| 
                  key === 'HIRE_DATE')
              {
                  return 'oj-sm-justify-content-flex-start';
              }
          };

        self.composite = context.element;

        //Example observable
        self.messageText = ko.observable('Hello from Example Component');
        self.properties = context.properties;
        self.res = componentStrings['epsilon-data-grid'];
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