'use strict'

exports = module.exports = (
    Module,
    privateConfig,
    publicConfig,
    loaderOverride
) => {
    return {

        bootstrap( ) {
            Module[ privateConfig.overrideMethodName ] = loaderOverride
        },

        run( ) {
            console.log( publicConfig.entry )
        }

    }
}

exports[ '@require' ] = [
    'module',
    'config.private.js',
    'config.public.js',
    'lib/loader-override'
]
