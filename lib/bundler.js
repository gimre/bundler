'use strict'

exports = module.exports = (
    Module,
    privateConfig,
    loaderOverride
) => {
    return {
        bootstrap( ) {
            Module[ privateConfig.overrideMethodName ] = loaderOverride
        }
    }
}

exports[ '@require' ] = [
    'module',
    'config.private.js',
    'lib/loader-override'
]
