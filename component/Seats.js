import React from 'react';
import {View, Text} from 'react-native';

const Seats = (props) => {

    return (
      <View>
          {props.values.map(seat => {
              const isAvailable = props.availableSeats.includes(seat);
              const isBooked = props.bookedSeats.includes(seat);
              let seatClass;
              if(!isAvailable) {
                  seatClass = classes.disabled;
              }
              if(isBooked) {
                  seatClass = classes.booked;
              }
              return <View className={seatClass} onClick={props.addSeat} key={seat}>{seat}</View>;
          })}
      </View>
    );
}
export default Seats;