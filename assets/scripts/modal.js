
function toggleModal(modalNumber) {
  // Get modal
  let modal = document.getElementById("modal_container" + modalNumber);
  //  Toggle a class called active
  modal.classList.toggle('active');
}
