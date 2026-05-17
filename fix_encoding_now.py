#!/usr/bin/env python3
import os
import sys

files = ['index.html', 'app.js', 'styles.css', 'wupard-dashboard.html', 'wupard-dashboard.js', 'wupard-dashboard.css']

map_chars = {
    # Double mojibake fixes
    'ÃƒÂ¼': 'ü', 'ÃƒÂ¶': 'ö', 'ÃƒÂ§': 'ç', 'Ã„Â±': 'ı', 'Ã…Å¸': 'ş', 'Ã„Å¸': 'ğ',
    'ÃƒÅ"': 'Ü', 'Ãƒâ€"': 'Ö', 'Ãƒâ€¡': 'Ç', 'Ã„Â°': 'İ', 'Ã…Âž': 'Ş', 'Ã„Âž': 'Ğ',
    'Ã¢â‚¬â€ ': '—', 'Ã¢â‚¬Âº': '›', 'Ã¢â€"â€ ': '◆', 'Ã¢â€"Â ': '●', 'Ã‚Â·': '·',
    'Ã¢Å"â€œ': '✓', 'Ã¢â‚¬â€œ': '-', 'ÄŸÅ¸Å'Â ': '🌐', 'ÄŸÅ¸â€˜Â¤': '👤', 'ÄŸÅ¸â€ â€ ': '🔔',
    
    # Single mojibake fixes
    'Ã¼': 'ü', 'Ã¶': 'ö', 'Ã§': 'ç', 'Ä±': 'ı', 'ÅŸ': 'ş', 'ÄŸ': 'ğ',
    'Ãœ': 'Ü', 'Ã–': 'Ö', 'Ã‡': 'Ç', 'Ä°': 'İ', 'Åž': 'Ş', 'Äž': 'Ğ',
    'â€"': '—', 'â€º': '›', 'â—†': '◆', 'â— ': '●', 'Â·': '·',
    'âœ"': '✓', 'ğŸŒ ': '🌐', 'ğŸ'¤': '👤', 'ğŸ""': '🔔',
    
    # HTML entities
    '&#214;': 'Ö', '&#252;': 'ü'
}

for f in files:
    if not os.path.exists(f):
        continue
    
    print(f"Processing {f}...")
    
    # Read with UTF-8, ignore errors
    with open(f, 'r', encoding='utf-8', errors='ignore') as file:
        content = file.read()
    
    # Remove BOM if present
    if content.startswith('\ufeff'):
        content = content[1:]
        print(f"  - Removed BOM")
    
    # Replace characters
    replaced = 0
    for k, v in map_chars.items():
        if k in content:
            content = content.replace(k, v)
            replaced += 1
    
    if replaced > 0:
        print(f"  - Fixed {replaced} character mappings")
    
    # Write back with UTF-8 without BOM
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
    
    print(f"  ✓ Done")

print("\nAll files processed!")
