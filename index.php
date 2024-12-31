
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Portfolio Landing Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="overlay first"></div>
    <div class="overlay second"></div>
    <div class="overlay third"></div>

    <header class="l-header">
        <nav class="nav bd-grid">
            <div>
                <a href="#" class="nav-logo">Porto <span>Nih</span></a>
            </div>

            <div class="nav-menu" id="nav-menu">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="#work" class="nav-link">Work</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                </ul>
            </div>

            <div class="nav-toggle" id="nav-toggle">
                <ion-icon name="menu"></ion-icon>
            </div>
        </nav>
    </header>

    <main id="home" class="l-main bd-grid">
        <div class="home">
            <div class="home-information">
                <span class="home-pressent anime-text">Hello, My name is</span>
                <h1 class="home-title anime-text">Aisha Aptanta Zain</h1>
                <span class="home-skill anime-text">Profesi bidangmu</span>

                <div>
                    <a href="#" class="home-button anime-text">DOWNLOAD CV</a>
                </div>
            </div>

            <div class="home-img">
                <img src="https://i.pinimg.com/736x/78/73/00/787300ae55f1d12bac61de67f8654b94.jpg" alt="image">
            </div>

            <div class="home-social">
                <ion-icon name="logo-facebook" class="home-social-icon"></ion-icon>
                <ion-icon name="logo-instagram" class="home-social-icon"></ion-icon>
                <ion-icon name="logo-twitter" class="home-social-icon"></ion-icon>
            </div>
        </div>


       


          
    </main>


    <section id="about" class="explore-section sec2">
        <div class="container">
          <div class="two-side-section">
            <div class="info">
              <p class="sub">#AboutMe</p>
              <h2 class="section-title">About Me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quasi magni saepe architecto autem suscipit ea vero in fugit
                neque voluptatum odit sit incidunt atque dolores voluptate
                reprehenderit a placeat animi dolore modi, iure repellat? Sed
                harum laboriosam corporis eius explicabo facilis, optio quisquam
                nostrum reiciendis voluptatum, incidunt saepe fugit.
              </p>
              <a href="#" class="btn btn-primary">Explore</a>
            </div>

            <img src="https://i.postimg.cc/bYKm6K7g/call-to-action.jpg" class="section-img" alt="" />
          </div>
        </div>
      </section>






    <main id="work" class="l-main bd-grid">

      <div style="margin-bottom: 50px;" class="home-information">
        <h2 class="section-heading">Work</h2>
        <p class="section-subheading">Ini adalah kumpulan karya terbaik saya, hasil dari dedikasi, kreativitas, dan usaha yang terus saya kembangkan.</p>
    </div>



        <ul id="og-grid" class="og-grid">
  
            <li>
              <a href="#" data-largesrc="https://i.pinimg.com/736x/6f/6c/82/6f6c82855e0407ed01d985b39b83abba.jpg" data-title="Nama Karya Ilmiah lah contoh" data-category-names="nama kategori" data-category-slugs="heavy-civil|deep-foundations|marine" data-owner="Deskripsi terserah" data-date="December 2024" data-location="Deskripsi terserah" data-contractor="Deskripsi terserah" data-value="Deskripsi terserah" data-description="This is a project description.">
                <div class="project-roll-item" style="background: url('https://i.pinimg.com/736x/33/2e/0d/332e0d5642e5e105448a08e28b08fa53.jpg') no-repeat center center; background-size: cover;">
                  <h4 class="project-info">Coba Klik<br> ( contoh karya )</h4>
                </div>
              </a>
            </li>
            
            <li>
              <a href="#" data-largesrc="https://i.pinimg.com/736x/53/23/dc/5323dce17f2d164ab6dc270277937536.jpg" data-title="Nama Karya Ilmiah lah contoh" data-category-names="nama kategori" data-category-slugs="heavy-civil|deep-foundations|marine" data-owner="Deskripsi terserah" data-date="December 2024" data-location="Deskripsi terserah" data-contractor="Deskripsi terserah" data-value="Deskripsi terserah" data-description="This is a project description.">
                <div class="project-roll-item" style="background: url('https://i.pinimg.com/736x/68/69/65/686965edfc4b6725b83c6c9d46c38b84.jpg') no-repeat center center; background-size: cover;">
                  <h4 class="project-info">Coba Klik<br> ( contoh karya )</h4>
                </div>
              </a>
            </li>

            <li>
              <a href="#" data-largesrc="https://i.pinimg.com/736x/a6/46/13/a64613aeddc71a8d7cade7c04cd70c0e.jpg" data-title="Nama Karya Ilmiah lah contoh" data-category-names="nama kategori" data-category-slugs="heavy-civil|deep-foundations|marine" data-owner="Deskripsi terserah" data-date="December 2024" data-location="Deskripsi terserah" data-contractor="Deskripsi terserah" data-value="Deskripsi terserah" data-description="This is a project description.">
                <div class="project-roll-item" style="background: url('https://i.pinimg.com/736x/04/27/d3/0427d31c138585145ac7220201fc0b36.jpg') no-repeat center center; background-size: cover;">
                  <h4 class="project-info">Coba Klik<br> ( contoh karya )</h4>
                </div>
              </a>
            </li>
            
          
          </ul>
    
    </main>






    <script>
        document.addEventListener("DOMContentLoaded", function () {
          // Tambahkan animasi scroll halus
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      </script>
      


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script  src="./script.js"></script>

    <script
    src="https://code.jquery.com/jquery-1.9.1.js"
    integrity="sha256-e9gNBsAcA0DBuRWbm0oZfbiCyhjLrI6bmqAl5o+ZjUA="
    crossorigin="anonymous"></script>

    <script>
        $(function() {
        Grid.init();
        });
    </script>
        <script  src="./sec2.js"></script>
</body>
</html>
<!-- partial -->



