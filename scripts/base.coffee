getDocHeight = ->
    D = document
    Math.max(
        Math.max D.body.scrollHeight, D.documentElement.scrollHeight
        Math.max D.body.offsetHeight, D.documentElement.offsetHeight
        Math.max D.body.clientHeight, D.documentElement.clientHeight
    )

canvas = null

if canvas.getContext and canvas.addEventListener and window.innerWidth > 1440
    createCanvas()

createCanvas = ->
    canvas = document.createElement 'canvas'
    canvas.width = window.innerWidth - 1200
    canvas.height = getDocHeight() + 100
    canvas.style[attr] = val for attr, val of {
        display: 'block'
        position: 'absolute'
        top: 0
        right: 0
    }
    document.body.appendChild canvas

    ctx = canvas.getContext '2d'
    ctx.fillStyle = '#543'
    ctx.globalAlpha = 0.1
    ctx.globalCompositeOperation = 'lighter'

    pos = [0,0]
    running = true

    canvas.addEventListener 'mousemove', (e) ->
        pos = [e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop]

    canvas.addEventListener 'mouseover', (e) -> running = true
    canvas.addEventListener 'mouseout', (e) -> running = false

    setInterval ->
        return if not running
        [x,y] = pos
        for i in [0..2]
            offsetX = ~~(i * Math.random() * 15) - (i*15/2)
            offsetY = ~~(i * Math.random() * 15) - (i*15/2)
            ctx.beginPath()
            ctx.arc x + offsetX, y + offsetY, ~~(Math.random()*16), 0, (Math.PI*2), true
            ctx.closePath()
            ctx.fill()
    , 1000/45

window.onresize = ->
    if window.innerHeight > 1440
        if not canvas?
            createCanvas()
        else if canvas.style.display is 'none'
            canvas.style.display 'block'
    else if canvas? and canvas.style.display is 'block'
        canvas.style.display = 'none'