function previewImage() {
    const preview = document.getElementById('image-preview');
    const fileInput = document.getElementById('profile-pic');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        const img = document.createElement('img');
        img.src = reader.result;
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        preview.innerHTML = '';
        preview.appendChild(img);
    }

    
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '';
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    // You can now use formData to send the form data to your server or perform any other action
    // Example: You can use fetch API to send formData to a server endpoint
    // fetch('upload.php', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
});
