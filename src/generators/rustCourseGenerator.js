export default function rustCourseGenerator (episode, topic, assets) {
  return `
    <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            font-weight: 500;
          }
          body {
            position: relative;
            width: 1280px;
            height: 720px;
            background-color: #0a0a0a;
            display: flex; 
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }
          .liveContainer {
            position: absolute;
            top: 30px; 
            left: 30px;
            width: fit-content;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            border-radius: 10px;
            padding: 10px 30px;
            background-color: #e43717;
            gap: 20px; 
          }
          .dot {
            height: 25px;
            width: 25px;
            border-radius: 50%;
            background-color: #fff;
          }
          .live {
            font-size: 2.3rem;
            color: #fff;
          }
          .title {
            font-size: 4rem;
            color: #fff;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .subtitle {
            margin-top: 100px;
            font-size: 3rem;
            color: #fff;
            font-weight: 600;
          }
          .topicContainer {
            position: relative;
            display: grid; 
            place-items: center;            
            padding: 20px 100px; 
            overflow: visible; 
          }
          .topic {
            font-size: 6.5rem;
            color: #fff;
            font-weight: 600;
            white-space: break-spaces;
            text-align: center;
            background-color: #0042ad;
            border-radius: 20px;
            padding: 20px 50px; 
          }
          .ferris {
            position: absolute;
            height: 150px;
            width: auto; 
            top: -50px; 
            right: 30px; 
            rotate: 35deg;
          }
          .ferris2 {
            position: absolute;
            height: 300px;
            width: auto; 
            bottom: -120px; 
            left: -120px; 
            rotate: -20deg;
          }
          .lines {
            position: absolute;
            height: 100vh; 
            width: 100vw;
            z-index: -1;
          }
          .episode {
            position: absolute;
            top: 30px;
            right: 30px;
            font-size: 6.3rem;
            font-weight: 600;
            line-height: 84.8px;  
            color: #fff;
          }
        </style>
      </head>
      <body>
        <div class="liveContainer">
          <div class="dot"></div>
          <p class="live">Live</p>
        </div>
        <h2 class="subtitle">Aprendiendo</h2>
        <h1 class="title">Rust desde 0</h1>
        <div class="topicContainer">
          <h2 class="topic">${topic}</h2>
          <img src="${assets}/ferris.png" class="ferris"/>
        </div>
        <img src="${assets}/ferris.png" class="ferris2"/>
        <img src="${assets}/lines.png" class="lines"/>
        <p class="episode">#${episode}</p>
      </body>
    </html>
  `
}
