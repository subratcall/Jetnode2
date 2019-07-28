/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
/*
require('express');
var express = require('express');
var cors = require('cors');
var app = express();
var whitelist = ['http://localhost:3000', 'http://localhost:3000/user_profiles/'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));
*/
/*
var request = new XMLHttpRequest();

const Http = new XMLHttpRequest ();
const url='http://localhost:3000/user_profiles';
Http.open("GET", url);
Http.setRequestHeader("Content-Type", "application/json");
Http.send();
var data;

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
};

request.open('GET', 'http://localhost:3000/user_profiles', true);
request.onload = function() {
  // Begin accessing JSON data here
   data = JSON.parse(this.response);

    data.forEach(i => {
      console.log(i.name);
  
    });
    };

*/


define(['knockout', 'ojs/ojbootstrap', 'text!/js/resources/basicData.json', 
            'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'],
  function(ko, Bootstrap, data, ArrayDataProvider)
  {   
    function CustomerViewModel() {
      var self = this;
 
        self.stackValue = ko.observable('off');
          self.orientationValue = ko.observable('vertical');
        self.dataProvider = new ArrayDataProvider(JSON.parse(data), {keyAttributes: 'id'});
        //  self.dataProvider = new ArrayDataProvider(data, {keyAttributes: 'id'});
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
    return new CustomerViewModel();
  }
);
