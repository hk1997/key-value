const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const kv=require('../models/kv');

const sendJsonResponse=(res,status,data)=>{
  return res.status(status).json(data);
}

router.post('/put',(req,res)=>{
  if(!req.body.key || !req.body.value){
      return sendJsonResponse(res,200,{'message':'Key/Value missing in request'});
  }
  let key=req.body.key, val=req.body.value;
  console.log('key & value',key,val);
  kv.findOne({'key':key},(err,result)=>{
    if(err){
      return sendJsonResponse(res,501,err);
    }
    else{
      if(result!=null){
        //key already exist
        kv.updateOne({'key':key},{$set:{'value':val}},(err,result)=>{
          if(err)
            return sendJsonResponse(res,501,err);
          else {
            return sendJsonResponse(res,200,{'message':'update successful'});
          }
        })
      }
      else{
        let new_kv=new kv();
        new_kv.key=key;
        new_kv.value=val;
        new_kv.save((err,result)=>{
          if(err)
            return sendJsonResponse(res,501,err);
          else {
            return sendJsonResponse(res,200,{'message':'new key insertion successful'})
          }
        })
      }
    }
  })
})

router.post('/get',(req,res)=>{
  if(!req.body.key)
    return sendJsonResponse(res,200,{'message':'key missing in request'});
  let key=req.body.key;
  kv.findOne({'key':key},(err,result)=>{
    if(err)
      return sendJsonResponse(res,501,err);
    if(!result)
      return sendJsonResponse(res,200,{'message':'key not found'});
    else {
      return sendJsonResponse(res,200,{'message':result.value})
    }
  })
})

module.exports=router;
