import csv

with open('all_streets.txt', encoding='utf8') as f:
    with open('all_streets_final.csv', "w", newline="") as csvfile:
        spamwriter = csv.writer(csvfile, delimiter=',')
        spamwriter.writerow(['area','street_name'])
        lines = f.readlines()
        for line in lines:
            print(line)
            ar = line.strip('\n').split(" ", 1)
            print(ar)
            spamwriter.writerow([ar[0], ar[1]])