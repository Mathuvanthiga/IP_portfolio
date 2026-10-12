<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Contact | Mathuvanthiga</title>

<link rel="stylesheet" href="css/style.css">

</head>


<body>


<header>

<nav class="navbar">

<div class="logo">SVM</div>

<ul class="nav-links">

<li><a href="index.html">Home</a></li>
<li><a href="about.html">About</a></li>
<li><a href="academics.html">Academics</a></li>
<li><a href="projects.html">Projects</a></li>
<li><a href="achievements.html">Achievements</a></li>
<li><a href="skills.html">Skills</a></li>
<li><a href="internships.html">Internships</a></li>
<li><a href="contact.php" class="active">Contact</a></li>

</ul>

<button id="themeButton">🌙</button>

</nav>

</header>


<main class="page">


<section class="page-heading">

<p>LET'S CONNECT</p>

<h1>Contact Me</h1>

</section>


<section class="contact-container">


<div class="contact-info">

<h2>Get In Touch</h2>

<p>
Have a project idea, opportunity or message?
Feel free to contact me through this form.
</p>


<div class="contact-item">

<strong>📧 Email</strong>

<p>mathuvanthiga@example.com</p>

</div>


<div class="contact-item">

<strong>💻 GitHub</strong>

<p>github.com</p>

</div>


<div class="contact-item">

<strong>🔗 LinkedIn</strong>

<p>linkedin.com</p>

</div>

</div>



<div class="contact-form-box">

<h2>Send a Message</h2>


<form id="contactForm"
      action="php/contact_process.php"
      method="POST">


<label for="name">Name</label>

<input
type="text"
id="name"
name="name"
placeholder="Enter your name"
required
>


<label for="email">Email</label>

<input
type="email"
id="email"
name="email"
placeholder="Enter your email"
required
>


<label for="subject">Subject</label>

<input
type="text"
id="subject"
name="subject"
placeholder="Enter subject"
required
>


<label for="message">Message</label>

<textarea
id="message"
name="message"
rows="6"
placeholder="Enter your message"
required
></textarea>


<button type="submit" class="btn">
Send Message
</button>


<p id="formMessage"></p>


</form>

</div>


</section>

</main>


<footer>

<p>© 2026 S. V. Mathuvanthiga</p>

</footer>


<script src="js/script.js"></script>

</body>

</html>