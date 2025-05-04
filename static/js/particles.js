document.addEventListener('DOMContentLoaded', function() {
    // Heart particles canvas
    const heartCanvas = document.getElementById('heart-particles');
    const heartCtx = heartCanvas.getContext('2d');

    // Set canvas size
    function resizeHeartCanvas() {
        heartCanvas.width = window.innerWidth;
        heartCanvas.height = window.innerHeight;
    }

    // Handle window resize
    window.addEventListener('resize', resizeHeartCanvas);
    resizeHeartCanvas();

    // Heart particle class
    class HeartParticle {
        constructor(canvas) {
            this.canvas = canvas;
            this.reset();
        }

        reset() {
            this.x = Math.random() * this.canvas.width;
            this.y = this.canvas.height + 10;
            this.size = Math.random() * 15 + 5;
            this.speed = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.7 + 0.3;
            this.color = this.getRandomColor();
        }

        getRandomColor() {
            const colors = [
                '#ff85a2', // primary
                '#ffa5c4', // secondary
                '#c660ff', // accent
                '#ff9eb7'  // tertiary
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.y -= this.speed;
            
            // Add slight horizontal movement
            this.x += Math.sin(this.y / 30) * 0.5;
            
            // Reset if out of view
            if (this.y < -this.size) {
                this.reset();
            }
        }

        draw(ctx) {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            
            ctx.translate(this.x, this.y);
            
            // Draw heart shape
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, 0, 0, this.size);
            ctx.bezierCurveTo(this.size, 0, this.size / 2, -this.size / 2, 0, 0);
            ctx.fill();
            
            ctx.restore();
        }
    }

    // Create heart particles
    const hearts = [];
    const heartCount = Math.min(50, Math.floor(window.innerWidth / 20)); // Responsive count
    
    for (let i = 0; i < heartCount; i++) {
        hearts.push(new HeartParticle(heartCanvas));
        // Distribute hearts across the canvas initially
        hearts[i].y = Math.random() * heartCanvas.height;
    }

    // Animation loop
    function animateHearts() {
        heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
        
        hearts.forEach(heart => {
            heart.update();
            heart.draw(heartCtx);
        });
        
        requestAnimationFrame(animateHearts);
    }

    animateHearts();
});
