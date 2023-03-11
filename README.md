# wiki-corpus

Having a large and diverse corpus like Wikipedia is invaluable for developing and testing new natural language processing algorithms and models. 
Wiki-Corpus extracts the text content of each wikipedia article and convert it into a format that can be used for natural language processing tasks, such as tokenization, part-of-speech tagging and etc. 

## Prerequisites 
Ensure you have a wiki dump file in `.xml.bz2` format downloaded from [enwiki](https://dumps.wikimedia.org/enwiki/latest/) or [metawiki](https://dumps.wikimedia.org/metawiki/latest/).
Please be aware a full `enwiki` dump is extremely large in size (+19GB). If you want a smaller in size dump (often for dev or test purposes), you should go for `metawiki`. 

You should have [Python](https://julialang.org/downloads/) installed. <br>
Install [Gensim](https://github.com/RaRe-Technologies/gensim) using pip (`pip install gensim`)

## Usage
Inside of the cloned repo, pass the url of the xml.bz2 file and initiate the process:
```shell
> python main.py metawiki-latest-pages-articles.xml
```
You can exit the process at anytime you feel enough text corpus is made, or wait until everything is processed.
Have a look at your text corpus, named `corpus.txt` inside of the `out` folder.

## FAQ
<details>
<summary>Nothing happens after I run the file with the passed argument</summary>
<br>
Try `CTRL + C` after you ran the command. Only do it once, because doing it twice kills the process.
</details>
