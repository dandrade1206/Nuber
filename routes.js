const FB = require('./fireb');
const moment = require('moment');

module.exports=(app)=>{

    //route for getting all rides
    app.get('/rides', (req, res)=> {
        FB.rides.once('value')
            .then((snap)=>{
                res.json(snap.val())
            })
            .catch((error)=>{
                res.json({statusCode: 'NO_DATA'})
            })
    })

    //route for getting users rides - type - driver or rider
    app.get('/driver/:userid', (req, res)=> {
        FB.rides.orderByKey().once("value")
            .then((snapshot)=>{
                var arrRides=[];
                snapshot.forEach((childSnapshot)=> {                   
                    const driver = childSnapshot.val().driver;
                    if(driver === req.params.userid) {
                        arrRides.push(childSnapshot.val())
                    }
                });
                res.json(arrRides)
            });    
    })           

    //getting a particular user
    app.get('/user/:userid', (req, res)=> {
        FB.users.orderByKey().endAt(req.params.userid).limitToLast(1).once('value')
            .then((snap)=>{
                res.json(snap.val())
            })
            .catch((error)=>{
                res.json({statusCode: 'USER_NOT_FOUND'})
            })            
    })

    //for saving a new ride
    app.post('/newride', (req, res)=> {
        FB.rides.push(req.data).then((response)=>{
           res.json({statusCode: 'OK', key:response.key})
        }).catch((error)=>{
            res.json({statusCode: 'ERROR_ADDING_RIDE'})
        })          
    })

    //for reserving a seat on a ride
    app.post('/reserve', (req, res)=> {
        var updates = {};
        updates['/' + postData.updateKey + '/riders/' + postData.rider] = true;

        FB.rides.update(updates)
            .then(()=>{
                res.json({statusCode: 'OK', ride: postData.updateKey, rider: postData.rider})     
            })
            .catch((error)=>{
                res.json({statusCode: 'ERROR_RESERVING'})                
            })
    })        

    //adduser
    app.post('/adduser', (req, res)=> {
        FB.users.push(req.data).then((response)=>{
           res.json({statusCode: 'OK', key:response.key})
        }).catch((error)=>{
            res.json({statusCode: 'ERROR_ADDING_USER'})
        })       
    })         

    //search for rides
    app.get('/rideSearch', (req, res)=> {
        var postData = {
            date:'06/19/2017',
            time: '8:00 AM',
            direction: 'DT-FR'
        }
        FB.rides.orderByKey().once("value")
            .then((snapshot)=>{
                var arrRides=[]
                const reqTime = moment(postData.time, "HH:mm A")
                snapshot.forEach((ride)=> {                   
                    const rideDate = ride.val().date;
                    const rideTime = moment(ride.val().time, "HH:mm A");
                    const dir = ride.val().direction;
                    var diff = rideTime.diff(reqTime)

                    if(rideDate === postData.date && dir === postData.direction) {
                        if(diff>0 && diff<=7200000) {
                            arrRides.push(ride)
                        }
                    }
                    res.json({statusCode:'OK', rides:arrRides})
                });
            })
            .catch((error)=>{
                res.json({statusCode:'ERROR_SEARCHING'})
            })            
    })
   
   //login - return valid user key
    app.get('/login/:userid', (req, res)=>{
        FB.users.orderByKey().once("value")
            .then((snapshot)=>{
                var VALID_USER = false
                snapshot.forEach((childSnapshot)=> {                   
                    const validUser = childSnapshot.val().email;
                    if(validUser === req.params.userid) {
                        VALID_USER = true;
                        return true
                    }
                });
                res.json({statusCode:'OK', VALID_USER})
            })
            .catch((error)=>{
                res.json({statusCode:'UNABLE_TO_LOGIN'})
            })    
    })

    //delete ride
    app.get('/cancelride/:rideid', (req, res)=>{
        FB.rides.child(req.params.rideid).remove()
            .then(()=>{
                res.json({statusCode:'OK'})
            })
            .catch((error)=>{
                res.json({statusCode: 'ERROR_CANCELLING_RIDE'}) 
            })
    })

    //delete rider
    app.post('/deleterider', (req, res) =>{
            var updates = {};
            updates['/' + req.data.updateKey + '/riders/' + req.data.rider] = false;

            FB.rides.update(updates)
                .then(()=>{
                    res.json({statusCode: 'OK', ride: req.data.updateKey, rider: req.data.rider})     
                })
                .catch((error)=>{
                    res.json({statusCode: 'ERROR_DELETING_RIDER'})                
                })        
    })

    //search for rides
    app.get('/myrides/:userid', (req, res)=> {

        FB.rides.orderByKey().once("value")
            .then((snapshot)=>{
                var arrRides=[]
                snapshot.forEach((ride)=> {         
 
                    if(ride.val().riders[req.params.userid]) {
                        arrRides.push(ride)
                    }
                    res.json({statusCode:'OK', rides:arrRides})
                });
            })
            .catch((error)=>{
                res.json({statusCode:'ERROR_FINDING_RIDES'})
            })            
    })

}