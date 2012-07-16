# DOM Helpers
$ = (sel) -> Array::slice.call document.querySelectorAll sel
$$ = (sel) -> document.querySelector sel

# XHR Request helper
class Request
    constructor: (method, url, callback, data) ->
        @xhr = @createXHR()
        @send.apply @, arguments

    createXHR: ->
        tries = [
            -> new XMLHttpRequest
            -> new ActiveXObject "Msxml2.XMLHTTP"
            -> new ActiveXObject "Msxml3.XMLHTTP"
            -> new ActiveXObject "Microsoft.XMLHTTP"
        ]
        for fn in tries
            try return fn()
        return false

    send: (method, url, callback, data) ->
        @xhr.open method, url, true
        if data
            @xhr.setRequestHeader 'Content-type', 'application/x-www-form-urlencoded'

        @xhr.onreadystatechange = =>
            if @xhr.readyState is 4 and @xhr.status is 200
                callback @xhr.responseText

        @xhr.send data

# Drawing
# getDocHeight = ->
#     D = document
#     Math.max(
#         Math.max D.body.scrollHeight, D.documentElement.scrollHeight
#         Math.max D.body.offsetHeight, D.documentElement.offsetHeight
#         Math.max D.body.clientHeight, D.documentElement.clientHeight
#     )

# createCanvas = ->
#     canvas = document.createElement 'canvas'
#     canvas.width = window.innerWidth - 1200
#     canvas.height = getDocHeight() + 100
#     canvas.style[attr] = val for attr, val of {
#         display: 'block'
#         position: 'absolute'
#         top: 0
#         right: 0
#     }
#     document.body.appendChild canvas
#     return canvas

# drawingBoard = (canvas) ->
#     ctx = canvas.getContext '2d'
#     ctx.fillStyle = '#543'
#     ctx.globalAlpha = 0.1
#     ctx.globalCompositeOperation = 'lighter'

#     pos = [-50,-50]
#     running = true

#     canvas.addEventListener 'mousemove', (e) ->
#         pos = [e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop]

#     canvas.addEventListener 'mouseover', (e) -> running = true
#     canvas.addEventListener 'mouseout', (e) -> running = false

#     setInterval ->
#         return if not running
#         [x,y] = pos
#         for i in [0..2]
#             offsetX = ~~(i * Math.random() * 15) - (i*15/2)
#             offsetY = ~~(i * Math.random() * 15) - (i*15/2)
#             ctx.beginPath()
#             ctx.arc x + offsetX, y + offsetY, ~~(Math.random()*16), 0, (Math.PI*2), true
#             ctx.closePath()
#             ctx.fill()
#     , 1000/45

# canvas = createCanvas()

# if canvas.getContext and canvas.addEventListener and window.innerWidth > 1440
#     drawingBoard(canvas)
# else
#     canvas.parentNode.removeChild canvas

# window.onresize = ->
#     if window.innerHeight > 1440
#         if not canvas?
#             createCanvas()
#         else if canvas.style.display is 'none'
#             canvas.style.display 'block'
#     else if canvas? and canvas.style.display is 'block'
#         canvas.style.display = 'none'

# Tag functionality
if $$('.tag-list')
    posts = []
    new Request 'GET', '/search.json', (data) ->
        posts = JSON.parse data
        if currentTag = location.hash.split('#!')[1]
            displayTag currentTag

displayTag = (tag) ->

    res = $$('.results')
    if res? then res.parentNode.removeChild res

    return if not tag

    results = posts.filter (post) ->
        post and tag in post.tags
    items = results.map (post) ->
        """
        <li><a href="#{post.url}">#{post.title}</a></li>
        """
    $$('#main').innerHTML += """
        <div class="results">
            <h3>#{tag}</h3>
            <ul>
                #{items.join('')}
            </ul>
        </div>
    """
    return

window.addEventListener 'hashchange', ->
    displayTag location.hash.split('#!')[1]
