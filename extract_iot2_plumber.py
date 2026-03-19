import pdfplumber

def extract_text_from_pdf(pdf_path, output_path):
    """Extract text from PDF and save to file"""
    with pdfplumber.open(pdf_path) as pdf:
        text = ""
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    
    with open(output_path, 'w', encoding='utf-8') as output_file:
        output_file.write(text)
    
    print(f"Extracted {len(text)} characters from {pdf_path}")
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    extract_text_from_pdf('IoT2_.pdf', 'iot2_extracted.txt')
