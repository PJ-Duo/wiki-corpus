# wiki-corpus

Having a large and diverse corpus like Wikipedia is invaluable for developing and testing new natural language processing algorithms and models. 
Wiki-Corpus extracts the text content of each wikipedia article and convert it into a format that can be used for natural language processing tasks, such as tokenization, part-of-speech tagging and etc. 

## Prerequisites 
Ensure you have a wiki xml dump file downloaded from [dumps.wikimedia.org](https://dumps.wikimedia.org/enwiki/latest/).
Please be aware they're usually extremely large in size (+19GB) and for most use cases, `enwiki-latest-pages-articles.xml.bz2` should be downloaded. 

Lastly, ensure you have [node.js](https://nodejs.org/en/) installed.

## Usage
Inside of the cloned repo, install the dependency required by wiki-corpus:
```shell
> npm install
```
Pass the url of the extracted xml file and initiate the process:
```shell
> node index.js dump.xml
```

Once the process is over, have a look at the complete text corpus, named `output.txt` inside of the `out` folder.