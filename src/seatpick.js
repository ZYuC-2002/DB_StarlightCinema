import './main.css'
import React from 'react';

export default class SeatPicker extends React.Component {
  
    constructor() {
      super();
        this.state = {
        seat: [
          'A1','A2','A3','A4','A5','A6','A7','A8','A9','A10',
          'B1','B2','B3','B4','B5','B6','B7','B8','B9','B10',
          'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10',
          'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10'
        ],
        seatAvailable: [
            'A1','A2','A3','A6','A7','A8','A9','A10',
            'B1','B2','B3','B4','B5','B6','B7','B8','B9','B10',
            'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10',
            'D1','D2','D3','D4','D5','D6','D7','D8'
        ],
        seatReserved: [],
        seatUnavailable: ['A4', 'A5','D9','D10']
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
              }
            );
          }
        }
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
  
