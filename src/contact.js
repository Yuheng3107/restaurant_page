export default function makeContactPage(content) {
  let modal = document.createElement("div");
  modal.innerHTML = `<div class="modal" tabindex="-1" id="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header text-align-center">
          <h4>Contact Us</h4>
          <button
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Telephone: +65 1234 5678</p>
          <p>Address: Singapore, Singapore</p>
        </div>
      </div>
    </div>
  </div>`;
  content.innerHTML = "";
  content.appendChild(modal);
}
