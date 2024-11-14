document.addEventListener("DOMContentLoaded", () => {
    // Check when each section is in view and apply fade-in class
    const sections = document.querySelectorAll('.fade-in');
    
    const isInView = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };
    
    const handleScroll = () => {
      sections.forEach(section => {
        if (isInView(section)) {
          section.classList.add('fade-in-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();  // To check on page load
  });
  