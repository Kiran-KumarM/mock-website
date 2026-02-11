# PDF Answer Keys

This directory contains PDF answer key files for exams.

## File Naming Convention

Name PDF files using the exam ID:
- Example: `ibps-po-prelims-2025-aug-23-shift-1.pdf`

## How to Add a PDF

1. Place your PDF file in this directory
2. Update the exam metadata in `src/data/questionBank.js`
3. Add the `answerKeyPdf` field with the path: `/pdfs/your-file-name.pdf`

## Example

```javascript
{
  id: 'ibps-po-prelims-2025-aug-23-shift-1',
  // ... other fields
  answerKeyPdf: '/pdfs/ibps-po-prelims-2025-aug-23-shift-1.pdf'
}
```

The PDF will automatically appear on the results page for that exam.
