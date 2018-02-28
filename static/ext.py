


with open('single_30.txt', encoding='utf8') as f:
    lines = f.readlines()
    #print(lines)
    new_lines = list(map(lambda x:x.strip(),lines))
    new_lines_2 = list(filter(None, new_lines))
    print (new_lines_2)
    it = iter(new_lines_2)
    for x in it:
        print(x,next(it))
    