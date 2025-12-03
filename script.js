const videoElement = document.getElementById("scanner");
const statusMessage = document.getElementById("status-message");
const resultView = document.getElementById("result-view");
const merchantNameSpan = document.getElementById("merchant-name");
const amountDueSpan = document.getElementById("amount-due");
const confirmButton = document.getElementById("confirm-payment");
const cancelButton = document.getElementById("cancel-scan");

// Starting camera stream
async function startScanner() {
  try {
    ator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });
    videoElement.srcObject = stream;
    const stream = await navig;
    videoElement.play();
    statusMessage.textContent = "Camera ready. Scan a QR code.";

    // QR code parsing library here
  } catch (err) {
    statusMessage.textContent =
      "Error: Could not access camera. Please check permissions.";
    console.error("Camera access error:", err);
  }
}

function handleScanResult(data) {
  // 1. Parse the data (from QR code)
  const mockData = {
    merchant: "Mama Oti's Kiosk",
    amount: "500.00",
  };

  // 2. Stop the video feed to save resources
  videoElement.srcObject.getTracks().forEach((track) => track.stop());

  // 3. Update the UI with transaction details
  merchantNameSpan.textContent = mockData.merchant;
  amountDueSpan.textContent = mockData.amount;

  document.getElementById("scanner-view").style.display = "none";
  resultView.style.display = "block";
  statusMessage.textContent = "Review transaction details.";
}

// Event Listeners for buttons
confirmButton.addEventListener("click", () => {
  statusMessage.textContent = "Processing payment... (Simulation)";
  // Simulation logic
  setTimeout(() => {
    statusMessage.textContent = "Payment successful! Thank you.";
    confirmButton.disabled = true;
  }, 2000);
});

cancelButton.addEventListener("click", () => {
  // Reset the UI and restart the scanner
  resultView.style.display = "none";
  document.getElementById("scanner-view").style.display = "block";
  confirmButton.disabled = false;
  startScanner();
});

// ** Initialize the application **
window.onload = startScanner;
