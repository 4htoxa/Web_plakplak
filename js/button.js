var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        // Создаем новый элемент img
        var img = document.createElement("img");
        // Устанавливаем источник изображения
        img.src = "https://sun9-80.userapi.com/impg/HeUTgrdUExwAVHoe8gzP1bU-0EtcTgKWXhR7gQ/voO_sqGRKH8.jpg?size=1040x1340&quality=95&sign=5c9453ab099109f896b945d1d5d22652&type=album";
        // Добавляем изображение в параграф
        document.getElementById("demo").appendChild(img);
    }
}