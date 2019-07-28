/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./demo-card-view.html', './demo-card-viewModel', 'text!./component.json', 'css!./demo-card-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('demo-card', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);