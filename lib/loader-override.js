'use strict'

exports = module.exports = (
    Module,
    privateConfig
) => {
    const originalLoader = Module[ privateConfig.overrideMethodName ]
    return function( ... params ) {
        const filePath = this._resolveFilename( ... params )
        console.log( `loaded ${ filePath }${ /^[a-zA-Z]{2}/.exec( filePath ) ? '(native)' : '' }` )
        return originalLoader.apply( this, params )
    }
}

exports[ '@require' ] = [
    'module',
    'config.private.js'
]
