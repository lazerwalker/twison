# Twison

[![Build Status](https://travis-ci.org/lazerwalker/twison.svg?branch=master)](https://travis-ci.org/lazerwalker/twison)

Twison is a story format for [Twine 2](http://twinery.org/2) that simply exports to JSON.

It is inspired by [Entweedle](http://www.maximumverbosity.net/twine/Entweedle/) as a model for how Twine 2 story formats work.

## Installation

From the Twine 2 story select screen, add a story format, and point it to the url `http://github.com/lazerwalker/twison/raw/master/dist/format.js`.

From within your story, set its story format to Twison. Choosing "Play" will now give you a JSON file.


## Output

Here's an example of its output:

```json
{
  "passages": [
    {
      "text": "This is a passage that goes to [[No Where->nowhere]].\n\nor is to [[somewhere]]?\n\nHere's a [[third link]]\n\nClick [[me->someNode]]",
      "links": [
        {
          "name": "No Where",
          "link": "nowhere",
          "pid": "3"
        },
        {
          "name": "somewhere",
          "link": "somewhere",
          "pid": "2"
        },
        {
          "name": "third link",
          "link": "third link",
          "pid": "4"
        },
        {
          "name": "me",
          "link": "someNode",
          "pid": "5"
        }
      ],
      "name": "First passage",
      "pid": "1",
      "position": {
        "x": "553.3333333333334",
        "y": "38.333333333333336"
      },
      "tags": [
        "tag",
        "second-tag"
      ]
    },
    {
      "text": "You found me!",
      "name": "somewhere",
      "pid": "2",
      "position": {
        "x": "893.3333333333334",
        "y": "241.66666666666669"
      }
    }
  ],
  "name": "Test",
  "startnode": "1",
  "creator": "Twine",
  "creator-version": "2.0.9",
  "ifid": "1881C2BE-C764-4D33-ACC6-7BAEBB6D770A"
}
```

It aims to maintain all fields provided in Twine's internal XML data, while augmenting with other information where possible. For example, it doesn't touch a node's text contents, but it does parse links to provide a dictionary of links and destination nodes.


## Development

If you want to hack on Twison itself:

1. Clone this repo.
2. Run `npm install` to install dependencies.
3. Make your changes to the unminified code in the `src` folder
4. Run `node build.js` to compile your source into a `format.js` file that Twine 2 can understand.


### Testing your changes locally

Running `npm start` will start a local web server that serves the compiled `format.js` file. By default, this will be available at `http://localhost:3000/format.js`. Add that URL as a story format to your copy of Twine 2; every time you re-build it and then hit the "play" button on your story, it should use the latest version of your code. 

Do note that this is easier if you're using the downloadable version of Twine 2, as running it from within your web browser is likely to cache the format.js file.

All contributions are welcome! If making code changes, please be sure to run the test suite (`npm test`) before opening a pull request.


## License

Twison is licensed under the MIT license. See the LICENSE file for more information.