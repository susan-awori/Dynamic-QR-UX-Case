document.addEventListener("DOMContentLoaded", () => {
  const resultView = document.getElementById("result-view");
  const scannerView = document.getElementById("scanner-view");
  const statusMessage = document.getElementById("status-message");
  const merchantNameSpan = document.getElementById("merchant-name");
  const amountDueSpan = document.getElementById("amount-due");
  const confirmButton = document.getElementById("confirm-payment");
  const cancelButton = document.getElementById("cancel-scan");

  // --- HTML5-QRCODE Global Instance ---
  // 'reader' is the ID of the div element in index.html
  const qrCodeScanner = new Html5Qrcode("reader");

  const config = {
    fps: 10,
    qrbox: { width: 250, height: 250 },
    aspectRatio: 1.0,
    videoConstraints: { facingMode: "environment" },
  };

  const onScanSuccess = (decodedText, decodedResult) => {
    // Stop the scanner immediately after a successful scan
    qrCodeScanner
      .stop()
      .then((ignore) => {
        scannerView.style.display = "none";
        processScanData(decodedText);
      })
      .catch((err) => {
        console.error("Failed to stop scanner:", err);
        processScanData(decodedText);
      });
  };

  function processScanData(data) {
    statusMessage.textContent = `QR Code Scanned! Parsing data...`;

    const mockTransaction = {
      merchant: "ScanPay Demo Retail Store",
      amount: (Math.random() * 1500 + 100).toFixed(2),
      transactionId: data.substring(0, 15),
    };

    // Update the result view UI
    merchantNameSpan.textContent = mockTransaction.merchant;
    amountDueSpan.textContent = mockTransaction.amount;

    resultView.style.display = "block";
    statusMessage.textContent = `Review and Confirm Payment for KES ${mockTransaction.amount}.`;
  }

  // --- Initialization Function ---
  function startScanner() {
    statusMessage.textContent = "Awaiting camera permission...";

    qrCodeScanner
      .start(
        { facingMode: "environment" },
        config,
        onScanSuccess,
        (errorMessage) => {}
      )
      .catch((err) => {
        statusMessage.textContent = `Error: Cannot start camera. Check permissions or run on a local server (HTTPS).`;
        console.error("Camera startup error:", err);
      });
  }

  // --- Event Listeners and UI Management ---

  confirmButton.addEventListener("click", () => {
    // SIMULATE PAYMENT API CALL
    statusMessage.textContent = "Processing payment... (Simulation)";
    confirmButton.disabled = true;

    setTimeout(() => {
      // Show success message
      statusMessage.textContent =
        "Payment successful! Transaction ID: " + (Date.now() % 100000);
    }, 2500);
  });

  cancelButton.addEventListener("click", () => {
    // Reset the UI
    resultView.style.display = "none";
    scannerView.style.display = "block";
    confirmButton.disabled = false;

    // Restart the scanning process
    startScanner();
  });

  startScanner();
});
