function log() 
{
  var user = document.getElementById('un').value
  var pass = document.getElementById('pd').value
  if (user == "aqwsde321" && pass == "qaswed123") 
  {
    window.open("YES.html", "_self")
    alert('Break a leg!')
  } else {
    alert('Good Luck!')
  }
}