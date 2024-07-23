import Swal from "sweetalert2";

export function showAlert({ icon = "error", title="Oops...", text="Something went wrong!", customClass = "" }) {
    Swal.fire({
        icon,
        title,
        text,
        customClass: { confirmButton: customClass } // Apply custom class to the confirm button
    });
}
  

  