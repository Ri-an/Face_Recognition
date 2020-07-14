(function() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    navigator.getMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUderMedia ||
                         navigator.msGetUserMedia;
 
    navigator.getMedia({
        video: true,
        audio: false
    }, function(stream) {
        video.srcObject = stream;
        video.play();
    }, function() {
        console.log(error);
    });

    document.getElementById('capture').addEventListener('click',function() {
        context.drawImage(video, 0, 0, 800, 600);
        var img=canvas.toDataURL('image/jpeg');
        document.querySelector('#capture').href=img;
        var name=document.getElementById('name');
        document.querySelector('#capture').download=name.value;
      
    })
})();