/**
 * Portfolio Script
 * Handles Modals, Resume Download, and UI Interactions
 */

// Modal Management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal if escape key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
        document.body.style.overflow = 'auto';
        
        // Also close confirm dialog if open
        const confirmOverlay = document.getElementById('confirmOverlay');
        if (confirmOverlay) confirmOverlay.classList.remove('active');
    }
});

// Resume Download Logic
function handleResumeDownload() {
    const confirmOverlay = document.getElementById('confirmOverlay');
    if (confirmOverlay) {
        confirmOverlay.classList.add('active');
    }
}

function closeConfirm() {
    const confirmOverlay = document.getElementById('confirmOverlay');
    if (confirmOverlay) {
        confirmOverlay.classList.remove('active');
    }
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Pranav_Bhalerao_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeConfirm();
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to all modal overlays for clicking outside to close
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Handle Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
