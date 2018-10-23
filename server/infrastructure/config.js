exports.userAdmin = {
    id: 'admin',
    sAMAccountName: 'admin',
    passwd: 'admin'
};

exports.ldap = {
    url: 'ldap://smcad.meteocat.com:389/',
    dn: 'OU=PloneUsers,DC=meteocat,DC=com',
    user: 'cn=usead,cn=Users,dc=meteocat,dc=com',
    passwd: 'userad'
};

exports.mailBustiaPersonal = 'personal@meteo.cat';

var env = {
    development: {
        PORT: '8080',
        BBDD: {
            user: 'postgres',
            database: 'horesFlexibles',
            password: 'f0ntsere',
            host: '10.116.13.49',
            port: 5432,
            max: 10, // max number of clients in the pool
            idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
        },
        relayCorreu: {
            host: 'smccom02',
            port: 25
        }
    },
    proves: {
        PORT: '8585',
        BBDD: {
            user: 'postgres',
            database: 'productes2',
            password: 'f0ntsere',
            host: '10.116.13.49',
            port: 5432,
            max: 10, // max number of clients in the pool
            idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
        },
        relayCorreu: {
            host: 'smccom02',
            port: 25
        }
    },
    test: {
        PORT: '8081',
        BBDD: {
            user: 'postgres',
            database: 'productes2',
            password: 'f0ntsere',
            host: '10.116.13.49',
            port: 5432,
            max: 10, // max number of clients in the pool
            idleTimeoutMillis: 1000, // close idle clients after 1 second
            connectionTimeoutMillis: 1000 // return an error after 1 second if connection could not be established
        },
        relayCorreu: {
            host: 'smccom02',
            port: 25
        }
    }
};

exports.env = process.env.NODE_ENV || 'development';

exports.config = function () {
    var node_env = process.env.NODE_ENV || 'development';
    return env[node_env];
};
