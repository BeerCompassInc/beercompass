module.exports = function (){
  console.log("i am working");
// select the target node
var target = document.querySelector('main');

  console.log("target", target);
// create an observer instance
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        console.log(mutation);

        // var p = document.createElement("p");
        // p.innerHTML = "type: " + mutation.type + "<br />" +
        //     "target id: " + mutation.target.id + "<br />" +
        //     "target attribute foo: " + mutation.target.attributes['foo'].value + "<br />";
        //
        // document.querySelector('.console').appendChild(p);
    })
})

// configuration of the observer:
var config = {
    attributes: true,
    childList: true,
    characterData: true
};

// pass in the target node, as well as the observer options
observer.observe(target, config);

// later, you can stop observing
//observer.disconnect();
}
