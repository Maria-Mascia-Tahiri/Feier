var c=document.querySelector('body')
var konfetti=[]
for (var i=0; i<75; i++) {
  var e={}
  e.element=document.createElement('div')
  e.x=c.clientWidth/2-200+Math.random()*400
  e.y=Math.random()*100 //c.clientHeight
  e.vh=-3+Math.random()
  e.vx=(Math.random()-0.5)*2
  e.height=5+Math.random()*7
  e.width=7+Math.random()*10
  e.color='hsl(' + (Math.random()*360) + ', 100%, 50%)'
  konfetti.push(e)
}

konfetti.forEach(function(e) {
  e.element.style.top=e.y+'px'
  e.element.style.left=e.x+'px'
  e.element.style.background=e.color
  e.element.style.width=e.width+'px'
  e.element.style.height=e.height+'px'
  e.element.style.animationDelay=(Math.random()*1000)+'ms'
  e.element.classList.add('konfetti')
  c.appendChild(e.element)
})


window.setInterval(function() {
  konfetti.forEach(function(e) {
  e.y+=e.vh
  e.x+=e.vx
  e.vh+=0.08
  if (e.y>c.clientHeight) {
    e.x=c.clientWidth/2-200+Math.random()*400
    e.y=Math.random()*50 //c.clientHeight
    e.vh=1+Math.random()
    e.vx=(Math.random()-0.5)*2
    e.height=5+Math.random()*7
    e.width=7+Math.random()*10
    e.color='hsl(' + (Math.random()*360) + ', 100%, 50%)'
    e.element.style.top=e.y+'px'
    e.element.style.left=e.x+'px'
    e.element.style.background=e.color
    e.element.style.width=e.width+'px'
    e.element.style.height=e.height+'px'
    e.element.style.animationDelay=(Math.random()*1000)+'ms'
   } else {
    e.element.style.top=e.y+'px'
    e.element.style.left=e.x+'px'
   }

})
}, 0)