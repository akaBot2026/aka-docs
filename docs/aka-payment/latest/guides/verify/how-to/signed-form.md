---
title: "Verify signed payment form"
description: "Open the verification page (no sign-in required) and drop in a PDF payment form; the digital signature is checked right in your browser."
id: signed-form
sidebar_label: Verify signed payment form
sidebar_position: 2
---

# Verify signed payment form

Open the verification page (no sign-in required) and drop in a PDF payment form; the digital signature is checked right in your browser.


## Steps

1. In the sidebar, under **Support**, click **Verify signed document**; the page opens in a new tab and does not require sign-in (path `/verify`).
2. Drag and drop or **select a file** containing the PDF payment form downloaded from ePayment (PDF files only). The file never leaves your device; the browser only downloads ePayment's public root certificates for verification.
3. Wait for "Checking signature…". If a technical error occurs, the page displays "Could not verify the file. Please try again."
4. If the form is valid, the page displays "Valid form, unchanged" along with the following details: Payment form (Request ID, Document number, Document version, Creation date), Signature (Format, Signed at, Trusted timestamp, Hash, Algorithm), Signer certificate (with a "Self-signed" label for self-signed certificates, commonly used in test environments), and, when multiple certificates are present, Certificate chain.
5. Otherwise, the page displays "Could not verify" with one of the following reasons: the file has no digital signature; content was added to the file after signing; the file was modified after signing or the signature is corrupted; the signature is intact, but the signer certificate is not on ePayment's trusted list; the certificate was not valid at the time of signing.

## Troubleshooting

- You need a signed form to get a valid result: download the form from the details page of a submitted request using **Download signed form** (or **Export file** in the row under **My Requests**); forms for requests that have not been submitted are not signed.


## Used in these guides

- [Verify that a payment form has a valid signature](../signed-form.md) — For recipients of a PDF payment form who want to verify its digital signature.
