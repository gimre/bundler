'use strict'

exports = module.exports = (
    privateConfig,
    publicConfig,
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
        for( const processor of processors ) {
            processor( file, optionsFor[ processor ] )
        }

        return originalLoader.apply( this, params )
    }
}

exports[ '@require' ] = [
    'config.private.js',
    'config.public.js',
    'fs',
    'module',
    'path',
    'processors/byte-count'
]
