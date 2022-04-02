<!DOCTYPE html>
<script type="text/javascript">
document.onkeydown = function(event) {
  var key_press = String.fromCharCode(event.keyCode);
  var key_code=event.keyCode;
  document.getElementById('kp').innerHTML=key_press;
    document.getElementById('kc').innerHTML=key_code;
    var status=document.getElementById('status');
    status.innerHTML="DOWN Event Fired for:"+key_press;
}
document.onkeyup=function(event)
{
  var key_press = String.fromCharCode(event.keyCode)
    var status=document.getElementById('status');
    status.innerHTML="UP Event Fired for:"+key_press;
}
</script>
<h2>Javascript Capture Keyboard Input Example</h2>
<h3>onkeydown - onkeyup</h3>
Key Pressed : <span id="kp"></span>
<br />
Key Code : <span id="kc"></span>
<p><id = "status">Keyboard Event Status</p>
