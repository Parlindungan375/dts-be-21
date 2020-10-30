import { Router } from 'express';
import { FirebaseClient } from '../databases/firebase';
const firebaseClient = new FirebaseClient();

const router = Router();

//@route    POST /fb/antrian
//@desc     Add antrian data
router.post('/antrian', async (req, res, next) => {
  const account = req.body;
  try {
    await firebaseClient.addData(account);
  } catch (error) {
    throw error;
  }

  res.json({
    message: 'success'
  });
});

//@route    GET /fb/antrian
//@desc     Get all antrian data
router.get('/antrian', async (req, res, next) => {
  let accounts;
  try {
    accounts = await firebaseClient.getData();
  } catch(error) {
    return next(error);
  }

  res.json(accounts);
});

//@route    GET /fb/antrian/:id
//@desc     Get antrian by Id
router.get('/antrian/:id', async (req, res, next) => {
  const id =  req.params.id;
  let account;
  try {
    account = await firebaseClient.getDataById(id)
  } catch (error) {
    return next(error);
  }

  res.json(account);
});

//@route    PUT /fb/antrian/:id
//@desc     Update antrian by id
router.put('/antrian/:id', async (req, res, next) => {
  const id =  req.params.id;
  const update = req.body
  let account;
  try {
    account = await firebaseClient.updateData(id, update)
  } catch (error) {
    return next(error);
  }

  res.json(account);
});

//@route    DELETE /fb/antrian/:id
//@desc     Delete antrian by id
router.delete('/antrian/:id', async (req, res, next) => {
  const id =  req.params.id;
  let account;
  try {
    await firebaseClient.deleteData(id)
  } catch (error) {
    return next(error);
  }

  res.json({
    message: 'Data deleted',
  });
});

export default router;