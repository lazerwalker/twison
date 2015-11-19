var expect = require('chai').expect;
var fs = require('fs');
var jsdom = require('mocha-jsdom');

var story;

describe("Converting to JSON", function() {
  jsdom();

  it("should generate the correct JSON", function() {
    var storyData = fs.readFileSync("fixture.html", "utf-8");
    var div = document.createElement('div');
    div.innerHTML = storyData;
    story = div.childNodes[0];

    var expected = JSON.parse(fs.readFileSync("output.json", "utf-8"));

    require('../src/twison.js');

    var result = window.Twison.convertStory(story);

    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected));

  });
});