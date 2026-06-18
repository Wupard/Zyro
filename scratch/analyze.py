import re
import sys

def analyze(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    issues = []
    
    for i, line in enumerate(lines):
        # Unoptimized window listeners
        if re.search(r'window\.addEventListener\([\'"](scroll|resize)[\'"]', line):
            if 'throttle' not in line and 'debounce' not in line:
                issues.append((i+1, "Potential unthrottled scroll/resize listener", line.strip()))
        
        # innerHTML in loops (rough heuristic)
        if 'innerHTML +=' in line:
            issues.append((i+1, "innerHTML += is slow, use documentFragment or insertAdjacentHTML", line.strip()))
            
        # Multiple DOM selections that could be cached (rough heuristic - just flag all querySelector inside for/while)
        if re.search(r'(for\s*\(|while\s*\()', line):
            # This is too complex for simple regex, but let's check for inner querySelector
            pass
            
    # Check for innerHTML usage count
    inner_html_count = sum(1 for line in lines if '.innerHTML =' in line or '.innerHTML +=' in line)
    
    # Check for event listeners count
    listener_count = sum(1 for line in lines if '.addEventListener(' in line)
    
    # Check for Firestore snapshot
    snapshot_count = sum(1 for line in lines if 'onSnapshot(' in line)
    
    print(f"Total innerHTML assignments: {inner_html_count}")
    print(f"Total event listeners added: {listener_count}")
    print(f"Total Firestore snapshots: {snapshot_count}")
    
    for issue in issues[:20]:
        print(f"Line {issue[0]}: {issue[1]} -> {issue[2]}")

if __name__ == '__main__':
    analyze('app.js')
