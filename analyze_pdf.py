import re

with open('ml_extracted_text.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract topic headings
topics = re.findall(r'Topic \d+ — ([^\n]+)', content)
print('Topics found:')
for i, t in enumerate(topics, 1):
    print(f'{i}. {t}')

print(f'\nTotal topics: {len(topics)}')

# Look for potential Q&A patterns
print('\n--- Looking for question patterns ---')
# Find lines that might be questions (end with ?)
lines = content.split('\n')
question_lines = [line.strip() for line in lines if '?' in line and len(line.strip()) > 20]
print(f'Found {len(question_lines)} lines with question marks')
if question_lines:
    print('Sample questions:')
    for q in question_lines[:10]:
        print(f'- {q}')
