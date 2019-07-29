/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./epsilon-picto-chart-view.html', './epsilon-picto-chart-viewModel', 'text!./component.json', 'css!./epsilon-picto-chart-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('epsilon-picto-chart', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);