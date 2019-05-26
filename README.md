# Getir Case Study
Nodejs Application for getir case study

## Service Endpoint
> POST :  /api/v1/list/records
```
Should be send to body this sample;
{ 
  "startDate": "2016-01-26", 
  "endDate": "2018-02-02", 
  "minCount": 2700, 
  "maxCount": 3000 
}
```
```
Returned Data; 
{
  "code":0, 
  "msg":"Success", 
  "records":[...] 
} 
```