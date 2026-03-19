import PyPDF2

def extract_text_from_pdf(pdf_path, output_path):
    """Extract text from PDF and save to file"""
    with open(pdf_path, 'rb') as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
    
    with open(output_path, 'w', encoding='utf-8') as output_file:
        output_file.write(text)
    
    print(f"Extracted {len(text)} characters from {pdf_path}")
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    extract_text_from_pdf('IoT2_.pdf', 'iot2_extracted.txt')
