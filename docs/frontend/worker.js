var clients = [];
onconnect = function(e) {
  console.log(333,e)
  var port = e.ports[0];
  clients.push(port);
  port.addEventListener('message', function(e) {
    clients.forEach(item => {
      item.postMessage(e.data);
    })
  })
  port.start();
}