# 📄 README.md: ScanPay Dynamic QR Scanner UX Case Study

## 🚀 ScanPay: Dynamic QR Code Payment Solution

### ✨ Project Mission 
A Front-End and UX Case Study demonstrating a solution to the **universal retail payment bottleneck** using dynamic, transaction-specific QR codes. Optimized for rapid deployment in mobile-centric markets.

---

### Live Demo
🔗 **Access the live, functional scanner here:** [https://susan-awori.github.io/Dynamic-QR-UX-Case/]
*(Note: Camera access requires a secure context (HTTPS) or a local server.)*

## 💡 Project Overview: Eliminating Payment Friction

ScanPay is a conceptual mobile web application developed to demonstrate a high-performance, minimalist approach to payment processing.

The core objective was to showcase expertise in:
* **Front-End Integration:** Seamlessly integrating a camera API (`html5-qrcode`).
* **User Experience (UX):** Designing a **single-screen, low-friction flow** where the camera is the primary input.
* **Technical Reliability:** Ensuring cross-device camera access and reliable code execution.

## 🎯 Key UX & Technical Achievements

| Feature | UX Goal | Technical Implementation |
| :--- | :--- | :--- |
| **Instant Scanning** | Eliminate delays and reduce user frustration. | Integrated the **`html5-qrcode`** library, configured for fast decoding (10 FPS) and rear camera priority (`facingMode: "environment"`). |
| **Secure Context** | Ensure universal device compatibility for camera access. | Hosted on **GitHub Pages (HTTPS)** to guarantee a secure context for the `getUserMedia` API. |
| **View Isolation** | Maintain focus; prevent visual confusion. | Implemented JavaScript logic to ensure only one view is displayed at a time (`scanner-view` OR `result-view`). |
| **Payment Simulation** | Demonstrate end-to-end transactional capability. | Designed a **mock transaction handler** (`processScanData`) to simulate API parsing and generate realistic KES payment amounts. |
| **Mobile-First Design** | Usable in real-world retail scenarios. | Used CSS media queries and strict aspect ratio controls for consistent presentation on mobile devices. |

## 🛠 Technology Stack

* **HTML5:** Semantic document structure.
* **CSS3:** Mobile-first, responsive design utilizing CSS Variables for quick theme customization.
* **JavaScript (ES6):** Core functional logic, DOM manipulation, and state management.
* **Library:** [html5-qrcode](https://github.com/mebjas/html5-qrcode) (Chosen for its robust API and specific camera control features).

## 📋 How It Works (The User Flow)

1.  **Initial State:** The app requests camera permission and displays the scanner view. The confirmation screen (`#result-view`) remains hidden.
2.  **Successful Scan:** The `onScanSuccess` callback fires, immediately stopping the camera (`qrCodeScanner.stop()`) to conserve battery.
3.  **Confirmation View:** The scanner is hidden, and the transaction details are presented.
4.  **Completion:** Tapping **Confirm** triggers a simulated network delay before displaying the final success state message.

## ⚙️ Development & Maintenance

This project follows the **Conventional Commits** standard to maintain a clear and readable version history, separating features (`feat`), bug fixes (`fix`), and styling (`feat(ui)`).

| Commit Example | Purpose |
| :--- | :--- |
| `feat(scanner): Finalize QR code scanning logic` | Documenting major functional additions. |
| `fix(core): Resolve critical TypeError` | Documenting a high-priority bug fix (e.g., the element access issue). |
| `feat(ui): Implement professional scanner styling` | Documenting visual improvements and polish. |

## 🏆 Credit & Author

### Developed By:
* **Author:** Susan Awori
* **GitHub:** [https://github.com/susan-awori]
* **LinkedIn:** [www.linkedin.com/in/susan-awori-6a83672a5]
* **Medium:** [https://medium.com/@susan-awori]
* **Professional Contact:** [susanawori15@gmail.com]

### Acknowledgements:
* **QR Code Library:** The project relies on the excellent `html5-qrcode` library by minhaz-av (GitHub) | [https://github.com/mebjas/html5-qrcode](https://github.com/mebjas/html5-qrcode).
