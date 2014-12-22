Package.describe({
  name: 'polguixe:errors',
  summary: 'A pattern to display application errors to the user',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use(['minimongo','mongo-livedata','templating'],'client');
  api.addFiles(['polguixe:errors.js', 'polguixe:errors_list.html','polguixe:errors_list.js'], 'client');
  
  if(api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('tinytest','client');
  api.use('polguixe:errors','client');
  api.addFiles('polguixe:errors_tests.js','client');
});
