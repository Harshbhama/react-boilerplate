import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import gstLogin1 from 'images/gstLogin1.jpg';
import gstLogin2 from 'images/gstLogin2.jpg';
import gstLogin3 from 'images/gstLogin3.jpg';

import styles from '../../style.css';
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  useEffect(() => {
    // Update the document title using the browser API
    const k = document.getElementById('app');
    console.log(k);
    k.style.backgroundColor = '#e9ecef';
  });

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Card className="card-1" style={{ marginTop: '10%' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={gstLogin1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              E-invoice
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Provides interoperability and uniform interpretation across the
              entire GST eco-system and allows submission of an already
              generated standard invoice on a common portal{' '}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Upload
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className="card-1" style={{ marginTop: '10%' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={gstLogin2}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              E-waybill
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Integration with enterprise ERP systems for a simplified and
              timely extraction of data to help manage compliance requirements{' '}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Upload
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className="card-1" style={{ marginTop: '10%' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={gstLogin3}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              GSTR1 Return ( ANx1, ANX2)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Real-time analysis of potential mismatches, GST Return generation,
              data reconciliation issues and other bespoke requirements of the
              business{' '}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Upload
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className="card-1" style={{ marginTop: '10%' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={gstLogin1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              GSTR 9 (Annual Return)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
              lacus aliquet, pulvinar ante eget, consectetur leo. Nam vehicula
              dolor mollis, dictum nisi eget, ornare enim.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Upload
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className="card-1" style={{ marginTop: '10%' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={gstLogin1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Reconciliation
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
              lacus aliquet, pulvinar ante eget, consectetur leo. Nam vehicula
              dolor mollis, dictum nisi eget, ornare enim.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Upload
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
