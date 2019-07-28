/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
/*
var request = new XMLHttpRequest();

const Http = new XMLHttpRequest ();
const url1='http://localhost:3000/user_profiles';
Http.open("GET", url1);
Http.setRequestHeader("Content-Type", "application/json");
Http.send();
var data2=Http.responseText;

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
};
*/
/*
$.ajax({
	type: "GET",
	url: "http://localhost:3000/user_profiles",
	dataType: "JSON",
	processData: "false"
 })
 .done(function(result) 
 {
		console.log(result.value);
 }) ;
*/
/*request.open('GET', 'http://localhost:3000/user_profiles', true);
request.onload = function() {
  // Begin accessing JSON data here
   data = JSON.parse(this.response);

    data.forEach(i => {
      console.log(i.id);
  
    });
    };*/
/*
const Http = new XMLHttpRequest ();
const url1='http://localhost:3000/user_profiles';
Http.open("GET", url1);
Http.setRequestHeader("Content-Type", "application/json");
Http.send();
Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
  var data2=Http.responseText;
  console.log(data2);
 };           */
define(['ojs/ojcore','knockout', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'text!/js/resources/singleItemData.json', 
        'knockout', 'ojs/ojknockout', 'ojs/ojchart', 'ojs/ojbutton', 'ojs/ojtable'],
  function(oj ,ko, Bootstrap, ArrayDataProvider, data1 ) {
    function IncidentsViewModel() {
      var self = this;
       self.data = ko.observableArray();
        $.getJSON("http://localhost:3000/user_profiles").
                then(function (movies) {
                    $.each(movies, function () {
                        self.data.push({
                            id: this.id,
                            series: this.series,
                            group: this.group,
                            value: this.value
                        });
                    });
                });
       
 /* data2=$.ajax({
  type: "GET",
  url: "http://localhost:3000/user_profiles",
  async: false,
  beforeSend: function(x) {
    if(x && x.overrideMimeType) {
      x.overrideMimeType("application/j-son;charset=UTF-8");
    }
  },
  dataType: "json",
  success: function(data){
    alert(data);
  }
});
const fs = require('fs') 
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/user_profiles', true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  obj = JSON.parse(this.response); //now its an object
      json = JSON.stringify(obj); //convert it back to json
      console.log(obj.id);
      fs.writeFile('myjsonfile.json', json, 'utf8', function(err) {
          console.log(err); // if there is an error
      });

};

request.send(); */

        console.log(data1);
      var chartData1 = ko.observableArray(JSON.parse(data1));
     // self.dataProvider = new ArrayDataProvider(chartData1, {keyAttributes: 'id'});
      self.dataProvider = new ArrayDataProvider(self.data, {keyAttributes: 'id'});
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */

      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };

    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);

