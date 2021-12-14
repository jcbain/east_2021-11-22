console.log(dogs);

// const node = document.createElement("li");                 // Create a <li> node
// const textnode = document.createTextNode("omni1");         // Create a text node
// node.appendChild(textnode); 
// console.log(node)                             // Append the text to <li>
// document.getElementById("channels").appendChild(node); 

const $channels = $("#channels");
console.log($channels);

$channels.addClass("celebration");

setTimeout(() => {
  $channels.removeClass("celebration");
}, 3000)


const $newChannelInput = $('#new-channel-input');
const $button = $('#update-button');

$button.on('click', () => {
  console.log('i was clicked!')
  const newChannel = $newChannelInput.val();
  // console.log(newChannel);
  const $li = $("<li>").text(newChannel);
  $channels.append($li);

  $newChannelInput.val("");
  $newChannelInput.focus();

});

// $newChannelInput.on('keypress', (event) => {
//   // keyup, keydown, keypress, change
//   console.log(event.target.value);
// })

// $channels.on('mousemove', (event) => {
//   // console.log(event)
// })
