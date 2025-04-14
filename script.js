    // Video Modal Logic
    const videoModal = document.getElementById("video-modal");
    const openVideoBtn = document.getElementById("watch-video-btn");
    const closeVideoBtn = document.getElementById("close-modal-btn");
    const videoPlayer = document.getElementById("modal-video");

    if (openVideoBtn) {
        openVideoBtn.onclick = function(event) {
          event.preventDefault(); // Prevent default anchor behavior
          videoModal.style.display = "flex"; // Use flex to center content
          videoPlayer.play(); // Autoplay video
        }
    }

    if (closeVideoBtn) {
        closeVideoBtn.onclick = function() {
          videoModal.style.display = "none";
          videoPlayer.pause();
          videoPlayer.currentTime = 0; // Reset video
        }
    }

    if (videoModal) {
        // When the user clicks anywhere outside of the modal content, close it
        videoModal.onclick = function(event) {
          // Check if the click is directly on the modal backdrop (not the content)
          if (event.target == videoModal) {
            videoModal.style.display = "none";
            videoPlayer.pause();
            videoPlayer.currentTime = 0; // Reset video
          }
        }
    }

    // Image Modal Logic
    const imageModal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeImageBtn = document.getElementById("close-image-modal");
    const galleryImages = document.querySelectorAll(".gallery-image"); // Use the class added to gallery images

    galleryImages.forEach(img => {
        img.onclick = function() {
            imageModal.style.display = "flex"; // Show the modal (using flex like video)
            modalImage.src = this.src; // Set the src for the modal image
            modalImage.alt = this.alt; // Optionally copy alt text
        }
    });

    if (closeImageBtn) {
        closeImageBtn.onclick = function() {
            imageModal.style.display = "none";
            modalImage.src = ""; // Clear src when closing
        }
    }

    if (imageModal) {
        // Close the modal if the user clicks on the backdrop
        imageModal.onclick = function(event) {
            if (event.target == imageModal) {
                imageModal.style.display = "none";
                modalImage.src = ""; // Clear src when closing
            }
        }
    }