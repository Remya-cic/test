const express =require('express');
const webpush =require('web-push');
const bodyParser =require('body-parser');
const path =require('path');

const app=express();

app.use(bodyParser.json());


const publicVapidKey='BCQsOC4RGPhy1dLlgUiZzpKJi7EzK-ke3c_YaudnOrWpNz_HWqTGF2SV1-v7Bhs_u35yf6686XsXcAWaD-i9QXE';
const privateVapidkey='J00sOrogubC2bLxRJMIyBrYW4pTd6qrV9O0fYRB6Y_w';


webpush.setVapidDetails('mailto:test@test.com',publicVapidKey,privateVapidkey);

// Subscribe Route

app.post('/subscribe',(req,res)=>{
    //Get pushSubscription object
    const subsciption=req.body;

    // Send 201 - resource created

    res.status(201).json();

    //create payload
    const payload=JSON.stringify({title: 'Push test'})

    //pass object into sendNotification

    webpush.sendNotification(subsciption,payload).catch(err=>console.error(err));

})