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
      <div class="app--guestbook">
        <h1>The Guestbook</h1>
        <Link href="/">
          <a class="btn">Back to Homepage</a>
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