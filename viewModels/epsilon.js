/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['knockout', 'ojs/ojbootstrap', 'ojs/ojmodel', 'ojs/ojknockouttemplateutils', 'ojs/ojcollectiondatagriddatasource',
  'ojs/ojvalidation-base', 'ojs/ojknockout', 'ojs/ojdatagrid','ojs/ojvalidation-datetime',
  'ojs/ojvalidation-number'],
  function(ko, Bootstrap, Model, KnockoutTemplateUtils, collectionModule, ValidationBase)
  {   		
     function epsilonviewModel()
      {
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
              url: 'js/resources/employee.json'
          });
          
          this.dataSource = new collectionModule.CollectionDataGridDataSource(collection, 
              {rowHeader: 'EMPLOYEE_ID'}
          );
          
          this.getCellClassName = function(cellContext)
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
      };
      
       
       return new epsilonviewModel();
      
  });
