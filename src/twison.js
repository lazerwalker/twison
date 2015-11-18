window.onload = function() {
	window.Twison = {
		extractLinksFromText: function(text) {
	    var links = text.match(/\[\[.+?\]\]/g)
	    if (links) {
	      return links.map(function(link) {
	        var differentName = link.match(/\[\[(.*?)\-\&gt;(.*?)\]\]/);
	        if (differentName) {
	          // [[name->link]]
	          return {
	            name: differentName[1],
	            link: differentName[2]
	          };
	        } else {
	          // [[link]]
	          link = link.substring(2, link.length-2)
	          return {
	            name: link,
	            link: link
	          }
	        }
	      });
	    }
	  },

  	convertPassage: function(passage) {
	  	var dict = {text: passage.innerHTML};

      var links = this.extractLinksFromText(dict.text);
      if (links) {
        dict.links = links;
      }

      ["name", "pid", "tags"].forEach(function(attr) {
        var value = passage.attributes[attr].value;
        if (value) {
          dict[attr] = value;
        }
      });

      var position = passage.attributes.position.value;
      if (position) {
        position = position.split(',')
        dict.position = {
          x: position[0],
          y: position[1]
        }
      }

      return dict;
		},

		convert: function() {
			var passages = document.getElementsByTagName("tw-passagedata");
	    return Array.prototype.slice.call(passages).map(this.convertPassage);
    }
  }
  document.getElementById("output").innerHTML = Twison.convert()
}	