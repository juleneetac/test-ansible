import express, { Request, Response, Router } from 'express';


const router = Router();

// Define routes
router.get('/', (req: Request, res: Response) => {
  let currentDate = new Date().getTime()/1000;
  let dateString = currentDate.toString();
  // Handle GET request
  //res.json(responseData);
  res.send(dateString);
});

export default router;