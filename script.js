data = [{
    'img1': 'Asset/poto.jpg',
    'img2': 'Asset/2.jpg',
    'img3': 'Asset/3.jpg',
    'title': 'Web-Commerce',
    'subtitle':'zenit',
    'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, eveniet porro! Repellendus ipsum dolorum aliquid id sequi fugiat similique iusto quaerat voluptates asperiores? Maxime possimus, voluptates tenetur corrupti iure neque?'
},{
    'img1': 'Asset/poto.jpg',
    'img2': 'Asset/2.jpg',
    'img3': 'Asset/3.jpg',
    'title': 'Web-Commerce',
    'subtitle':'zenit',
    'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, eveniet porro! Repellendus ipsum dolorum aliquid id sequi fugiat similique iusto quaerat voluptates asperiores? Maxime possimus, voluptates tenetur corrupti iure neque?'
}]

var container = document.querySelector('.container-project')
data.forEach(element => {
    container.innerHTML+=
    `<div class="project">
    <div class="img-project">
        <img src= "`+element.img3+`" alt="">
        <img src= "`+element.img2+`" alt="">
    </div>
    <div class="desc-project">
    <h1>Web ${element.title}</h1>
    <h2>${element.subtitle}</h2>
    <p>${element.desc}</p>
    </div>
    <button class="read-more">Read More</button>
    </div>
    `
});