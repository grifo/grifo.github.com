{exec} = require 'child_process'
fs = require 'fs'

lastChange = {}

scripts = ['scripts/base.coffee']
styles = ['styles/base.less', 'styles/home.less']

compileCoffee = (file) ->
    exec "coffee -c #{file}", (err, stdout, stderr) ->
        return console.error err if err
        console.log "Compiled #{file}"

compileLess = (file) ->
    exec "lessc #{file} #{file.replace('.less', '.css')}", (err, stdout, stderr) ->
        return console.error err if err
        console.log "Compiled #{file}"

watchFile = (file, fn) ->
    try
        fn file
        fs.watch file, (event, filename) ->
            return if event isnt 'change'
            # ignore repeated event misfires
            fn file if Date.now() - lastChange[file] > 1000
            lastChange[file] = Date.now()
    catch e
        console.log "Error watching #{file}"

task 'build', 'Compile *.coffee and *.less', ->
    compileCoffee(f) for f in scripts
    compileLess(f) for f in styles

task 'watch', 'Compile + watch *.coffee and *.less', ->
    for file in scripts.concat(styles)
        lastChange[file] = 0
        watchFile(file, if /coffee/.test(file) then compileCoffee else compileLess)
        console.log "Watching #{file}"