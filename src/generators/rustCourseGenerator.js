export default function rustCourseGenerator (episode, topic, assets) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <base href="/"/>
</head>
<body>
  <h1>Episode ${episode}</h1>
  <img src="D:\dev\node\express\banners-service\public\rust-course\ferris.png"/>
</body>
</html>
  `
}
