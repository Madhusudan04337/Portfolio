// Navigation toggle
const navToggle = document.getElementById("navToggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close menu when clicking on a nav link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Back to top button
const backToTopBtn = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("active")
  } else {
    backToTopBtn.classList.remove("active")
  }
})

// Portfolio filter
const filterBtns = document.querySelectorAll(".filter-btn")
const portfolioItems = document.querySelectorAll(".portfolio-item")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"))

    // Add active class to clicked button
    btn.classList.add("active")

    // Get filter value
    const filterValue = btn.getAttribute("data-filter")

    // Filter portfolio items
    portfolioItems.forEach((item) => {
      if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })
  })
})

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-progress")
const skillSection = document.querySelector(".skills")

const animateSkills = () => {
  const sectionPos = skillSection.getBoundingClientRect().top
  const screenPos = window.innerHeight / 1.3

  if (sectionPos < screenPos) {
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("style").match(/width: (\d+)%/)[1]
      bar.style.width = "0%"
      setTimeout(() => {
        bar.style.width = `${width}%`
      }, 100)
    })

    // Remove event listener after animation
    window.removeEventListener("scroll", animateSkills)
  }
}

window.addEventListener("scroll", animateSkills)

// Form submission
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  // Here you would typically send the form data to a server
  // For demonstration, we'll just log it to console
  console.log({ name, email, subject, message })

  // Reset form
  contactForm.reset()

  // Show success message (you can replace this with a proper notification)
  alert("Message sent successfully!")
})

// Add active class to nav links based on scroll position
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-menu a")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active")
    }
  })
})

// Certification tabs functionality
const tabButtons = document.querySelectorAll('.certification-tabs-list button');
const tabContents = document.querySelectorAll('.certification-grid');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Show corresponding content
    const tabId = button.getAttribute('data-tab');
    document.getElementById(`${tabId}-tab`).classList.add('active');
  });
});