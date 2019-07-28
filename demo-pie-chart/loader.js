/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./demo-pie-chart-view.html', './demo-pie-chart-viewModel', 'text!./component.json', 'css!./demo-pie-chart-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('demo-pie-chart', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);