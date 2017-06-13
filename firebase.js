const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
module.exports=(()=>{
    // admin.initializeApp({
    //     credential:admin.credential.cert(serviceAccount),
    //     databaseURL: "https://nuber-7bf00.firebaseio.com/"
    // })

    // admin.initializeApp({
    // credential: admin.credential.applicationDefault(),
    // databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
    // });
try {
    admin.initializeApp({
    credential: admin.credential.cert({
        projectId: "nuber-7bf00",
        clientEmail: "nuber-7bf00@appspot.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCeRjRZHm51tgHf\nhjNJunhu7Ln5j7HEnxx7Gqn7M9n3zoMnWusobG+72KSSj0BKDdR39oKllXsf+Alq\nFJgB5uioUNvlftm7SPfEV9QRSs+XNUxfISNldtw18PcVOntaaqLuWS9CHQI8cy/h\nD3hw37noLbkxRx546LhDlaUaDJXesf4kQ1l8uTj2m8fS2rCuHJFZOW1IrZLg9P9w\nIUxIwvXEXKH3yL0GTnqypW0Z7BByKzvGHJpYRKYWHounkEptlQtQN0qo2knEUfAf\nxaNLvhlx7+QhGa3pb3GnIhvLWOFZHPcwL6LIIvEwE5fIu6t/lgKu85sesrqe/8AB\nAK45UEI1AgMBAAECggEAFjvB9EfuV+pEqpfxQfjoHJr0CA7rt7VrPI7TFIbk5mbz\n7RYcRR4wdviYq77kVtLJBz4Rfb25IVVIS0bP0KqVgbl0HnG6l9DI/2OgFnrGHRVf\nYFipHoJ7LjemmeyQcfPbZfSQyy6EhyXeMrUn4+FFvgwYQQgey3jTk6jkm7trXTA2\nrlznvaRNP6fmc2io2LsNCWbs99frjryUF6it+k1tB4h/z2nkVzbDBEmdBv7Ulq/y\nzVlzcJa1GR2cTXMGH5QVNZ3vOMSJ9EHyzYGpPX3lVne/Y0AshN4S8NxiPZGUNArs\n1vRCzqCgBl4SpHVWeLC5I3ZUaObyOu1tzriasJ8e0QKBgQDQsl5RWKcIw1pCuEsy\nhRT/b0FYit6wcozm5n68bRu18a72MXt0ifDb1zeCWkXE5UJDP7802OjHJcfI95Tt\nMY/7AHfVck9bU2fgccgQ0NBCiRhKGhAlNNa34me1Auy7BNsJOcK5TBHYnfeZks/A\ncpuP+MCX7qN8yEMGp50BYF/YJQKBgQDCJhGo0s9u5lD0+HAiEqXK3Uh34WlSS5aW\nWD3qvUiZKWMsRGNTwjizN7Q0b0bfVM7YoricJP0D65zitKwXP3K/hquIExolbbLF\nnAcvxjhf3SBEEYvxN7gFYo9Im0Ezbg1V424pvkOBlbbw/pCfRLLSTsVy3m9+E7M2\n4W57Er3c0QKBgQDFRWXMZQ13RhnC6awDNDMWBRdy18oKZi10cbqo6EYCZVMqWrnE\n/kMTu8s3x5cduEw7fz2BeewHm1nPSOCYmXntHJMpy2TiAeQ2D7e61XeW/TpdiWdr\nlBfHOBcpznrxiXR2swey2goghamvnEwPMQaFP/DlbOlTIYXh+3x4+Z1/lQKBgF9W\nPlm+m2oD40FINhglPBCwNQPZRtTIlXvifRUmOd4sOqzkMDpTJ3CqK+2LryvAA4rR\n7QGQEEa6jmGtAsyvtXNjeBvr9Wznv1/WTJkjJ0+70Dpcu3GKQO00BtRKmOveYOIK\nOnB5I8EgeaNB/laXb5BiagcMP4eTuO98J7p764vhAoGBAIDMGPUhuhFNhB12jJkN\ncDVtSMs5my1pWXPi1TidfauPIv0b51U6RxL0iT8fqIHtrY0yeqLh4mkqwZB1HC6Q\ni33Seet+JjnthCq9jw2M5GSdBu4mdyhvYoNQ9CVTO79dSxqqQZDd35XTmiwCDGMV\np23aYbRcl2553SWgGzmbUobr\n-----END PRIVATE KEY-----\n"
    }),
    databaseURL: "https://nuber-7bf00.firebaseio.com"
    });
}
catch(e) {
    console.log(e.message);
}


    return admin.database();
})();


