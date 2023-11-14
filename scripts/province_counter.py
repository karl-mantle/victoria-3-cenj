# Open the file
with open('14_siberia.txt', 'r') as file:
    lines = file.readlines()

new_lines = []
for line in lines:
    if "provinces" in line:
        count = line.count('x')
        # Append the count as a comment on a new line
        new_lines.append(line.rstrip('\n'))
        new_lines.append('    # Number of provinces: ' + str(count))
    else:
        new_lines.append(line.rstrip('\n'))

with open('14_siberia.txt', 'w') as file:
    file.write('\n'.join(new_lines))