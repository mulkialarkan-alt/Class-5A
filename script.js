function opennav(){
    document.getElementById("sideopener").style.fontSize = 0;
    document.getElementById("sidebar").style.width = '200px';
}

function closenav(){
    document.getElementById("sideopener").style.fontSize = '48px';
    document.getElementById("sidebar").style.width = 0;
}

var darkmode = false
function thememode(){
    if (darkmode == false){
        darkmode = true
        document.getElementById("#").style.background = "#202020";
        document.getElementById("main").style.color = "white";
        document.getElementById("footer").style.background = "#555555";
    }else{
        darkmode = false
        document.getElementById("#").style.background = "white";
        document.getElementById("main").style.color = "#505050";
        document.getElementById("footer").style.background = "#909090"
    }
}

function home(){
    document.getElementById("main").innerHTML = '<h1 id="home">Home</h1><h3>Selamat Datang! Ini adalah Website Kelas 5A Ciganjur 01.</h3><h3>Jika ingin melihat Tentang kelas kami atau Kontak, Tekan tombol di kanan atas dan pilih.</h3>';
}

function about(){
    document.getElementById("main").innerHTML = '<h1 id="about">About</h1><h3>Kelas 5A adalah kelas yang ramah dan aktif di Ciganjur 01.</h3><h3>Ekskul yang kami ikuti itu Pramuka, PMR, Futsal, Marching band, dan lain-lain.</h3>';
}

function contact(){
    document.getElementById("main").innerHTML = '<h1 id="contact">Contact</h1><h3>Dibuat Oleh : Yafa Mulki Al-Arkan</h3><h3>Guru : Ibu Puji </h3><h3>Sekolah : SDN Ciganjur 01</h3>';
}