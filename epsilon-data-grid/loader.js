/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./epsilon-data-grid-view.html', './epsilon-data-grid-viewModel', 'text!./component.json', 'css!./epsilon-data-grid-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('epsilon-data-grid', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);