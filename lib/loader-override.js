'use strict'

exports = module.exports = (
    privateConfig,
    fs,
    Module,
    path,
    byteCountProcessor
) => {
    const originalLoader = Module[ privateConfig.overrideMethodName ]
    return function( ... params ) {
        const filePath = this._resolveFilename( ... params )
        const isNative = /^[a-zA-Z]{2}/.exec( filePath )

        const file = {
            name:   path.basename( filePath ),
            path:   filePath,
            stream: fs.createReadStream( filePath )
        }

        // run processors
        byteCountProcessor( file ).then( res => console.log( res ) );

        return originalLoader.apply( this, params )
    }
}

exports[ '@require' ] = [
    'config.private.js',
    'fs',
    'module',
    'path',
    'processors/byte-count'
]
