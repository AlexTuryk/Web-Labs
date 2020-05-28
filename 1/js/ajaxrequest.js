var ev = document.getElementById('send');
if(ev) ev.addEventListener('click', get);
function get() {
    var name=document.forms.create.nameEvent.value;
    var date=document.forms.create.dateEvent.value;
    var time=document.forms.create.timeEvent.value;
    var location=document.forms.create.locationEvent.value;
    var description=document.forms.create.descriptionEvent.value;
}
 const data = {"Name": name, "date": date, "time": time, "location": location, "description": description};
function post() {
  fetch('http://localhost:5001/api/user/add',{
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Successful :', data);
  })
  .catch((error) => {
    console.error('Error', error);
  });
}