let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = 'admin';
config.database.password = 'group4';
config.database.port = '39243';
config.database.url = 'ds139243.mlab.com';
config.database.name = 'bobs-computer-repair';


module.exports = config;