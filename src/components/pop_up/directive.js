'use strict';

angular.module('idlecars')
.directive('popup', function ($http) {
  return {
    link: function(scope, elem, attr) {
      var isPopupOpen = false;
      var popupHtml;
      var holder = angular.element(document.querySelector('#main-content'));
      var cancelButton, confirmButton, cancelModal;
      var template = 'components/pop_up/' + attr.popup + '.html';
      $http.get(template).success(function (templateString) { popupHtml = templateString })

      elem.on('click', function(event){
        if (isPopupOpen || !popupHtml) { return }
        isPopupOpen = true;
        event.preventDefault();
        event.stopImmediatePropagation();
        holder.append(popupHtml);

        cancelButton = angular.element(document.querySelector('#cancel-button'));
        confirmButton = angular.element(document.querySelector('#confirm-button'));
        cancelModal = angular.element(document.querySelector('#popup-modal'));

        cancelButton.on('click', function() {
          cancelModal.remove();
          isPopupOpen = false;
        })

        confirmButton.on('click', function() {
          elem[0].click();
          isPopupOpen = false;
          cancelModal.remove();
        })
      })
    }
  }
})
