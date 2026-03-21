import PyPDF2
import re

def extract_text_from_pdf(pdf_path):
    """Extract all text from a PDF file."""
    text = ""
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
    return text

def save_text_to_file(text, output_path):
    """Save extracted text to a file."""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text)

if __name__ == "__main__":
    pdf_path = "CS422_ML_Reviewer_.pdf"
    output_path = "ml_extracted_text.txt"

    print(f"Extracting text from {pdf_path}...")
    text = extract_text_from_pdf(pdf_path)
    save_text_to_file(text, output_path)
    print(f"Text extracted and saved to {output_path}")
    print(f"Total characters: {len(text)}")
