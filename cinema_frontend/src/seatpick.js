import './main.css';
import React from 'react';
import Cookies from 'universal-cookie';

export default class SeatPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      seat: [], // Dynamically generated based on totalSeats
      seatAvailable: [], // Dynamically generated based on totalSeats and seatUnavailable
      seatReserved: [],
      seatUnavailable: [], // Initialize as an empty array, will be updated based on data from the backend
    };
  }

  async componentDidMount() {
    const cookies=new Cookies();
    try {
      const response = await fetch("http://192.168.10.101:5000/get_session_seat", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cinema_id: cookies.get('cinema_id'),
          session_id: cookies.get('session_id'),
          auditorium_id: cookies.get('auditorium_id')
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);

        // Assuming data structure has a key for unavailable seats, adjust this based on your actual data structure
        const seatUnavailable = data.seat_unavailable || [];

        // Generate seat array based on totalSeats (e.g., 50, 40, 30)
        const totalSeats = data.Seat_capacity || 0;
        const seatsPerRow = 10;
        const totalRows = Math.ceil(totalSeats / seatsPerRow);
        const seat = [];

        for (let row = 1; row <= totalRows; row++) {
          for (let col = 1; col <= seatsPerRow; col++) {
            seat.push(`${String.fromCharCode(64 + row)}${col}`);
          }
        }

        // Generate seatAvailable array by filtering out unavailable seats
        const seatAvailable = seat.filter((s) => !seatUnavailable.includes(s));

        this.setState({
          seat,
          seatAvailable,
          seatUnavailable,
        });
      } else {
        console.error('Error fetching data:', data);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }

  onClickData(seat) {
      const total = this.props.totalSeats;
      const isSeatReserved = this.state.seatReserved.indexOf(seat) > -1;
    
      if (isSeatReserved) {
        this.setState(
          {
            seatAvailable: this.state.seatAvailable.concat(seat),
            seatReserved: this.state.seatReserved.filter((res) => res !== seat),
          },
          () => {
            // 在状态更新后执行的逻辑
            this.props.onReservedSeatsCountChange(this.state.seatReserved.length);
          }
        );
      } else {
        if (this.state.seatReserved.length === total) {
          return;
        }
    
        if (this.state.seatUnavailable.indexOf(seat) > -1) {
          return;
        }
    
        if (this.state.seatReserved.indexOf(seat) > -1) {
          this.setState(
            {
              seatAvailable: this.state.seatAvailable.concat(seat),
              seatReserved: this.state.seatReserved.filter((res) => res !== seat),
            },
            () => {
              this.props.onReservedSeatsCountChange(this.state.seatReserved.length);
              this.updateReservedSeatsCookies();
            }
          );
        } else {
          this.setState(
            {
              seatReserved: this.state.seatReserved.concat(seat),
              seatAvailable: this.state.seatAvailable.filter((res) => res !== seat),
            },
            () => {
              this.props.onReservedSeatsCountChange(this.state.seatReserved.length);
              this.updateReservedSeatsCookies();
            }
          );
        }
      }
    }
    updateReservedSeatsCookies() {
      const cookies = new Cookies();
      const reservedSeats = this.state.seatReserved;
      cookies.set('reservedSeats', reservedSeats, { path: '/' });
      console.log(cookies.get('reservedSeats'));
    }
    
  render() {
    return (
      <div className='main-container'>
        <div className='blank'/>
        <DrawGrid 
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          unavailable = {this.state.seatUnavailable}
          onClickData = { this.onClickData.bind(this) }
          />
      </div>
    )
  }
  }

  class DrawGrid extends React.Component {
  render() {
    const seats = this.props.seat;
    const seatRows = [];
    for (let i = 0; i < seats.length; i += 10) {
      seatRows.push(seats.slice(i, i + 10));
    }

    return (
      <div className="container">
        <table className="grid">
          <tbody>
            {seatRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((seat) => (
                  <td
                    className={
                      this.props.reserved.indexOf(seat) > -1
                      //   ? 'reserved'
                      //   : 'available'
                      ? 'reserved'
                      : this.props.unavailable.indexOf(seat) > -1
                      ? 'unavailable'
                      : 'available'
                    }
                    key={seat}
                    onClick={(e) => this.onClickSeat(seat)}
                  >
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
