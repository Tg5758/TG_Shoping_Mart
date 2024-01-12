import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper} from '@mui/material'

function SmartPhoneBanner()
{
    var items = [
        {
            url:"/images/smartphone/banner1.jpg",
        },
        {
            url:"/images/smartphone/banner2.jpg",
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
              <img
              className='my-5 mx-20'
              style={{height:"600px", width:"90%"}}
            src={props.item.url}
            alt="fast-delivery-icon"
          />

        </Paper>
    )
}



export default SmartPhoneBanner;
