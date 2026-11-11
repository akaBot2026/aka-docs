---
title: "Document upload limits"
description: "Add from invoices: up to 50 invoices per upload; import a document bundle: up to 50 files and 100 MB; files uploaded to the assistant: up to 10 MB."
id: file-limits
sidebar_label: Document upload limits
sidebar_position: 2
---

# Document upload limits

Add from invoices: up to 50 invoices per upload; import a document bundle: up to 50 files and 100 MB; files uploaded to the assistant: up to 10 MB.

**Requirement:** Required


**Add from invoices**: The Upload tab accepts .xml, .pdf, .docx, and image files, with a limit of 50 files per upload. Any files over the limit are skipped, and a dialog displays "A maximum of 50 invoices can be uploaded at a time; N files were skipped." The Select from list tab also allows you to select up to 50 invoices at a time. **Import document bundle**: Supported formats are .pdf, .docx, .xml, .png, .jpg, .jpeg, .webp, .gif, and .zip; the limit is 50 files and 100 MB total. If you exceed either limit, the Import button is disabled ("A maximum of 50 files can be imported at a time…", "The document bundle is larger than 100 MB…"). **AI Assistant**: Each file can be up to 10 MB; each user can have up to 50 unattached files. When the limit is reached, the oldest files from other conversations are deleted to make room. You cannot upload more files to a conversation that already has 50 files. Files are automatically deleted after 24 hours by default. Reading PDFs and images requires a configured AI model; XML invoices can be read without a model.


## Used in these guides

- [AI Assistant skills](../../guides/assistant/features/skills.md) — Prebuilt recipes with steps written in natural language. Users invoke them with slash commands in the chat box, and administrators manage them.
- [Create a draft with the AI Assistant](../../guides/assistant/how-to/create-draft.md) — Open the AI Assistant, select the /hoa-don, /ban-ke, or /nhap-tay skill, drop in an invoice or expense report, complete the form, and click Agree on the confirmation card.
- [Add an expense from an invoice](../../guides/requests/how-to/add-invoice-expense.md) — In the Expense report step, select Add from invoices, then upload an invoice or select one from Invoice Management. Each invoice becomes an expense line.
- [Import a document bundle as expense lines](../../guides/requests/how-to/import-bundle.md) — In the Expense report step, select Import document bundle and upload multiple files, a PDF, or a ZIP file. The system splits them into expense lines.
