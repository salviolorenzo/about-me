var myImage = document.getElementById('profile');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/profile-photo.png'){
        myImage.setAttribute('src','images/ZO-logo.png');
    }
    else{
        myImage.setAttribute('src','images/profile-photo.png');
    }
};

function greetUser(name){
    name = prompt('Hello, Please type your name.');
    alert('Hi, ' + name + ', welcome to my site!');
}

greetUser();