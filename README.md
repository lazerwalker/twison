# Twison

[![Build Status](https://travis-ci.org/lazerwalker/twison.svg?branch=master)](https://travis-ci.org/lazerwalker/twison)

Twison is a story format for [Twine 2](http://twinery.org/2) that simply exports to JSON.

It is inspired by [http://www.maximumverbosity.net/twine/Entweedle/](Entweedle) as a model for how Twine 2 story formats work.

## Installation

From the Twine 2 story select screen, add a story format, and point it to the url `http://github.com/lazerwalker/twison/raw/master/dist/format.js`.

From within your story, set its story format to Twison. Choosing "Play" will now give you a JSON file.


## Output

Here's an exampe of its output:

```json
[
  {
    "text": "This is a passage that goes to [[another node->first]].\n\nTHis one goes to to [[somewhere else]]?\n\nHere's a [[third link]]\n\nClick [[me->someNode]]",
    "links": [
      {
        "name": "another node",
        "link": "first"
      },
      {
        "name": "somewhere",
        "link": "somewhere"
      },
      {
        "name": "third link",
        "link": "third link"
      },
      {
        "name": "me",
        "link": "someNode"
      }
    ],
    "name": "First passage",
    "pid": "1",
    "tags": ["tag"],
    "position": {
      "x": "553.3333333333334",
      "y": "38.333333333333336"
    }
  },
  {
    "text": "You found me!",
    "name": "someNode",
    "pid": "2",
    "position": {
      "x": "893.3333333333334",
      "y": "241.66666666666669"
    }
  }
]
```

It aims to maintain all fields provided in Twine's internal XML data, while augmenting with other information where possible. For example, it doesn't touch a node's text contents, but it does parse links to provide a dictionary of links and destination nodes.


## Development

If you want to hack on Twison itself, clone this repo. The code itself lives in `src`; you can compile it down to the story format Twine expects by running `node build.js` from the root project directory (you'll need to `npm install` first).


## License

Twison is licensed under the MIT license. See the header located in src/twison.js.