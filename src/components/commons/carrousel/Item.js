import React from 'react';

import { Card, CardMedia, CardTitle } from 'material-ui/Card';

const Item = ({ img, title, description }) => (
  <Card>
    <CardMedia
      overlay={ title ? <CardTitle title={title} subtitle={description}/> : null}
    >
      <img src={img} alt="imagen"/>
    </CardMedia>
  </Card>
);

export default Item;
