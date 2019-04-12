import "../scss/styles.scss"
import Link from 'next/link'
import guests from '../data/guests'

export default class extends React.Component {
  static getInitialProps () {
    return { guests: guests }
  }

  render () {
    return (
      <div className="app--guestbook">
        <h1>The Guestbook</h1>
        <Link href="/">
          <a className="btn">Back to Homepage</a>
        </Link>
        {
          this.props.guests.map( (guest, i) => (
            <div key={i}>
              <p>{ guest.name }</p>
              <p>{ guest.message }</p>
            </div>
          ))
        }
      </div>
    )
  }
}