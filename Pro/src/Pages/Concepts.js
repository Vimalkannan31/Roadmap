import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import html from '../assets/Html.png'
export default function Concepts() {
  return (
    <Card sx={{ minWidth: 275, display: 'flex', alignItems: 'center', padding: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <CardMedia
            component="img"
            image={html}
            sx={{
              width: 150,
              height: 160,
            }}
            alt="HTML"
          />
        </Grid>
        <Grid item>
          <CardContent>
            <Typography variant="h5">
              Learn HTML by Mastering the Following Concepts:
            </Typography>
            <Typography variant="p">
            In this HTML course, you'll learn to create web pages using essential elements like headings, paragraphs, lists, links, and images. You'll understand the basics of HTML structure and syntax, and how to use semantic tags to make your content more meaningful. You'll also learn to build forms for user input and add multimedia elements like audio and video. By mastering these concepts, you'll be able to create functional and visually appealing websites.            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}
