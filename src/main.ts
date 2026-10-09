import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="logo">Spark ⚡</div>
    <div class="nav-links">
      <a href="#vision">Vision</a>
      <a href="#mission">Mission</a>
      <a href="#tenders">Tenders</a>
      <a href="#hiring" class="btn-hire">Hiring</a>
    </div>
  </nav>

  <header class="hero">
    <h1>Igniting Ideas into Reality</h1>
    <p>Welcome to Spark. We build the future, one connection at a time.</p>
    <a href="#vision" class="btn-primary">Discover Our Purpose</a>
  </header>

  <section id="vision" class="section">
    <h2>Our Vision</h2>
    <div class="card">
      <p>To be the global catalyst that transforms ambitious concepts into sustainable, world-changing realities.</p>
    </div>
  </section>

  <section id="mission" class="section">
    <h2>Our Mission</h2>
    <div class="card">
      <p>To empower businesses and communities by delivering innovative solutions, fostering integrity, and creating lasting value through every project we undertake.</p>
    </div>
  </section>

  <section id="tenders" class="section highlight-section">
    <h2>Tender Attachments</h2>
    <div class="card">
      <p>We are committed to transparency and fair procurement. Please find our latest tender documents below.</p>
      <a href="#" class="btn-secondary">Download Latest Tender (PDF)</a>
    </div>
  </section>

  <section id="hiring" class="section">
    <h2>Join Our Team</h2>
    <div class="card">
      <p>We are always looking for passionate individuals to help us spark change. Check out our open roles!</p>
      <ul class="jobs-list">
        <li><strong>Senior Developer</strong> - Remote <a href="#">Apply Now</a></li>
        <li><strong>Project Manager</strong> - Nairobi <a href="#">Apply Now</a></li>
        <li><strong>UI/UX Designer</strong> - Hybrid <a href="#">Apply Now</a></li>
      </ul>
    </div>
  </section>

  <footer>
    <p>&copy; 2026 Spark. All rights reserved.</p>
  </footer>
`