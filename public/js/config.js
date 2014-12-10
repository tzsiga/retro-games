require.config({

  baseUrl:        '../modules/',

  paths: {
    jquery:       '../js/jquery.min',
    jquery_timer: '../js/jquery.timer'
  },

  shim: {
    jquery_timer: 'jquery'
  }
});
