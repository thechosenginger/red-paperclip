import React, { useContext, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ProfileTabs from './ProfileTabs';
import EditProfileButton from './EditProfileButton';
import ProfileActiveItem from './ProfileActiveItem';
import { ItemsContext } from '../ItemsContext';
import AddItem from './AddItem';

const Profile = () => {
  const { currentUserState, isLoggedInState, apiUrlState, activeItemState } =
    useContext(ItemsContext);
  const [currentUser] = currentUserState;
  const [isLoggedIn] = isLoggedInState;
  const [apiUrl, setApiUrl] = apiUrlState;
  const [activeItem, setActiveItem] = activeItemState;
  // console.log('Current user: ', currentUser);
  // console.log('Available item: ', activeItem);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Grid container spacing={5}>
            <Grid item xs={5}>
              <Typography variant="h5" textAlign="center" sx={{ marginTop: 3 }}>
                Hello, {currentUser.firstName}!
              </Typography>
              <Card
                sx={{
                  width: 450,
                  height: 300,
                  backgroundColor: '#494D53',
                  marginTop: 1,
                }}
              >
                <Card
                  sx={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#494D53',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={currentUser.imageUrl}
                    style={{ objectFit: 'cover' }}
                    alt="Profile picture"
                  />
                </Card>
                <EditProfileButton />
              </Card>
              <Card
                sx={{
                  width: 450,
                  height: 600,
                  backgroundColor: '#494D53',
                  marginTop: 5,
                  marginBottom: 10,
                }}
              >
                <Typography
                  variant="h4"
                  textAlign="center"
                  sx={{ marginTop: 1 }}
                >
                  Active Item
                </Typography>
                {currentUser.availableItem && (
                  <ProfileActiveItem activeItem={activeItem} height="50%" />
                )}
                {!currentUser.availableItem && <AddItem type="add" />}
              </Card>

              {/* <Card
            sx={{
              width: 450,
              backgroundColor: '#494D53',
              marginTop: 3,
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              style={{ marginTop: '35px', fontWeight: 800 }}
            >
              Add Item
            </Typography>
            <Grid
              container
              spacing={1}
              style={{ justifyContent: 'space-evenly' }}
            >
              <Grid item xs={12}>
                <AddItem />
              </Grid>
            </Grid>
          </Card> */}
            </Grid>
            <Grid item xs={7} sx={{ marginTop: 1 }}>
              <ProfileTabs />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container item justifyContent="center">
            <Typography
              variant="h3"
              align="center"
              sx={{ color: 'text.white' }}
            >
              Wubba Lubba Dub Dub!
              <br />
              ACCESS DENIED
            </Typography>
          </Grid>
        </>
      )}
    </>
  );
};

export default Profile;
