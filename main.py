import sys
from gensim.corpora import WikiCorpus
import subprocess
import importlib.util

if "gensim" in sys.modules:
    print("=> dep already satisfied. Ignoring pip install.")
else: 
    subprocess.check_call([sys.executable, "-m", "pip", "install", "gensim"])

if len(sys.argv) != 2:
    print("Usage: python main.py <dump_file>")
    sys.exit(1)
else:
    output = open("./out/corpus.txt", 'w', encoding='utf-8')
    x = 0
    for text in WikiCorpus(sys.argv[1]).get_texts():
        output.write(' '.join(text) + '\n')
        x += 1
        if x % 100 == 0:
            print(f"Done {x} articles...")

    output.close()
    print("Completed!")
