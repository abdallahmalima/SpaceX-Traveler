import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.spacexdata.com/v3';

const ROCKET_FETCHED = 'rockets/rockets/ROCKET_FETCHED';

const formatedRockets = (response) => response.data.map((rocket) => {
  const {
    id,
    rocket_name: rocketName,
    description,
    flickr_images: [flickrImage],
  } = rocket;
  return {
    id, rocketName, description, flickrImage,
  };
});

const fetchRockets = createAsyncThunk(ROCKET_FETCHED, async () => {
  const res = await axios.get(`${BASE_URL}/rockets`);
  const rockets = formatedRockets(res);
  return rockets;
});

export default fetchRockets;
