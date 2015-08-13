'use strict';

angular.module('idlecars')
.directive('popup', function () {
  return {
    link: function(scope, elem, attr) {
      var isPopupOpen = false;
      var popupHtml = '<div class="modal-background" id="popup-modal"><div class="modal-container"><div class="popup-container"><div class="title">Confirm Cancel</div><div class="sub-title">Are you sure you want to cancel this booking?</div><button class="button" id="cancel-button">No, keep this booking</button><button class="button confirm" id="confirm-button">Yes, cancel this booking</button></div></div></div>'
      var holder = angular.element(document.querySelector('#main-content'));
      var cancelButton, confirmButton, cancelModal;

      elem.on('click', function(event){
        if (isPopupOpen) { return }
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
      });
    }
  }
})
