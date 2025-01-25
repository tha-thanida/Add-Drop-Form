function toggleReason(checkbox) {
    // Get the corresponding reason div by using the value of the checkbox
    const reasonDiv = document.getElementById('reason_' + checkbox.value);

    // Show or hide the reason input field based on checkbox state
    if (checkbox.checked) {
      reasonDiv.classList.remove('hidden');
    } else {
      reasonDiv.classList.add('hidden');
    }
  }