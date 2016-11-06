(function() {
  'use strict';

  angular
    .module('yoophiAngello')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
