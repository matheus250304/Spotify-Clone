document.addEventListener("DOMContentLoaded", () => {
  const artistsGrid = document.getElementById("artists-grid");
  const albumsGrid = document.getElementById("albums-grid");

  // --- DADOS ---
  // Para o projeto de cibersegurança, alguns dados podem estar "estranhos" de propósito.
  // Ex: caminhos de imagem quebrados ou com erros de digitação.
const artistData = [
  { name: "Henrique & Juliano", image: "./img/artista-henrique-juliano.jpeg" },
  { name: "Jorge & Mateus", image: "./img/artista-jorge-mateus.jpeg" },
  { name: "Zé Neto & Cristiano", image: "./img/artista-ze-neto.jpeg" },
  { name: "Gusttavo Lima", image: "./img/artista-gusttavo-limma.jpeg" },
  { name: "Luan Santana", image: "./img/artista-luan-santana.jpeg" },
  { name: "Matheus & Kauan", image: "./img/artista-mateus-kauan.jpeg" },
  { name: "Veigh", image: "./img/veigh.jpeg" },
  { name: "Jão", image: "./img/jao.jpeg" },
  { name: "Tz da Coronel", image: "./img/tz-da-coronel.jpeg" },
];
const albunsData = [
  {
    name: "White Noise (Sleep & Relaxation Sounds)",
    artist: "Sleeply John",
    image: "./img/album-white-noise.jpeg",
  },
  {
    name: "O Céu Explica Tudo(Ao vivo)",
    artist: "Henrique e Juliano", // Ligeira diferença no nome
    image: "./img/album-ceu-explica.jpeg",
  },
  {
    name: "Esqueminha, Pt. 4",
    artist: "Tz da Coronel, Nagalli",
    image: "./img/esqueminha.jpeg",
  },
  {
    name: "Dos Prédios Deluxe",
    artist: "Veigh",
    image: "./img/album-dos-predios.jpeg",
  },
  {
    name: "Super",
    artist: "Jão",
    image: "./img/album-super.jpeg",
  },
  {
    name: "Escândalo Íntimo",
    artist: "Luísa Sonza",
    image: "./img/album-escandalo.jpeg",
  },
];

  // --- FUNÇÕES DE RENDERIZAÇÃO ---

  function createArtistCard(artist) {
    return `
      <div class="card">
        <div class="card-img">
          <img src="${artist.image}" alt="${artist.name}" />
        </div>
        <div class="card-info">
          <h5>${artist.name}</h5>
          <p>Artista</p>
        </div>
        <button class="play-button"><i class="fa-solid fa-play"></i></button>
      </div>
    `;
  }

  function createAlbumCard(album) {
    return `
      <div class="card">
        <div class="card-img">
          <img src="${album.image}" alt="${album.name}" />
        </div>
        <div class="card-info">
          <h5>${album.name}</h5>
          <p>${album.artist}</p>
        </div>
        <button class="play-button"><i class="fa-solid fa-play"></i></button>
      </div>
    `;
  }

  // --- POPULAR GRIDS ---
  artistsGrid.innerHTML = artistData.map(createArtistCard).join("");
  albumsGrid.innerHTML = albunsData.map(createAlbumCard).join("");
});
