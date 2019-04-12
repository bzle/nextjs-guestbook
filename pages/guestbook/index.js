import "../../scss/styles.scss"
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import guests from '../../data/guests'

export default class extends React.Component {
  static getInitialProps () {
    return { guests: guests }
  }

  render () {
    return (
      <div>
      <div >
        <h3> NEXTHRONE - THE REVELATION OF GAME OF THRONES' CHARACTERS </h3>
      </div>
      <table >
        <thead>
          <tr>
              <th >Character</th>
              <th >Real Name</th>
          </tr>
        </thead>
        <tbody>
          {
              this.props.guests.map( (guest, i) => (
                  <tr key={i}>
                      <td >{ guest.name }</td>
                      <td >
                        <p>{ guest.message }</p>
                      </td>
                  </tr>
              ))
          }
       </tbody>
      </table>
      </div>
    )
  }
}

const styles = {
  th: {
    background: '#00cccc',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '12px',
    padding: '12px 35px',
  },

  header: {
    font: '15px Monaco',
    textAlign: 'center'
  },

  table: {
    fontFamily: 'Arial',
    margin: '25px auto',
    borderCollapse: 'collapse',
    border: '1px solid #eee',
    borderBottom: '2px solid #00cccc'
  },

  td: {
    color: '#999',
    border: '1px solid #eee',
    padding: '12px 35px',
    borderCollapse: 'collapse'
  },

  list: {
    padding: '50px',
    textAlign: 'center'
  },

  photo: {
    display: 'inline-block'
  },

  photoLink: {
    color: '#333',
    verticalAlign: 'middle',
    cursor: 'pointer',
    background: '#eee',
    display: 'inline-block',
    width: '250px',
    height: '250px',
    lineHeight: '250px',
    margin: '10px',
    border: '2px solid transparent',
    ':hover': {
      borderColor: 'blue'
    }
  }
}