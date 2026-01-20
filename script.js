document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SMOOTH SCROLL FOR CTA BUTTON
    const viewTimetableBtn = document.querySelector('.cs-button-solid[href="#contact"]');
    
    // Change href to scroll to cards section (your "timetable" equivalent)
    if (viewTimetableBtn) {
        viewTimetableBtn.href = "#cards";
        viewTimetableBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll to service cards (your programs section)
            const cardsSection = document.querySelector('.cs-card-group');
            if (cardsSection) {
                cardsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // 2. ADD SECONDARY CTA BUTTON
    const heroContent = document.querySelector('#hero-1619 .cs-content');
    if (heroContent) {
        const secondaryBtn = document.createElement('a');
        secondaryBtn.href = "#contact";
        secondaryBtn.className = 'cs-button-solid outline';
        secondaryBtn.style.cssText = 'margin-left: 1rem; background: transparent; border: 2px solid var(--primary);';
        secondaryBtn.textContent = 'VIEW TIMETABLE';
        
        // Add smooth scroll to contact form (when you add it)
        secondaryBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // This will scroll to your future contact section
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
        
        // Insert after first button
        const firstBtn = heroContent.querySelector('.cs-button-solid');
        if (firstBtn) {
            firstBtn.insertAdjacentElement('afterend', secondaryBtn);
        }
    }
    
    // 3. ACTIVE NAVIGATION HIGHLIGHTING (when you add nav)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    function highlightNavigation() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // 4. CARD INTERACTION ENHANCEMENT
    const serviceCards = document.querySelectorAll('#hero-1619 .cs-item');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 5. PERFORMANCE: LAZY LOAD BACKGROUND IMAGES
    const bgPicture = document.querySelector('#hero-1619 .cs-background picture');
    if (bgPicture) {
        const sources = bgPicture.querySelectorAll('source');
        const img = bgPicture.querySelector('img');
        
        // Add loading="lazy" to all images
        sources.forEach(source => {
            if (source.srcset) {
                source.setAttribute('loading', 'lazy');
            }
        });
        if (img) {
            img.setAttribute('loading', 'lazy');
        }
    }
    
    console.log('🥊 DEMONS MMA JavaScript loaded successfully!');
});
// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}