var ev = document.getElementById('send');
if(ev) ev.addEventListener('click', get);
function get() {
    var name=document.getElementById('name').value;
    var date=document.getElementById('date').value;
    var time=document.getElementById('time').value;
    var location=document.getElementById('location').value;
    var description=document.getElementById('description').value;
const data = {"Name":name, "date":date, "time":time, "location":location, "description":description};
console.log('data successfuly claimed: ',data);
}

/*function post() {
  fetch('http://127.0.0.1:5501/user/add',{
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Successful post :', data);
  })
  .catch((error) => {
    console.error('Error', error);
  });
}*/
