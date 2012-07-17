# DOM Helpers
$ = (sel) -> Array::slice.call document.querySelectorAll sel
$$ = (sel) -> document.querySelector sel

# External
window.addEventListener 'click', (event) ->
    event.preventDefault();
    url = event.target.href
    if url and !url.match /\/\/gri.fo/
        event.preventDefault()
        window.open url

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
