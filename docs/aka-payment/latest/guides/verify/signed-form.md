---
title: "Verify a payment form has a valid signature"
description: "Recipients of PDF payment forms want to verify the form's digital signature."
id: signed-form
sidebar_label: Verify a payment form has a valid signature
sidebar_position: 2
---

# Verify a payment form has a valid signature

Recipients of PDF payment forms want to verify the form's digital signature.

**When to use:** Recipients of a PDF payment form want to know whether it has been altered.


Verification runs in the browser; the file is not uploaded to a server.


## Ways to do this

- [Verify a signed payment form](how-to/signed-form.md) — Open the verification page (no sign-in required) and drop the PDF payment form onto it. The digital signature is checked in the browser.

## Steps

[Verify a signed payment form](how-to/signed-form.md)

1. [Verify a signed payment form](how-to/signed-form.md)
   1. In the sidebar, under **Support**, click **Verify signed document**. The page opens in a new tab and does not require sign-in (path `/verify`).
   2. Drag and drop or **select a file** containing the PDF payment form downloaded from ePayment (PDF files only). The file stays on your device; the browser only downloads ePayment's public root certificates for verification.
   3. Wait for "Checking signature…". If a technical error occurs, the page displays "Could not verify the file. Please try again."
   4. If the form is valid, the page displays "The form is valid and has not been altered," along with the following details: Payment form (Request ID, Document number, Document version, Creation date), Signature (Format, Signed at, Trusted timestamp, Hash, Algorithm), Signer certificate (with the "Self-signed" label for self-signed certificates, which are common in test environments), and, when multiple certificates are present, Certificate chain.
   5. Otherwise, the page displays "Could not verify" with one of these reasons: the file has no digital signature; content was added to the file after signing; the file was modified after signing or the signature is corrupted; the signature is intact, but the signer's certificate is not on ePayment's trusted list; or the certificate was not valid at the time of signing.

## Troubleshooting

### [Verify a signed payment form](how-to/signed-form.md)

- A signed form is required for verification to succeed: download the form from the details page of a submitted request using **Download signed form** (or **Export** on the row under My Requests). Forms for unsubmitted requests are not signed.
