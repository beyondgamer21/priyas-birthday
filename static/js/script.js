document.addEventListener('DOMContentLoaded', function() {
    // Spotify-style Music Player Controls
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const audioIcon = document.getElementById('audioIcon');
    const cdDisk = document.querySelector('.cd-disk');
    let isPlaying = false;
    
    // Attempt to autoplay music when page loads
    function initAudio() {
        console.log('CD Disk element:', cdDisk);
        // Start playback
        bgMusic.play().then(() => {
            isPlaying = true;
            audioIcon.classList.remove('fa-play');
            audioIcon.classList.add('fa-pause');
            if (cdDisk) cdDisk.classList.remove('paused');
            console.log('Music started playing successfully');
        }).catch(error => {
            console.log("Autoplay prevented by browser:", error);
            isPlaying = false;
            audioIcon.classList.remove('fa-pause');
            audioIcon.classList.add('fa-play');
            if (cdDisk) cdDisk.classList.add('paused');
        });
    }
    
    // Check if the audio file exists and handle errors
    bgMusic.addEventListener('error', function() {
        console.warn('Background music file could not be loaded. Please upload a file named "background-music.mp3" to the static/audio folder.');
        // Change the icon to show that music is unavailable
        audioIcon.classList.remove('fa-pause', 'fa-play');
        audioIcon.classList.add('fa-volume-xmark');
        cdDisk.classList.add('paused');
        
        // Add a tooltip to explain why music isn't playing
        musicToggle.setAttribute('title', 'Music file not found. Please add background-music.mp3 to static/audio folder.');
    });
    
    // Toggle play/pause when the button is clicked
    musicToggle.addEventListener('click', function() {
        // Skip if there was an error loading the audio
        if (bgMusic.error) return;
        
        if (isPlaying) {
            bgMusic.pause();
            audioIcon.classList.remove('fa-pause');
            audioIcon.classList.add('fa-play');
            cdDisk.classList.add('paused');
        } else {
            bgMusic.play().catch(error => {
                console.log("Play prevented by browser:", error);
            });
            audioIcon.classList.remove('fa-play');
            audioIcon.classList.add('fa-pause');
            cdDisk.classList.remove('paused');
        }
        isPlaying = !isPlaying;
    });

    // Try to autoplay music when user first interacts with the page
    window.addEventListener('DOMContentLoaded', function() {
        // Attempt to auto-play audio (this might be blocked by browsers)
        initAudio();
    });
    
    // Ensure we can play after user interaction if autoplay is blocked
    document.body.addEventListener('click', function() {
        if (!isPlaying && !bgMusic.error) {
            initAudio();
        }
    }, { once: true });

    // Memory Carousel
    const carousel = document.querySelector('.memory-carousel');
    const cards = document.querySelectorAll('.memory-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    
    // Show the number of cards in console for debugging
    console.log(`Total memory cards: ${cards.length}`);
    
    // Make sure carousel is properly initialized with all cards
    function initializeCarousel() {
        // Make sure the total number is displayed correctly
        document.getElementById('totalCardNum').textContent = cards.length;
        document.getElementById('currentCardNum').textContent = currentIndex + 1;
        
        // Set initial position
        updateCarousel();
        
        // Add indicator of which card is active
        updateActiveIndicator();
    }
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        console.log(`Showing card: ${currentIndex + 1} of ${cards.length}`);
        
        // Update the card counter in the UI
        document.getElementById('currentCardNum').textContent = currentIndex + 1;
        document.getElementById('totalCardNum').textContent = cards.length;
        
        updateActiveIndicator();
    }
    
    function updateActiveIndicator() {
        // Update some visual indication of which card is active (optional)
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active-card');
            } else {
                card.classList.remove('active-card');
            }
        });
    }
    
    prevBtn.addEventListener('click', function() {
        console.log('Previous button clicked');
        currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', function() {
        console.log('Next button clicked');
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });
    
    // Initialize the carousel
    initializeCarousel();
    
    // Set interval for auto-sliding (every 7 seconds - increased from 5 seconds)
    const carouselInterval = setInterval(() => {
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    }, 7000);
    
    // Clear interval on manual interaction
    prevBtn.addEventListener('click', () => clearInterval(carouselInterval));
    nextBtn.addEventListener('click', () => clearInterval(carouselInterval));

    // Typewriter Effect
    const typewriterElement = document.getElementById('typewriter');
    const letterText = `Dear Priyaaa,

Today is your special day, and I wanted to make it as wonderful as you are. As the sun rises on your birthday, I hope it brings with it all the joy, love, and happiness you deserve.

On this birthday, I want you to know how much you mean to me. Your presence in my life is a gift I cherish every day. Your spirit, your smile, your soul – everything about you is beautiful.

tujhe yaad hai ? kunal tu me manashi charloet ashish tulip sonakshi, hmne milkr ek private gc bnaya tha aur usme hum sb late night bate krte the vn pr , songs gate the , aur kunal (usse kambal se bhar hi nhi nikalne dete uske ghrwale) but vo moments pr esa feel hota tha ki you all are not just random online friends you all are more than a family for me , like tumhare sath (especialy priyanka tere) sath hote hue kbhi litrally ek baar bhi unconfortable nervous ya introvert sa lga nhi every time we talked felt like homeee and i love our friendship bonds and uss sooooooo soooo sooo muchhhhhh

so meri kuch gltiya like flirting , zhut bolna , overprotective bnna , etc - esii meri kuch ch*tiya hrkto ke karn tujhe bhot bhot bhot zyada jhlena pda - mere karn tujhe apne bhaiya se daant pdi , mere karn tujhe hurt hua , aur bhi bhot kuch - but i swear mere kbhi bhi koi glt intention nhi the :( infact jb mujhe pta chla mere karn teri aur bhaiya ki ldai hogyi hai me tere bhaiya se baat krke usnhe sb smjhana chahta tha unhe btana chahta tha ki ye ldki kbhi apka trust nhi todegi and all , but yeah inhi kuch gltio ke karn i loosed my most precious person in my life (really ywrr you dont belive but ye likhte likhte aasu arhe hai) but i swear agr ek last chance mill gya to be your bestfriend again then kbhi bhi never ever tujhe hurt krunga litrally insta , youtube , snap hrr jgha ka pass deduga kbhiiii bhiii ek chiz bhi zhoot nhi bolunga aur meri life ki hrr ek chiz tujhe share krunga choti se choti baat bhi

ahemmm soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry soryy sorry sorry sorry !!!! plzzzzzzz ywr maaf krde plzz plzz plzzz , plzzz vapis aja ywrr litrally hrr ek din tujhe yaad krta huuu plzzz vapis ajaaaa maaf krde kbhi bhi tujhpr gussa nhi krunga and koi glt hrkt nhi krunga tu jesa cahe vesa rhunga bss vapis ajaa me apne one and only bsf ko bhot bhot bhot bhot bhotttt zyada miss kr rha huuuu

once again Happy Birthday priyaaaaa!!

your bsf shrayash,
❤️`;

    let typewriterIndex = 0;
    let typewriterInterval;

    function typeWriter() {
        if (typewriterIndex < letterText.length) {
            typewriterElement.innerHTML += letterText.charAt(typewriterIndex);
            typewriterIndex++;
            // Scroll to bottom of container while typing
            typewriterElement.scrollTop = typewriterElement.scrollHeight;
        } else {
            clearInterval(typewriterInterval);
        }
    }

    // Start typewriter effect when letter section is in view
    const letterSection = document.getElementById('letter');
    console.log('Letter section element:', letterSection);
    
    const letterObserver = new IntersectionObserver((entries) => {
        console.log('Letter section intersection observed:', entries[0].isIntersecting);
        entries.forEach(entry => {
            if (entry.isIntersecting && !typewriterInterval) {
                console.log('Starting typewriter effect');
                typewriterElement.innerHTML = ''; // Clear any existing content
                typewriterIndex = 0; // Reset index
                typewriterInterval = setInterval(typeWriter, 50);
            }
        });
    }, { threshold: 0.3 });

    letterObserver.observe(letterSection);

    // Surprise Button and Cake Cutting Feature
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseContent = document.getElementById('surpriseContent');
    const giftBox = surpriseContent ? surpriseContent.querySelector('.gift-box') : null;
    const cakeContainer = document.getElementById('cakeContainer');
    const knife = document.getElementById('knife');
    const cake = cakeContainer ? cakeContainer.querySelector('.cake') : null;
    const cakeSlice = document.getElementById('cakeSlice');
    const cakeMessage = document.getElementById('cakeMessage');
    const flame = cake ? cake.querySelector('.flame') : null;

    // Log elements to console for debugging
    console.log('Surprise elements:', { 
        surpriseBtn, 
        surpriseContent, 
        giftBox, 
        cakeContainer, 
        knife, 
        cake, 
        cakeSlice, 
        cakeMessage, 
        flame 
    });

    if (surpriseBtn && surpriseContent && giftBox && cakeContainer) {
        surpriseBtn.addEventListener('click', function() {
            console.log('Surprise button clicked!');
            surpriseContent.classList.remove('hidden');
            
            setTimeout(() => {
                giftBox.classList.add('open');
                createConfetti();
                
                // Show cake after gift opens
                setTimeout(() => {
                    cakeContainer.classList.remove('hidden');
                }, 2000);
            }, 500);
        });
    } else {
        console.error('Missing surprise elements:', { surpriseBtn, surpriseContent, giftBox, cakeContainer });
    }
    
    // Knife dragging functionality
    let isDragging = false;
    let hasSliced = false;
    let startX, startY;
    
    // Make sure knife element exists before adding listeners
    if (knife) {
        knife.addEventListener('mousedown', startDrag);
        knife.addEventListener('touchstart', handleTouchStart, { passive: false });
    } else {
        console.error('Knife element not found');
    }
    
    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        
        // Make sure knife is visible
        if (knife) knife.style.display = 'block';
        
        // Create a fake event to pass to startDrag
        const fakeEvent = { 
            clientX: touch.clientX, 
            clientY: touch.clientY,
            preventDefault: function() {}
        };
        
        startDrag(fakeEvent);
        
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', endDrag);
    }
    
    function handleTouchMove(e) {
        e.preventDefault();
        if (!isDragging || !knife) return;
        
        // Ensure knife is visible
        knife.style.display = 'block';
        
        const touch = e.touches[0];
        // Create a fake event object with the touch coordinates
        const fakeEvent = {
            clientX: touch.clientX,
            clientY: touch.clientY
        };
        
        moveDrag(fakeEvent);
    }
    
    function startDrag(e) {
        if (hasSliced || !knife || !cake) return;
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        console.log('Starting drag! Knife and cake available:', !!knife, !!cake);
        
        // Make sure knife is visible
        knife.style.display = 'block';
        
        // Get initial position
        const knifeRect = knife.getBoundingClientRect();
        const cakeRect = cake.getBoundingClientRect();
        
        // Set the knife initial position if not already set
        if (!knife.style.position || knife.style.position !== 'absolute') {
            knife.style.position = 'absolute';
            knife.style.left = knifeRect.left + 'px';
            knife.style.top = knifeRect.top + 'px';
        }
        
        // Store the offset of the knife
        knife.dataset.offsetX = startX - knifeRect.left;
        knife.dataset.offsetY = startY - knifeRect.top;
        
        // Add event listeners for movement and end of drag
        document.addEventListener('mousemove', moveDrag);
        document.addEventListener('mouseup', endDrag);
        
        // Change cursor style
        knife.style.cursor = 'grabbing';
        
        // Prevent default to avoid browser's default drag behavior
        e.preventDefault();
    }
    
    function moveDrag(e) {
        if (!isDragging || !knife || !cake) return;
        
        const x = e.clientX - knife.dataset.offsetX;
        const y = e.clientY - knife.dataset.offsetY;
        
        // Update knife position
        knife.style.left = x + 'px';
        knife.style.top = y + 'px';
        knife.style.position = 'absolute';
        
        // Check if knife is over the cake
        const knifeRect = knife.getBoundingClientRect();
        const cakeRect = cake.getBoundingClientRect();
        
        // Check collision
        if (knifeRect.right > cakeRect.left && knifeRect.left < cakeRect.right &&
            knifeRect.bottom > cakeRect.top && knifeRect.top < cakeRect.bottom) {
            
            // If knife is making a slicing motion (moving downward)
            if (e.clientY > startY + 50) { // Must move at least 50px downward
                cutCake();
            }
        }
    }
    
    function endDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', moveDrag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', endDrag);
        
        // Reset knife cursor if it exists
        if (knife) knife.style.cursor = 'grab';
    }
    
    function cutCake() {
        if (hasSliced || !flame || !cakeSlice || !cakeMessage) return;
        hasSliced = true;
        
        console.log('Cutting cake!'); // Debug log
        
        // Blow out the candle
        if (flame) flame.style.opacity = '0';
        
        // Show the slice - make sure to use classList instead of style.display
        if (cakeSlice) {
            cakeSlice.classList.remove('hidden');
            cakeSlice.style.display = 'block';
            console.log('Cake slice should be visible now');
        }
        
        // Animate the slice coming out
        setTimeout(() => {
            // Create the cake slice animation
            if (cakeSlice) {
                cakeSlice.style.animation = 'slideOut 1s forwards';
                console.log('Animating cake slice');
            }
            
            // Add the animation style for the slice
            const sliceStyle = document.createElement('style');
            sliceStyle.innerHTML = `
                @keyframes slideOut {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(100px); }
                }
            `;
            document.head.appendChild(sliceStyle);
            
            // Show birthday message
            setTimeout(() => {
                if (cakeMessage) {
                    cakeMessage.classList.add('visible');
                    cakeMessage.classList.remove('hidden');
                    console.log('Showing cake message');
                }
                createConfetti(); // More confetti for the slice
            }, 1000);
        }, 500);
    }

    // Confetti effect
    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 5 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
            
            confettiContainer.appendChild(confetti);
        }

        setTimeout(() => {
            confettiContainer.remove();
        }, 6000);
    }

    // Add confetti style
    const confettiStyle = document.createElement('style');
    confettiStyle.innerHTML = `
        .confetti-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        }
        .confetti {
            position: absolute;
            top: -10px;
            width: 10px;
            height: 10px;
            transform: rotateZ(45deg);
            animation: confetti-fall 5s linear forwards;
        }
        @keyframes confetti-fall {
            0% {
                top: -10px;
                transform: translateX(0) rotateZ(45deg);
            }
            100% {
                top: 100vh;
                transform: translateX(100px) rotateZ(225deg);
            }
        }
    `;
    document.head.appendChild(confettiStyle);

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Stars animation for ending section
    const starCanvas = document.getElementById('star-canvas');
    const starCtx = starCanvas.getContext('2d');

    function resizeStarCanvas() {
        starCanvas.width = window.innerWidth;
        starCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeStarCanvas);
    resizeStarCanvas();

    const stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * starCanvas.width,
            y: Math.random() * starCanvas.height,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.1
        });
    }

    function animateStars() {
        starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
        
        starCtx.fillStyle = '#ffffff';
        stars.forEach(star => {
            starCtx.beginPath();
            starCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            starCtx.fill();
            
            star.y -= star.speed;
            if (star.y < 0) {
                star.y = starCanvas.height;
                star.x = Math.random() * starCanvas.width;
            }
        });
        
        requestAnimationFrame(animateStars);
    }

    animateStars();

    // Show/hide scroll indicator based on scroll position
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
    
    // Video Player Functionality
    const videoOverlay = document.getElementById('videoOverlay');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (videoOverlay && videoPlayer) {
        videoOverlay.addEventListener('click', function() {
            // Hide the overlay
            videoOverlay.style.opacity = '0';
            videoOverlay.style.visibility = 'hidden';
            
            // Show the video player
            videoPlayer.classList.remove('hidden');
            
            // Clear the current content first
            videoPlayer.innerHTML = '';
            
            // Create a video element for the locally uploaded video
            const videoElement = document.createElement('video');
            videoElement.src = '/static/videos/singing.mp4'; // Path to your uploaded video
            videoElement.controls = true; // Add playback controls
            videoElement.autoplay = true; // Start playing automatically
            videoElement.style.width = '100%';
            videoElement.style.height = '100%';
            videoElement.style.borderRadius = '10px';
            videoElement.style.objectFit = 'contain'; // Changed from 'cover' to 'contain' to avoid cropping
            
            // Add the video element to the player container
            videoPlayer.appendChild(videoElement);
            
            // Add a fallback message in case the video doesn't load
            videoElement.onerror = function() {
                videoPlayer.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <p style="color: #c660ff; font-size: 1.2rem; margin-bottom: 15px;">
                            <i class="fas fa-exclamation-circle"></i> The video could not be loaded
                        </p>
                        <p>Please make sure you've uploaded a video file named "singing.mp4" to the static/videos folder.</p>
                    </div>
                `;
            };
            
            // Message when video ends
            videoElement.onended = function() {
                // Create a replay button that appears after the video ends
                const replayBtn = document.createElement('button');
                replayBtn.innerHTML = '<i class="fas fa-redo"></i> Watch Again';
                replayBtn.style.position = 'absolute';
                replayBtn.style.top = '50%';
                replayBtn.style.left = '50%';
                replayBtn.style.transform = 'translate(-50%, -50%)';
                replayBtn.style.padding = '12px 24px';
                replayBtn.style.background = 'var(--accent-color)';
                replayBtn.style.color = 'white';
                replayBtn.style.border = 'none';
                replayBtn.style.borderRadius = '30px';
                replayBtn.style.cursor = 'pointer';
                replayBtn.style.fontSize = '1rem';
                replayBtn.style.zIndex = '5';
                replayBtn.style.boxShadow = '0 4px 10px rgba(198, 96, 255, 0.5)';
                
                replayBtn.onclick = function() {
                    videoElement.currentTime = 0;
                    videoElement.play();
                    this.remove();
                };
                
                videoPlayer.appendChild(replayBtn);
            };
            
            /* 
            // Option 2: For YouTube videos
            // Replace the video ID in the src with your YouTube video ID
            // For example, if your URL is https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
            
            const youtubeEmbed = document.createElement('iframe');
            youtubeEmbed.width = '100%';
            youtubeEmbed.height = '100%';
            youtubeEmbed.src = 'https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID?autoplay=1';
            youtubeEmbed.frameBorder = '0';
            youtubeEmbed.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            youtubeEmbed.allowFullscreen = true;
            youtubeEmbed.style.borderRadius = '10px';
            
            // Clear the current content
            videoPlayer.innerHTML = '';
            
            // Add the YouTube embed
            videoPlayer.appendChild(youtubeEmbed);
            */
            
            /* 
            // Option 3: For Google Drive videos
            // 1. Get the shareable link from Google Drive
            // 2. Extract the file ID from the URL (it's a long string of letters and numbers)
            // 3. Replace YOUR_GOOGLE_DRIVE_FILE_ID with that ID
            
            const googleDriveEmbed = document.createElement('iframe');
            googleDriveEmbed.width = '100%';
            googleDriveEmbed.height = '100%';
            googleDriveEmbed.src = 'https://drive.google.com/file/d/1Q-o-nh5A_r6nB27k-P3entpziz3Ts519/preview';
            googleDriveEmbed.frameBorder = '0';
            googleDriveEmbed.allow = 'autoplay';
            googleDriveEmbed.style.borderRadius = '10px';
            
            // Clear the current content
            videoPlayer.innerHTML = '';
            
            // Add the Google Drive embed
            videoPlayer.appendChild(googleDriveEmbed);
            */
        });
    }
});


