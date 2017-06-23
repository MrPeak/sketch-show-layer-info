'use strict';

function onRun(context) {
  var sketch = context.api();
  var selection = context.selection;
  var doc = context.document;

  if (selection.length > 1) {
    doc.showMessage('[plugin:show-objectID] Please select only one layer!');
  }

  var layer = selection.firstObject();

  sketch.alert(
    '\n' + 
    '💎ID: ' + layer.objectID() + 
    '\n' + 
    '\n' +     
    '🔋Class: ' + layer.class() +
    '\n' + 
    '\n' + 
    '💡Name: ' + layer.name(),
    'Plugin: Show Layer Info',
  );
}
