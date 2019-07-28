/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojbootstrap', 'ojs/ojknockouttemplateutils', 'ojs/ojattributegrouphandler', 'ojs/ojarraydatagriddatasource',
              'ojs/ojknockout', 'ojs/ojdatagrid', 'ojs/ojlegend', 'ojs/ojchart'],
        function(oj, ko, Bootstrap, KnockoutTemplateUtils, attributeGroupHandler, arrayModule)
        {
          function DataGridModel() {
            this.KnockoutTemplateUtils = KnockoutTemplateUtils;
      
            /**
             * A data source subclassed from the ArrayDataGridDataSource that is
             * enhanced to return end headers.
             * @constructor
             * @extends ArrayDataGridDataSource
             * @param {Array} arrayData array used as data
             * @param {Object} options options to set on underlying data source
             * @returns {EndHeaderDataGridDataSource}
             */
            function EndHeaderDataGridDataSource(arrayData, options)
            {
              EndHeaderDataGridDataSource.superclass.constructor.call(this, arrayData, options);
            }
      
            // Subclass from oj.ArrayDataGridDataSource
            oj.Object.createSubclass(EndHeaderDataGridDataSource,
              arrayModule.ArrayDataGridDataSource, "oj.EndHeaderDataGridDataSource");
      
            /**
             * Fetch a range of headers from the data source. Need to pass two
             * HeaderSets back using the callbacks.success property to specify an
             * end header
             *
             * @param {Object} headerRange information about the header range, it
             *                 must contain the following properties: axis,
             *                 start, count.
             * @param {Object} callbacks the callbacks to be invoke when fetch
             *                 headers operation is completed. The valid
             *                 callback types are "success" and "error".
             * @param {Object=} callbackObjects the object in which the callback
             *        function is invoked on. This is optional. You can specify
             *        the callback object for each callbacks using the "success"
             *        and "error" keys.
             */
            EndHeaderDataGridDataSource.prototype.fetchHeaders = function(
              headerRange, callbacks, callbackObjects)
            {
              this._pendingHeaderCallback = {
                'callbacks': callbacks,
                'callbackObjects': callbackObjects
              };
      
              EndHeaderDataGridDataSource.superclass.fetchHeaders.call(this,
                headerRange, {
                  success: this._handleHeaderFetchSuccess.bind(this),
                  error: null
                }, callbackObjects);
            };
      
            EndHeaderDataGridDataSource.prototype._handleHeaderFetchSuccess =
              function(headerSet, headerRange)
              {
                var callback, callbackObject;
                callback = this._pendingHeaderCallback['callbacks']['success'];
                callbackObject = this._pendingHeaderCallback['callbackObjects']['success'];
                this._pendingHeaderCallback = null;
                callback.call(callbackObject, headerSet, headerRange, headerSet);
              };
      
            var groups = ["2011", "2012", "2013"];
            var cities = ["Boston", "New York", "Pittsburgh", "Chicago",
              "San Francisco", "Los Angeles"];
            var stores = ["Walmart", "Costco", "Target", "KMart",
              "Sears", "Sams"];
            var seriesNames = ["Blueberry", "Kiwi", "Lemon", "Strawberry"];
            var colorHandler = new attributeGroupHandler.ColorAttributeGroupHandler();
            var shapeHandler = new attributeGroupHandler.ShapeAttributeGroupHandler();
      
            var getValue= function()
            {
              return {
                x:Math.random()*this.maxValue,
                y:Math.random()*this.maxValue
              }
            }.bind(this);
      
            var getSeriesItems = function()
            {
              var items = [];
              for (var g = 0; g < groups.length; g++) {
                items.push(getValue());
              }
              return items;
            }.bind(this);
      
            var createScatterSeries = function(cities, stores, seriesNames, groups)
            {
              var series = [];
              for (var c = 0; c < cities.length; c++)
              {
                var dataObj = {};
                dataObj['city'] = cities[c];
                for (var s = 0; s < stores.length; s++)
                {
                  var seriesObj = [];
                  for (var n = 0; n < seriesNames.length; n++)
                  {
                    seriesObj.push({
                      name : seriesNames[n],
                      items : getSeriesItems(),
                      color: colorHandler.getValue(seriesNames[n]),
                      shape: shapeHandler.getValue(seriesNames[n])
                    })
                  }
                  dataObj[stores[s]] = {};
                  dataObj[stores[s]]['series'] = seriesObj;
                  dataObj[stores[s]]['groups'] = groups;
                }
                series.push(dataObj);
              }
              return series;
            }.bind(this);
      
            this.legendSections = [
              {items: [
                {markerColor:colorHandler.getValue(seriesNames[0]),
                  markerShape:shapeHandler.getValue(seriesNames[0]),
                  text: seriesNames[0]},
                {markerColor:colorHandler.getValue(seriesNames[1]),
                  markerShape:shapeHandler.getValue(seriesNames[1]),
                  text: seriesNames[1]},
                {markerColor:colorHandler.getValue(seriesNames[2]),
                  markerShape:shapeHandler.getValue(seriesNames[2]),
                  text: seriesNames[2]},
                {markerColor:colorHandler.getValue(seriesNames[3]),
                  markerShape:shapeHandler.getValue(seriesNames[3]),
                  text: seriesNames[3]}
              ]}];
      
            this.maxValue = 60;
            this.selectedItemsValue = ko.observableArray([]);
            this.highlightedCategoriesValue = ko.observableArray([]);
            this.hiddenCategoriesValue = ko.observableArray([]);
            this.scatterSeries = createScatterSeries(cities, stores,
              seriesNames, groups);
            this.dataSource = new EndHeaderDataGridDataSource(
              this.scatterSeries, {rowHeader:'city'});
          };
      
          return new DataGridModel();
        });
            