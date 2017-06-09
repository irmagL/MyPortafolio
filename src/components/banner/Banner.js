import React, { Component } from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui';

const Banner = () => (
  <div className= "col-md-8">
    <Card>
        <CardMedia
          overlay= { <CardTitle title="Titulo" subtitle= "subtitulo"/> }
        >
            <div style= { estilo.imagen } >
              <img src= "https://s-media-cache-ak0.pinimg.com/originals/ec/72/1b/ec721be6996c02690130666827934f0a.jpg"
              width= "100%"
              height= "400px"
              />
            </div>
        </CardMedia>
    </Card>

  </div>
);

const estilo = {
  imagen: {
    width: '100%',
    height: '400px'
  }
}

export default Banner;
