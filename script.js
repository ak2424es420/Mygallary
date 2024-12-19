// Get the modal
var modal = document.getElementById("fullscreenModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("fullImage");
var downloadBtn = document.getElementById("downloadBtn");
var thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(function(thumbnail) {
    thumbnail.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        downloadBtn.href = this.src;  // Set the download link to the image source
    }
});

// Get the 'X' element that closes the modal
var cancelBtn = document.getElementsByClassName("cancel")[0];

// When the user clicks on 'X', close the modal
cancelBtn.onclick = function() {
    modal.style.display = "none";
}

// Optional: Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    const icon = modeToggle.querySelector('i');

    // Check for saved user preference
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
        updateIcon(savedMode);
    }

    modeToggle.addEventListener('click', function() {
        if (body.classList.contains('night-mode')) {
            body.classList.remove('night-mode');
            localStorage.setItem('mode', '');
            updateIcon('');
        } else {
            body.classList.add('night-mode');
            localStorage.setItem('mode', 'night-mode');
            updateIcon('night-mode');
        }
    });

    function updateIcon(mode) {
        if (mode === 'night-mode') {
            icon.classList.remove('fa-moon-o');
            icon.classList.add('fa-sun-o');
        } else {
            icon.classList.remove('fa-sun-o');
            icon.classList.add('fa-moon-o');
        }
    }
});
