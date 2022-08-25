function name_event() {
  const textValue = document.getElementById("name").value;
  const nameInfo = document.getElementById("profile_name_text");

  if (textBox != null) {
    if(confirm("해당 이름을 사용하시겠습니까?") == true) {
      nameInfo.style.display = "none";
      document.getElementById("result").innerText = textValue;
      document.getElementById("result").innerText += "님, 안녕하세요?";
    }
    else {
      return;
    }
  }
}