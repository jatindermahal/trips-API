var HTTP_PORT = process.env.PORT || 8080;
var express = require('express');
var cors = require('cors');
var app = express();
const TripDB = require('./modules/tripsDB.js')
const db = new TripDB();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message: "API Listening"});
})

app.post("/api/trips",(req,res)=>{
    db.addNewTrip(req.body).then((trip)=>{
        res.status(201).send(trip);
    }).catch((err)=>{
        res.status(500).send("Failed to add object");
    })
    
})

app.get("/api/trips",(req,res)=>{
    
    const page = req.query.page;
    const perPage = req.query.perPage;
    
    if (page && perPage){ //To ensure query params ares provided
        
        db.getAllTrips(page,perPage).then((trip)=>{
            res.send(trip); //Same as res.status(200).send(trip)
        }).catch((err)=>{
            res.status(400).send(""+ err);
        })
    }else{
        res.status(400).send("Query parameters page and perPage must be present within the query string");
    }
    
})

app.get("/api/trips/:id",(req,res)=>{
    db.getTripById(req.params.id).then((trip)=>{
        res.send(trip);
    }).catch((err)=>{
        res.status(500).send("Failed to get object with id "+ req.params.id);
    })
})

app.put("/api/trips/:id",(req,res)=>{
    db.updateTripById(req.body,req.params.id).then(()=>{
        res.status(204).send("");
    }).catch((err)=>{
        res.status(500).send("Failed to update object");
    })
})

app.delete("/api/trips/:id",(req,res)=>{
    db.deleteTripById(req.params.id).then(()=>{
        res.status(204).send("");
    }).catch((err)=>{
        res.status(500).send("Failed to delete object");
    })
})

app.use((req, res) => {
    res.status(404).send("Resource not found");
  });

db.initialize("mongodb+srv://jpsingh21:web422@cluster0.vokam.mongodb.net/sample_training?retryWrites=true&w=majority").then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});